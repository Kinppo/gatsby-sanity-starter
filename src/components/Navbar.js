import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 2em 0em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .nav-link {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.4em 1.2em;
    color: #000;
    margin: 0em 0.5em;
  }
  .hamburger {
    display: none;
  }
  @media only screen and (max-width: 460px) {
    .nav-link {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;
export default function Navbar() {
  const [SideBarIsActive, toggleSideBar] = useState(false);
  const openSideBar = () => {
    toggleSideBar(true);
  };
  const activeStyle = {
    color: "#fff",
    background: "#390b3c"
  };
  return (
    <Container>
      <Link className="nav-link" to="/" activeStyle={activeStyle}>
        Home
      </Link>

      <Link className="nav-link" to="/posts" activeStyle={activeStyle}>
        Blogs
      </Link>

      <Link to="/about" className="nav-link" activeStyle={activeStyle}>
        About
      </Link>

      <Link to="/contact" className="nav-link" activeStyle={activeStyle}>
        Contact
      </Link>

      <span
        className="hamburger"
        onClick={() => openSideBar()}
        style={{ position: "absolute", right: "3em", top: "1em" }}
      >
        <Hamburger />
      </span>
      <SideBar
        SideBarIsActive={SideBarIsActive}
        toggleSideBar={toggleSideBar}
      />
    </Container>
  );
}
