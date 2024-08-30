import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./header/header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
