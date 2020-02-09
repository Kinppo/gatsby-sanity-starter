import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import { Carousel } from "react-bootstrap";
const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 6em;
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      url(${require(`../images/l-b.png`)});
    opacity: 1;
    width: 48px;
    height: 48px;
    font-weight: 700;
  }
  .carousel-control-next-icon {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      url(${require(`../images/r-b.png`)});
  }
  h4 {
    letter-spacing: 0.035em;
    vertical-align: baseline;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    color: #333;
    word-wrap: break-word;
    padding: 0.5em 1em;
    font-size: 36px;
    line-height: 1.126em;
    background-size: 100% 80%;
    background-repeat: no-repeat;
    background: #fff;
    width: 70%;
    margin: auto;
    transition: all 0.6s;
    &:hover {
      color: #c35794;
    }
  }
  .img {
    width: 100%;
    height: 700px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .link {
    height: 100%;
    width: 100%;
    color: #000;
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
  @media only screen and (max-width: 720px) {
    h4 {
      font-size: 20px;
      width: 100%;
    }
  }
`;

class MyCarousel extends React.Component {
  render() {
    return (
      <Container>
        <Carousel indicators={false}>
          {this.props.data.allSanityPost.edges.map(({ node }) => (
            <Carousel.Item key={node.title}>
              <Link to={node.slug.current} className="link">
                <div
                  style={{
                    backgroundImage: `url(${node.mainImage.asset.fluid.src})`
                  }}
                  className="img"
                ></div>

                <Carousel.Caption>
                  <h4>{`This is the title of ${node.title}`}</h4>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allSanityPost(limit: 3) {
          edges {
            node {
              title
              slug {
                current
              }
              mainImage {
                asset {
                  fluid(maxHeight: 700, maxWidth: 1920) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <MyCarousel data={data} />}
  />
);
