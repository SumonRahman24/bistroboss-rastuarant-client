import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./../pages/Shared/Navbar/Navbar";
import Footer from "./../pages/Shared/Footer/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  const withoutHeaderFooter = pathname === "/register" || pathname === "/login";

  return (
    <div>
      {withoutHeaderFooter || <Navbar />}
      <Outlet />
      {withoutHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
