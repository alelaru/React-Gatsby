import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import * as blogStyles from "./blog.module.scss";

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
          fields {
            slug 
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
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map((blog) => {
                        return (
                          <li className={blogStyles.post}>
                            <Link to={`/blog/${blog.node.fields.slug}`}>
                            <h2>{blog.node.frontmatter.title}</h2>
                              <p>{blog.node.frontmatter.date}</p>
                            </Link>
                          </li>
                        )
                    })}
                </ol>
            </Layout>
        )
}

console.log("Hola");

export default BlogPage;