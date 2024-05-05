import { useLocation } from "react-router-dom";
import "./index.scss";

const Header = () => {
  const location = useLocation();

  const path = location.pathname.split("/")[1];
  const getLabel = () => {
    switch (path) {
      case "":
        return "Book Shop";
      case "book":
        return "Book";
      case "create":
        return "Create Book";
      case "delete":
        return "Delete Book";
      case "update":
        return "Update Book";
      default:
        return "Book Shop";
    }
  };
  return (
    <>
      <header className="header-container">
        <h1>{getLabel()}</h1>
      </header>
    </>
  );
};

export default Header;
