import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import { useStaticQuery, graphql } from 'gatsby';
import {PostListQuery} from "../../graphql-types"

export const postQuery= graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
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

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery<PostListQuery>(postQuery)  ;

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home"/>
      {postList.map(({ node: {frontmatter}, node }) => {
        {!!frontmatter && (
<PostItem
          background={frontmatter.background}
          category={frontmatter.category}
          date={frontmatter.date}
          timeToRead={node.timeToRead}
          title={frontmatter.title}
          description={frontmatter.description}
        />
        )}
      })}
    </Layout>
  );
};

export default IndexPage;
