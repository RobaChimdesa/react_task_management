// import Header from "../module/Header";
import { Outlet } from "react-router-dom";
import Header from "../module/common/Header";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
