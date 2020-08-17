import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

// highlight-start
export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  let html = post.html.replace(/.md/gi, '');
  if (post.fields?.slug.includes('README')) {
    html = html.replace(
      './LICENSE',
      `${process.env.GATSBY_GITHUB_REPO_URL}/blob/master/LICENSE`
    );
  }
  // highlight-end
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

// highlight-start
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
    }
  }
`;
// highlight-end
