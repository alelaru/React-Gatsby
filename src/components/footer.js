import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Footer = () => {
    // Call the authors from Graphql
    // const author = useStaticQuery(graphql`
    //     query{
    //         site{
    //             siteMetadata{
    //                 author
    //             }
    //         }
    //     }     
    // `); {author.site.siteMeta.author}

    return (
        <footer>
            <p>Created by , 2021</p>
        </footer>
    );
}

export default Footer;