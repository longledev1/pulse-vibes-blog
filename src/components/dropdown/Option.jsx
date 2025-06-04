import React from 'react';
import { useDropDown } from './dropdown-context';
const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropDown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="py-4 px-5 cursor-pointer flex items-center justify-between hover:text-primary transition-all text-sm"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
