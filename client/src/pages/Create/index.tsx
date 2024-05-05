import axios from "axios";
import React, { useState } from "react";
import LinkButton from "../../components/LinkButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    price: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(newBook);

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3001/books", newBook);
      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status);
        console.error(err.response);
        // Do something with this error...
      } else {
        console.error(err);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="create-container">
        <div className="form-container">
          <form className="form">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              className="form-data"
            />
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
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
              onChange={handleChange}
              className="form-data"
            />
          </form>
          <div className="buttons">
            <Button
              name="Add a new book"
              className="button create"
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

export default Create;
