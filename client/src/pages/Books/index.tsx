import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";

import "./index.scss";

type BookDto = {
  book_id: string;
  title: string;
  description: string;
  price: string;
  img: string;
  create_time: string;
};

const Books = () => {
  const [books, setBooks] = useState<BookDto[]>([]);

  useEffect(() => {
    const showAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/books");
        setBooks(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    showAllBooks();
  }, []);

  return (
    <>
      <Header />
      <div className="books">
        {books
          .sort((a: BookDto, b: BookDto) => {
            if (new Date(a.create_time) > new Date(b.create_time)) {
              return -1;
            } else {
              return 1;
            }
          })
          .map((book) => (
            <div className="book" key={book.book_id}>
              <div className="container">
                <div className="content">
                  {book.img && <img src={book.img} alt="" className="cover" />}
                  <Link to={`/book/${book.book_id}`} className="book-detail">
                    <h2>{book.title}</h2>
                  </Link>
                </div>
                <div className="buttons">
                  <LinkButton
                    name="Update"
                    to={`/update/${book.book_id}`}
                    className="button update"
                  />
                  <LinkButton
                    name="Delete"
                    to={`/delete/${book.book_id}`}
                    className="button delete"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <LinkButton name="Create" to="/create" className="create-button" />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Books;
