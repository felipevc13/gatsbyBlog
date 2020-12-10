import React from 'react';
import * as S from './styled';
import { SitePageContextNextPost, SitePageContextPreviousPost } from '../../../graphql-types';

type RecommendedPostsProps = {
  next: SitePageContextNextPost;
  previous: SitePageContextPreviousPost;
};

const RecommendedPosts = ({ next, previous }: RecommendedPostsProps) => (
  <S.RecommendedWrapper>
    {previous && !!previous?.fields?.slug && (
      <S.RecommendedLink to={previous?.fields?.slug} className="previous">
        {previous?.frontmatter?.title}
      </S.RecommendedLink>
    )}
    {next && !!next?.fields?.slug && (
      <S.RecommendedLink to={next?.fields?.slug} className="next">
        {next?.frontmatter?.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

export default RecommendedPosts;
