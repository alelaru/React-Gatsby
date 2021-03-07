import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import * as blogStyles from "./blog.module.scss";

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (sort:{fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate (formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
`); 

// X                             <Link to={`/blog/${blog.node.slug}`}>

    return (
            <Layout>
                <h1>Blog</h1>
                <p>Post will show up here later on. </p>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((blog) => {
                        return (
                          <li className={blogStyles.post}>
                            <Link to={`/blog/${blog.node.slug}`}>
                            <h2>{blog.node.title}</h2>
                              <p>{blog.node.publishedDate}</p>
                            </Link>
                          </li>
                        )
                    })}
                </ol>
            </Layout>
        )
}


export default BlogPage;