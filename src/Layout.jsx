import {} from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
