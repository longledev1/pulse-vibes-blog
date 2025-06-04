import { Link, NavLink } from 'react-router-dom';

function ButtonPost({ children, className, to = '' }) {
  return (
    <div
      className={`p-1 bg-primary rounded-md mt-2 mb-2 text-center ${className}`}
    >
      <Link to={`/category/${to}`}>{children}</Link>
    </div>
  );
}

export default ButtonPost;
