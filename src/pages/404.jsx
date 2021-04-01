import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default function NotFound() {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
      <Link to='/'>Go back</Link>
    </Layout>
  );
}
