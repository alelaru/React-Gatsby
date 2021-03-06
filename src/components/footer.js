import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Footer = () => {
    // Call the authors from Graphql
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }     
    `); 

    return (
        <footer>
            <p>Created by "{data.site.siteMetadata.author}", 2021</p>
        </footer>
    );
}

export default Footer;