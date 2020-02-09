import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 5em 0em;
  box-sizing: border-box;
  background: #2d0a2e;
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
    color: #fff;
    margin-bottom: 1.5em;
  }
  .flex-images {
    width: 100vw;
    display: flex;
  }
  .img {
    width: 100%;
    height: 300px;
    min-height: 300px;
  }
  .carousel-indicators li {
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    border: 0px;
  }
  .carousel-indicators {
    bottom: -3.5em;
  }
  a {
    width: 20%;
    height: 300px;
  }
  @media only screen and (max-width: 1300px) {
    padding: 5em 0em 7em 0em;
  }
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
function ImageSection({ data }) {
  const firstCarousel = [];
  const secondCarousel = [];
  for (var i = 0; i < 5; i++) {
    firstCarousel.push(
      <a
        href="https://www.instagram.com/433/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        key={data.allInstaNode.edges[i].node.id}
      >
        <Image
          fluid={
            data.allInstaNode.edges[i].node.localFile.childImageSharp.fluid
          }
          className="img"
          alt="flex"
        />
      </a>
    );
  }
  for (i = 5; i < 10; i++) {
    secondCarousel.push(
      <a
        href="https://www.instagram.com/433/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        key={data.allInstaNode.edges[i].node.id}
      >
        <Image
          fluid={
            data.allInstaNode.edges[i].node.localFile.childImageSharp.fluid
          }
          alt="flex"
        />
      </a>
    );
  }
  return (
    <Container>
      <h2>Instagram Feed</h2>
      <Carousel controls={false} interval={10000}>
        <Carousel.Item>
          <div className="flex-images">{firstCarousel}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex-images">{secondCarousel}</div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(limit: 10, sort: { order: DESC, fields: timestamp }) {
          edges {
            node {
              id
              original
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ImageSection data={data} />}
  />
);
