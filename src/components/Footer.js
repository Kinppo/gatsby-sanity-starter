import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  background: #2d0a2e;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  .site-foot-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .site-foot-nav-right a:last-child {
    padding-right: 0;
  }
  .site-foot-nav div {
    margin: 0em 0.5em;
  }
  @media only screen and (max-width: 485px) {
    .site-foot-nav {
      justify-content: center;
    }
    .site-foot-nav-left {
      margin-bottom: 1em;
    }
  }
`;
function Footer() {
  return (
    <Container>
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left">All rights reserved © 2020</div>
        <div className="site-foot-nav-right">Developed By Mbk</div>
      </div>
    </Container>
  );
}

export default Footer;
