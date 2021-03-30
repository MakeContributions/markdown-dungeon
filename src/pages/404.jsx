import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function () {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
      <Link to='/'>Go back</Link>
    </Layout>
  );
}
