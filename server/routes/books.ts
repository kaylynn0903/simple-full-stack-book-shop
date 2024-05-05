import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/books";

const route = express.Router();

route.get("/", getAllBooks);
route.get("/:book_id", getBook);
route.post("/", createBook);
route.patch("/:book_id", updateBook);
route.delete("/:book_id", deleteBook);

export default route;
