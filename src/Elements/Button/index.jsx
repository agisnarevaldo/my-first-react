const Button = (props) => {
  const {
    children = "Button",
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-full ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
