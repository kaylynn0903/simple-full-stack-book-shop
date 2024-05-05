import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkButton from "../../components/LinkButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";

type BookDto = {
  book_id: string;
  title: string;
  description: string;
  price: string;
  img: string;
};

const Book = () => {
  const [book, setBook] = useState<BookDto>({
    title: "",
    description: "",
    price: "",
    img: "",
    book_id: "",
  });

  const param = useParams<{ bookId: string }>();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/books/${param.bookId}`
        );
        setBook(res.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getBook();
  }, []);

  return (
    <>
      <Header />
      <div className="book-container">
        <div className="containers">
          <div className="cover-container">
            <img src={book.img} alt="" className="cover" />
          </div>
          <div className="content-container">
            <h2>{book.title}</h2>
            <h3>Description</h3>
            <p>{book.description}</p>
            <h3>Price</h3>
            <p>{book.price}</p>
          </div>
        </div>
        <div className="buttons">
          <LinkButton
            name="Update"
            to={`/update/${book.book_id}`}
            className="button update"
          />
          <LinkButton name="Back to Homapage" to="/" className="button home" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Book;
