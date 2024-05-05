"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBook = exports.getAllBooks = void 0;
const pool_1 = __importDefault(require("../database/pool"));
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield pool_1.default
        .query("SELECT * FROM Books")
        .then((result) => {
        const [rows, fields] = result;
        res.status(200).send({ status: 200, message: "OK", data: rows });
    })
        .catch((err) => {
        res.status(400).send({ status: 400, message: err.message });
    });
});
exports.getAllBooks = getAllBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { book_id } = req.params;
    console.log(book_id);
    yield pool_1.default
        .query("SELECT * FROM Books WHERE book_id=?", [book_id])
        .then((result) => {
        const [rows, fields] = result;
        res.status(200).send({ status: 200, message: "OK", data: rows });
    })
        .catch((err) => {
        res.status(400).send({ status: 400, message: err.message });
    });
});
exports.getBook = getBook;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, img } = req.body;
    const create_time = new Date().toISOString();
    yield pool_1.default
        .query("INSERT INTO Books (title, description, price, img, create_time) VALUES (?,?,?,?,?)", [title, description, price, img, create_time])
        .then((result) => {
        const [rows, field] = result;
        res.status(200).send({ status: 200, message: "OK", data: rows });
    })
        .catch((err) => {
        res.status(400).send({ status: 400, message: err.message });
    });
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { book_id } = req.params;
    const { title, description, price, img } = req.body;
    console.log(req.body);
    yield pool_1.default
        .query("UPDATE Books SET title=?, description=?, price=?, img=? WHERE book_id=?", [title, description, price, img, book_id])
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
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { book_id } = req.params;
    yield pool_1.default
        .query("DELETE FROM Books WHERE book_id=?", [book_id])
        .then((result) => {
        const [rows, field] = result;
        if (rows.affectedRows === 0) {
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
});
exports.deleteBook = deleteBook;
