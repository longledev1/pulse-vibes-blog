import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className="flex items-center ml-auto p-4 bg-white shadow-md w-full">
      <div className="ml-auto flex items-center gap-x-4">
        <NavLink
          to="/dashboard/create-new-post"
          className="bg-primary p-3 text-white font-bold rounded-md hover:brightness-90 transition-all duration-200 "
        >
          Create New Post
        </NavLink>
        <p>
          Welcome back, <b> Long</b>
        </p>
        <img
          src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user-admin"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
