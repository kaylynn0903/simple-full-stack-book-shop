import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import LinkButton from "../../components/LinkButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import Button from "../../components/Button";

const Delete = () => {
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/books/${bookId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="delete-container">
        <h2>Are you sure to delete this book?</h2>

        <div className="buttons">
          <Button
            name="Confirm"
            onClick={() => {
              handleDelete();
            }}
            className="button delete"
          />
          <LinkButton name="Decline" to="/" className="button home" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Delete;
