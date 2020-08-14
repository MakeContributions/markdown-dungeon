import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Home({ data }) {
  const post = data.markdownRemark;
  let html = post.html.replace(/.md/gi, '');
  html = html.replace(
    './LICENSE',
    `${process.env.GATSBY_GITHUB_REPO_URL}/blob/master/LICENSE`
  );
  return (
    <Layout>
      <div
        className='blog-post-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { regex: "/README/" } }) {
      html
    }
  }
`;
