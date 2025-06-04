import Header from '../components/layout/header';

import { Outlet } from 'react-router-dom';
function HomePage() {
  return (
    <div className="">
      <Header></Header>
      <main className="w-full h-ful max-w-[1300px] p-[40px] mx-auto pt-[120px]">
        <Outlet />
      </main>
    </div>
  );
}
export default HomePage;
