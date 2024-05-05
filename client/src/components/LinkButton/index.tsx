import { Link } from "react-router-dom";
import "./index.scss";

type LinkButtonProps = {
  name: string;
  to: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const LinkButton = (props: LinkButtonProps) => {
  return (
    <>
      <Link to={props.to} className={props.className} onClick={props.onClick}>
        {props.name}
      </Link>
    </>
  );
};

export default LinkButton;
