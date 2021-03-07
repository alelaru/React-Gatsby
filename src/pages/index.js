import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {

    return(
      <Layout>
        <Head title="Home"></Head>
        <h1>Hello</h1>
        <h2>I'm Alejandro a Full-Stack developer and i'm living in Wien</h2>
      </Layout>
    )
}

export default IndexPage;