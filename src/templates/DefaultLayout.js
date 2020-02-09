import React from "react";
import Navbar from "../components/Navbar";
import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer className="footer" />
    </div>
  );
};

export default DefaultLayout;
