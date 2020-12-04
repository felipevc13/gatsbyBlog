import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostQuery } from '../../graphql-types';

const BlogPost: React.FC<PageProps<PostQuery>> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <h1>{post?.frontmatter?.title}</h1>
      {!!post?.html && <div dangerouslySetInnerHTML={{ __html: post?.html }}></div>}
    </>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default BlogPost;
