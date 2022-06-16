import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
export default function NotFound() {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>Oops! A monster seems to have eaten this page. Or maybe you fell down the wrong wormhole?!</p>
      <Link to='/'>Go back</Link>
    </Layout>
  );
}
