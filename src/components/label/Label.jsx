function Label({ htmlFor = '', children, props }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-bold text-darkgray cursor-pointer"
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
