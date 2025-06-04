import { MdDashboard } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa6';
import { FaBoxOpen } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';

export const sidebarNav = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdDashboard className="text-2xl" />,
  },

  {
    title: 'Post',
    path: '/dashboard/posts',
    icon: <FaBookOpen className="text-2xl" />,
  },
  {
    title: 'Category',
    path: '/dashboard/categories',
    icon: <FaBoxOpen className="text-2xl" />,
  },
  {
    title: 'Users',
    path: '/dashboard/users',
    icon: <FaUser className="text-2xl" />,
  },
  {
    title: 'Log out',
    path: '/logout',
    icon: <IoLogOut className="text-2xl" />,
  },
];
