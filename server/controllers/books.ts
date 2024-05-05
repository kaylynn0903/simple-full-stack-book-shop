import { RequestHandler } from "express";
import pool from "../database/pool";
import { QueryResult, ResultSetHeader } from "mysql2";

export const getAllBooks: RequestHandler = async (req, res) => {
  await pool
    .query("SELECT * FROM Books")
    .then((result) => {
      const [rows, fields] = result;
      res.status(200).send({ status: 200, message: "OK", data: rows });
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};

export const getBook: RequestHandler = async (req, res) => {
  const { book_id } = req.params;
  console.log(book_id);
  await pool
    .query("SELECT * FROM Books WHERE book_id=?", [book_id])
    .then((result) => {
      const [rows, fields] = result;
      res.status(200).send({ status: 200, message: "OK", data: rows });
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};

export const createBook: RequestHandler = async (req, res) => {
  const { title, description, price, img } = req.body;
  const create_time = new Date().toISOString();
  await pool
    .query(
      "INSERT INTO Books (title, description, price, img, create_time) VALUES (?,?,?,?,?)",
      [title, description, price, img, create_time]
    )
    .then((result) => {
      const [rows, field] = result;
      res.status(200).send({ status: 200, message: "OK", data: rows });
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message });
    });
};

export const updateBook: RequestHandler = async (req, res) => {
  const { book_id } = req.params;
  const { title, description, price, img } = req.body;
  console.log(req.body);
  await pool
    .query(
      "UPDATE Books SET title=?, description=?, price=?, img=? WHERE book_id=?",
      [title, description, price, img, book_id]
    )
    .then((result) => {
      const [rows, field] = result;
      res.send({
        status: 200,
        message: `Book '${book_id}' update successful!`,
        data: rows,
      });
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message, data: [] });
    });
};

export const deleteBook: RequestHandler = async (req, res) => {
  const { book_id } = req.params;
  await pool
    .query("DELETE FROM Books WHERE book_id=?", [book_id])
    .then((result) => {
      const [rows, field] = result;
      if ((rows as ResultSetHeader).affectedRows === 0) {
        res.status(400).send({
          status: 400,
          message: `Cannot find Book '${book_id}'!`,
          data: [],
        });
        return;
      }
      res.send({
        status: 200,
        message: `Book '${book_id}' was deleted!`,
        data: [],
      });
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message, data: [] });
    });
};
