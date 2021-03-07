// import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as footerStyles from "./footer.module.scss"

const Footer = () => {
    // Call the authors from Graphql
    // const data = useStaticQuery(graphql`
    //     query{
    //         site{
    //             siteMetadata{
    //                 author
    //             }
    //         }
    //     }     
    // `); 

    return (
        <footer className={footerStyles.footer}>
            <p>Created by "Alejando Lara", 2021</p>
        </footer>
    );
}

export default Footer;