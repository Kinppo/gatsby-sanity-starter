import React from "react";
import { graphql } from "gatsby";
import Layout from "./DefaultLayout";
import styled from "styled-components";
import Image from "gatsby-image";
import BlockContent from "../components/block-content";
import Seo from "../components/seo";
const Container = styled.div`
  max-width: 1000px;
  margin: 7em auto;
  font-family: Poppins, sans-serif;
  img {
    width: 100%;
    height: 560px;
    border-radius: 2px;
    padding: 0em 1em;
  }
  h1 {
    font-size: 50px;
    font-weight: 700;
    color: #333;
    text-transform: capitalize;
    margin-bottom: 0.8em;
  }
  .content {
    padding: 5em;
  }

  .date {
    color: #666;
    text-align: right;
    margin-top: 2em;
    font-size: 14px;
  }
`;
export default function blog({ data }) {
  return (
    <Layout>
      <Seo title="blog" />
      <Container>
        <Image
          fluid={data.sanityPost.mainImage.asset.fluid}
          alt={data.sanityPost.title}
        />
        <div className="content">
          <h1>{data.sanityPost.title}</h1>
          <BlockContent blocks={data.sanityPost._rawBody} />
          <p className="date">{data.sanityPost.publishedAt}</p>
        </div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      description
      categories {
        title
      }
      _rawBody
      publishedAt
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
