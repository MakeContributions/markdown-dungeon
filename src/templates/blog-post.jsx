import React from 'react';
import { graphql } from 'gatsby'; // highlight-line

// highlight-start
export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  let html = post.html.replace(/.md/gi, '');
  if (post.fields?.slug.includes('README')) {
    html = html.replace(
      './LICENSE',
      `${process.env.GITHUB_REPO_URL}/blob/master/LICENSE`
    );
  }
  // highlight-end
  return (
    <div className='blog-post-container'>
      {/* highlight-start */}
      <div className='blog-post'>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      {/* highlight-end */}
    </div>
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
