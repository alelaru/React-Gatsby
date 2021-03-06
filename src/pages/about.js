import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const AboutPage = () => {
    return (
        <Layout>
            <h1>About Us</h1>
            <p>This is a React project started on March 2021</p>
            <p> <Link to="/contact">Go to contact page</Link></p>
        </Layout>
    )
}

export default AboutPage;