import React from "react";
import Layout from "../templates/DefaultLayout";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";

const Container = styled.div`
  width: 100%;
  .blogs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: auto;
    margin-bottom: 158px;
    margin-top: 200px;
  }
  a {
    color: inherit;
    margin-bottom: 2em;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Blogs = ({ data }) => {
  return (
    <Container>
      <Seo title="blogs" />
      <Layout location="blogs">
        <div className="blogs">
          {data.allSanityPost.edges.map(({ node }) => (
            <Link to={node.slug.current} key={node.title}>
              <BlogCard
                title={node.title}
                img={node.mainImage}
                desc={node.description}
                date={node.publishedAt}
                width="350px"
              />
            </Link>
          ))}
        </div>
      </Layout>
    </Container>
  );
};
export default Blogs;

export const blogs = graphql`
  query {
    allSanityPost(limit: 100) {
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
              fluid {
                ...GatsbySanityImageFluid
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
