import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const BlogPage = () => {


    const data = useStaticQuery(graphql`
    query{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  } 
`); 

    return (
            <Layout>
                <h1>Blog</h1>
                <p>Post will show up here later on. </p>
                <ol>
                    {data.allMarkdownRemark.edges.map((blog) => {
                        return (
                        <li>
                            <h2>{blog.node.frontmatter.title}</h2>
                            <p>{blog.node.frontmatter.date}</p>
                        </li>)
                    })}
                </ol>
            </Layout>
        )
}

console.log("Hola");

export default BlogPage;