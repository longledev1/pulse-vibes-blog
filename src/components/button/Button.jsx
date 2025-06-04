import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

export default function Button({
  type = 'button',
  children,
  onClick = () => {},
  isLoading = false,
  to = '',
  ...props
}) {
  const child = isLoading ? (
    <center>
      <AiOutlineLoading3Quarters className="animate-spin size-7" />
    </center>
  ) : (
    children
  );

  const className = `h-[60px] text-white p-3 rounded-md w-full max-w-[300px] bg-primary cursor-pointer hover:brightness-110 disabled:opacity-50 md:text-[16px] disabled:cursor-not-allowed`;

  if (to && typeof to === 'string') {
    return (
      <NavLink to={to}>
        <button
          type={type}
          onClick={onClick}
          {...props} //
          className={className}
        >
          {child}
        </button>
      </NavLink>
    );
  }

  return (
    <button type={type} onClick={onClick} {...props} className={className}>
      {child}
    </button>
  );
}

function ButtonGoogle({
  children,
  type = 'button',
  onClick = () => {},
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative h-[60px] bg-white text-sm border-2 border-gray-500 text-black  p-3 rounded-md w-full max-w-[300px] cursor-pointer hover:brightness-110 disabled:opacity-50 md:text-[16px] disabled:cursor-not-allowed`}
    >
      <span className="absolute left-[5%] top-[50%] transform -translate-y-1/2">
        <FcGoogle className="size-7" />
      </span>
      <span className="ml-6 text-center">{children}</span>
    </button>
  );
}

export { ButtonGoogle };
