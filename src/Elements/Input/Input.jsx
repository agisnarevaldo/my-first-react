const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm rounded w-full py-2 px-3 text-slate-800 placholder: opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
}

export default Input;
