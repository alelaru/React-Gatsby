import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { renderRichText } from "gatsby-source-contentful/rich-text"


export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {

    const options = {
      renderNode: {
        "embedded-asset-block": node => {
          return (
             <>
              {/* <pre>
                <code>{JSON.stringify(node, null, 2)}</code>
              </pre> */}
              <img
                src={node.data.target.fixed.src}
                alt={node.data.target.title}
              />
            </>
          )
  
        },
      },
    }
  
    console.log(renderRichText(data.contentfulBlogPost.body));

  return (
      <Layout>
        <h1>{data.contentfulBlogPost.title}</h1>
        <p>{data.contentfulBlogPost.publishedDate}</p>
        {query && renderRichText(data.contentfulBlogPost.body, options)}
      </Layout>
    )
  }


export default Blog;