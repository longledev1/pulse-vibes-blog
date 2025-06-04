import { NavLink } from 'react-router-dom';

function DashboardHeading({ children, tableName, action }) {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">{children}</h1>
        <div className="w-[300px] h-[8px] mb-4 bg-primary"></div>
      </div>
      {action ? (
        <div className="">
          <NavLink
            to={`/dashboard/${tableName ? tableName + "/" : ''}create-new-${action}`}
            className="bg-green-100 p-3 text-primary font-bold rounded-md hover:brightness-90 transition-all duration-200 "
          >
            Create new {action}
          </NavLink>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default DashboardHeading;
