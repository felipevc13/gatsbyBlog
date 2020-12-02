import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import { useStaticQuery, graphql } from 'gatsby';
import {PostListQuery, MarkdownRemark} from "../../graphql-types"

export const postQuery = graphql`
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
  const { allMarkdownRemark } = useStaticQuery(postQuery) as PostListQuery  ;

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home"/>
      {postList.map(({node}) => {
        console.log(node.frontmatter)
        {  !!node.frontmatter && (   
<PostItem
          background={node.frontmatter.background}
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          timeToRead={node.timeToRead}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
        />
        )}
      })}
    </Layout>
  );
};

export default IndexPage;
