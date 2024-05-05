import { useEffect, useState } from "react";
import "./index.scss";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className={showButton ? "show" : "hide"} onClick={scrollUp}>
      <div className="top-button">Top</div>
    </button>
  );
};

export default BackToTopButton;
