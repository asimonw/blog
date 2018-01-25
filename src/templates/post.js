import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <Helmet title={`Blog - ${post.frontmatter.title}`} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
