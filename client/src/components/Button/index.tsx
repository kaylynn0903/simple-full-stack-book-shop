import "./index.scss";

type ButtonProps = {
  name: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      <input
        type="button"
        value={props.name}
        className={props.className}
        onClick={props.onClick}
      ></input>
    </>
  );
};

export default Button;
