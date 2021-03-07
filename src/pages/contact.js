import React from 'react';
import Head from '../components/head';

import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"></Head>
            <h1>Contact Us</h1>
            <p>Alejandro Lara Ruiz email:alelaru33@gmail.com tel.066763172281
            </p>
            <p> <a href="https://twitter.com/laruale" rel="noreferrer"  target="_blank">Contact me on twitter</a></p>
        </Layout>
    );
}

export default ContactPage;