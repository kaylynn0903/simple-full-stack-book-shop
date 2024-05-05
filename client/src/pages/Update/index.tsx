import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LinkButton from "../../components/LinkButton";

import "./index.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

type BookDto = {
  title: string;
  description: string;
  price: string;
  img: string;
  book_id: string;
};

const Update = () => {
  const [book, setBook] = useState<BookDto>({
    title: "",
    description: "",
    price: "",
    img: "",
    book_id: "",
  });

  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/books/${bookId}`);
        setBook(res.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getBook();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(book);

  const handleClick = async (e: React.MouseEvent) => {
    try {
      await axios.patch(`http://localhost:3001/books/${bookId}`, book);
      navigate("/");
    } catch (err: any) {
      console.log({ message: err.message });
    }
  };

  return (
    <>
      <Header />
      <div className="update-container">
        <div className="form-container">
          <form className="form">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="form-data"
            />
            <label htmlFor="description" className="form-label">
              Descripiton:
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={book.description}
              onChange={handleChange}
              className="form-data"
            />
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={book.price}
              onChange={handleChange}
              className="form-data"
            />
            <label htmlFor="img" className="form-label">
              Cover Image:
            </label>
            <input
              type="text"
              placeholder="Cover Image"
              name="img"
              value={book.img}
              onChange={handleChange}
              className="form-data"
            />
          </form>
          <div className="buttons">
            <Button
              name="Update book record"
              className="button update"
              onClick={handleClick}
            />
            <LinkButton
              name="Back to Homepage"
              to="/"
              className="button home"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Update;
