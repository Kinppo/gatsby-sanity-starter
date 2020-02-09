import React from "react";
import Carousel from "../components/MyCarousel";
import Layout from "../templates/DefaultLayout";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import InstaPosts from "../components/InstaPosts";
import Seo from "../components/seo";
import Img from "gatsby-image";

const Container = styled.div`
  .cards {
    max-width: 1100px;
    margin: auto;
    box-sizing: border-box;
    margin-bottom: 8em;
    @media only screen and (max-width: 720px) {
      margin-left: 0em;
      width: calc(100%);
    }
  }
  .card {
    border: none;
    justify-content: space-between;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 8em;
    margin-top: 2em;
    box-sizing: border-box;
    @media only screen and (max-width: 1260px) {
      padding: 0% 3%;
      display: inline-block;
      text-align: center;
    }
    @media only screen and (max-width: 400px) {
      padding: 0%;
    }
  }
  .card:nth-child(even) > .card-img {
    order: 2;
  }
  .card-info {
    width: 50%;
    padding: 0% 1%;
    @media only screen and (max-width: 1260px) {
      margin: auto;
    }
  }
  .card-img {
    width: 50%;
    border-radius: 5px;
    margin-bottom: 1em;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.2);
    @media only screen and (max-width: 1182px) {
      max-width: 600px !important;
    }
    @media only screen and (max-width: 515px) {
      width: 330px !important;
    }
  }
  .card-info > h6 {
    font-size: 14px;
    font-weight: 600;
    color: #621367;
    text-transform: uppercase;
  }
  .card-info > h5 {
    font-size: 22px !important;
    font-weight: 550;
    color: #3a416f;
    line-height: 2.5em;
    @media only screen and (max-width: 420px) {
      font-size: 18px !important;
    }
  }
  .card-info > p {
    font-size: 16px;
    color: #5d6494;
    line-height: 1.5em;
    text-align: justify;
  }

  .see-more {
    transition: all 0.6s;
    outline: none;
    display: inline-block;
    padding: 0.65em 2em 0.65em 2em;
    margin-top: 1.5em;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    background: #621367;
    &:hover {
      background: #701675;
    }
    @media only screen and (max-width: 1260px) {
      float: none;
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Container>
      <Seo title="home" />
      <Layout location="/">
        <Carousel />
        <div className="cards">
          {data.allSanityPost.edges.map(({ node }) => (
            <div className="card" key={node.slug.current}>
              <Img
                fixed={node.mainImage.asset.fixed}
                alt="work screenshot"
                className="card-img"
              />
              <div className="card-info">
                <h6>{node.categories[0].title}</h6>
                <h5>{node.title}</h5>
                <p>{node.description}</p>
                <Link to={node.slug.current}>
                  <button className="see-more">SEE MORE</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <InstaPosts />
      </Layout>
    </Container>
  );
};
export default IndexPage;

export const query = graphql`
  query {
    allSanityPost(limit: 5) {
      edges {
        node {
          title
          publishedAt
          description
          slug {
            current
          }
          mainImage {
            asset {
              fixed(width: 400, height: 280) {
                ...GatsbySanityImageFixed
              }
            }
          }
          categories {
            title
          }
        }
      }
    }
  }
`;
