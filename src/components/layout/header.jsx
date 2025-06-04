import { NavLink } from 'react-router-dom';
import { FaList } from 'react-icons/fa';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useAuth } from '../../context/auth-context';
import { IoIosArrowDown } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import useClickOutSide from '../../hooks/useClickOutside';
import { IoMdPersonAdd } from 'react-icons/io';
import { RiLoginBoxFill } from 'react-icons/ri';
import { auth } from '../../firebase-app/firebase-config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
function Header() {
  const { show, setShow, nodeRef } = useClickOutSide();

  const { userInfo } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    signOut(auth);
    toast.success('Log out successfully');
  };

  const meunLink = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/blog',
      title: 'Blog',
    },
    {
      path: '/contact',
      title: 'Contact',
    },
    {
      path: '/about',
      title: 'About',
    },
  ];
  return (
    <div className="mx-auto bg-white shadow-lg fixed top-0 left-0 right-0 p-4 z-50">
      <div className="hidden justify-between md:flex">
        <div className="flex items-center">
          <a href="">
            <img
              className="block max-w-[200px]"
              srcSet="/images/logo.svg 1x"
              alt=""
            />
          </a>
          <ul className="flex items-centers gap-[20px] ml-2">
            {meunLink.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className="text-gray-500 hover:text-black"
                    href={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="">
            {userInfo?.displayName ? (
              <div className="relative group">
                <div className="flex items-center justify-between gap-x-4 ">
                  <div className="">
                    Welcome back,{' '}
                    <span className="font-bold">{userInfo?.displayName}</span>
                  </div>
                  <div
                    className="relative"
                    ref={nodeRef}
                    onClick={() => setShow(!show)}
                  >
                    <img
                      className="w-[50px] h-[50px] rounded-full object-cover brightness-100 hover:brightness-150 hover:cursor-pointer transition duration-300"
                      src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="User Avatar"
                    />
                    <div className="absolute right-[0] bottom-[-4px] p-[2px]  bg-white rounded-full">
                      <IoIosArrowDown></IoIosArrowDown>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    show
                      ? 'absolute right-6 mt-2 bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-200 z-50'
                      : 'hidden'
                  }`}
                >
                  <ul className="flex flex-col py-2 text-gray-700">
                    <li>
                      <button className="flex  items-center  gap-x-2  w-full text-left px-4 py-2 hover:bg-gray-100">
                        <FaUser className="size-4"></FaUser> Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="flex  items-center  gap-x-2  w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        <IoLogOut className="size-4"></IoLogOut> Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-4">
                <NavLink
                  to="/sign-up"
                  className="flex items-center justify-center gap-x-2 p-2 shadow-lg w-[150px] h-[50px] rounded-md  bg-white text-primary font-bold hover:brightness-90 cursor-pointer"
                >
                  <IoMdPersonAdd className="size-5"></IoMdPersonAdd> Sign Up
                </NavLink>
                <NavLink
                  to="/sign-in"
                  className="flex items-center justify-center gap-x-2 p-2 shadow-lg w-[150px] h-[50px] rounded-md  bg-primary text-white font-bold hover:brightness-90 cursor-pointer"
                >
                  <RiLoginBoxFill className="size-5"></RiLoginBoxFill> Sign In
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative md:hidden">
        <div className="flex items-center">
          <a href="">
            <img className="w-full" src="/images/logo.svg" alt="" />
          </a>
          {/* Button mở / đóng menu */}
          <button onClick={handleOpen} className="z-50 relative">
            {isOpen ? (
              <MdClose className="size-7" />
            ) : (
              <FaList className="size-7" />
            )}
          </button>

          {/* Menu mobile */}
          <div
            className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul className="flex flex-col p-6 gap-4 text-lg">
              {meunLink.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)} // đóng menu khi click
                    className="text-gray-600 hover:text-black"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <li className="flex gap-2 mt-4">
                <button className="flex-1 p-2 border border-gray-200 rounded bg-primary text-white">
                  Sign In
                </button>
                <button className="flex-1 p-2 border border-gray-200 rounded bg-primary text-white">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
