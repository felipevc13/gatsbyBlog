import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostListPagQuery } from '../../graphql-types';
import { PaginationProps } from '../components/pagination';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

const BlogList: React.FC<PageProps<PostListPagQuery, PaginationProps>> = (props) => {
  const postList = props.data.allMarkdownRemark.edges;

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({ node }) => (
        <PostItem
          slug={node.fields?.slug}
          key={node.frontmatter?.title}
          background={node.frontmatter?.background}
          category={node.frontmatter?.category}
          date={node.frontmatter?.date}
          timeToRead={node.timeToRead}
          title={node.frontmatter?.title}
          description={node.frontmatter?.description}
        />
      ))}

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        numPages={numPages}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostListPag($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
