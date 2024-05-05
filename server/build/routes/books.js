"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = require("../controllers/books");
const route = express_1.default.Router();
route.get("/", books_1.getAllBooks);
route.get("/:book_id", books_1.getBook);
route.post("/", books_1.createBook);
route.patch("/:book_id", books_1.updateBook);
route.delete("/:book_id", books_1.deleteBook);
exports.default = route;
