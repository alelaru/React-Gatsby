import { Link } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"></Head>
            <h1>Page not found</h1>
            <Link to="/">Go back to the main page</Link>
        </Layout>
    );
}

export default NotFound;