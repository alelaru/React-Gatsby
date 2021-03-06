import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
      <div>
        <h1>Hello</h1>
        <h2>I'm Alejandro a Full-Stack developer and i'm living in Wien</h2>
        <p>Need a developer? <a href="https://twitter.com/laruale">Contact me vía twitter</a></p>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      </div>
    )
}

export default IndexPage;