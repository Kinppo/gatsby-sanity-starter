import React from "react";
import styled from "styled-components";
import Layout from "../templates/DefaultLayout";
import Image from "gatsby-image";
import { graphql } from "gatsby";
import Seo from "../components/seo";

const Container = styled.div`
  .mh-about {
    height: 100%;
    min-height: calc(100vh - 121px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5em;
  }
  .mh-about .mh-about-inner h2 {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .mh-about .mh-about-inner p {
    margin-bottom: 30px;
  }
  .mh-about .mh-about-inner .btn {
    margin-top: 20px;
  }
  h2 {
    text-align: center;
    margin-bottom: 2em;
    margin-top: 2em;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .mh-about-tag {
    word-break: break-all;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .mh-about-tag li {
    margin: 0px 6px;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 4px 0px;
    display: inline-block;
    margin-bottom: 2em;
  }
  .mh-about-tag li span {
    border: 1px solid #621367;
    padding: 4px 10px;
    border-radius: 4px;
  }
  .mh-about-tag li span:hover {
    background-color: transparent !important;
  }
  a:hover {
    text-decoration: none;
  }
`;
function About({ data }) {
  return (
    <Container>
      <Seo title="blogs" />
      <Layout location="about">
        <section className="mh-about" id="mh-about">
          <div className="container">
            <h2>About Me</h2>
            <div className="row section-separator">
              <div className="col-sm-12 col-md-6">
                <div className="mh-about-img shadow-2">
                  <Image
                    fluid={data.file.childImageSharp.fluid}
                    alt="svg"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-about-inner">
                  <h5>Hello, I’m a John,</h5>
                  <p className="wow fadeInUp">
                    I'm a Web consultant based on New York. I have rich
                    experience that is that extends over 8 years in the web
                    consulting filed. Also I am good at Hello, I’m a John, web
                    consultant based on New York. I have rich experience that is
                    that extends over 8 years in the web consulting filed. Also
                    I am good at Hello, I’m a John, web consultant based on New
                  </p>
                  <ul className="mh-about-tag">
                    <li>
                      <span>php</span>
                    </li>
                    <li>
                      <span>html</span>
                    </li>
                    <li>
                      <span>css</span>
                    </li>
                    <li>
                      <span>php</span>
                    </li>
                    <li>
                      <span>wordpress</span>
                    </li>
                    <li>
                      <span>React</span>
                    </li>
                    <li>
                      <span>Javascript</span>
                    </li>
                  </ul>
                  <a
                    href=" "
                    className="btn-fill"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Container>
  );
}

export default About;

export const query = graphql`
  query {
    file(relativePath: { eq: "svg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
