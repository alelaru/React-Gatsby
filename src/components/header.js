import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
// import "./header.module.scss"
import * as headerStyles from "./header.module.scss"

const Header = () => {
    // Call graphql to get the data
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }     
    `);
     
    
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                   <li><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Main Page</Link></li> 
                   <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog Page</Link></li>
                   <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About Us</Link></li>
                   <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact Us</Link></li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;