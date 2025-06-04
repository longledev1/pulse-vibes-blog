import React from 'react';
import { useDropDown } from './dropdown-context';
const Select = ({ placeholder = '', className = '' }) => {
  const { toggle, show } = useDropDown();
  return (
    <div
      className={`flex items-center justify-between p-4 bg-gray-200 w-full bg-grayLight rounded border border-gray-200 transition duration-200 ease-linear outline-none focus:border-2 focus:border-primary focus:bg-white cursor-pointer ${className}`}
      onClick={toggle}
    >
      <span className="text-gray-500">{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
