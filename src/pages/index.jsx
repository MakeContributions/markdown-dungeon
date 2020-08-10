import React from 'react';
import { graphql } from 'gatsby';

export default function Home({ data }) {
  const post = data.markdownRemark;
  let html = post.html.replace(/.md/gi, '');
  html = html.replace(
    './LICENSE',
    `${process.env.GITHUB_REPO_URL}/blob/master/LICENSE`
  );
  return (
    <div>
      {/* highlight-start */}
      <div>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      {/* highlight-end */}
    </div>
  );
}

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { regex: "/README/" } }) {
      html
    }
  }
`;
