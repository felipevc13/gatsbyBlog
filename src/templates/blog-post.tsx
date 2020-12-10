import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostQuery, SitePageContext } from '../../graphql-types';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

import * as S from '../components/Post/styled';

const BlogPost: React.FC<PageProps<PostQuery, SitePageContext>> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  return (
    <Layout>
      {!!post?.frontmatter?.title && <SEO title={post?.frontmatter?.title} />}
      <S.PostHeader>
        <S.PostDate>
          {post?.frontmatter?.date} • {post?.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post?.frontmatter?.title}</S.PostTitle>
        <S.PostDescription>{post?.frontmatter?.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <h1>{post?.frontmatter?.title}</h1>
        {!!post?.html && <div dangerouslySetInnerHTML={{ __html: post?.html }}></div>}
      </S.MainContent>
      <RecommendedPosts next={next!} previous={previous!} />
      <Comments url={post?.fields?.slug!} title={post?.frontmatter?.title!} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
