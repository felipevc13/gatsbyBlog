import React from 'react';
import * as S from './styled';
import { MarkdownRemarkFrontmatter, MarkdownRemark, MarkdownRemarkFields } from '../../../graphql-types';

const PostItem = ({
  background,
  category,
  date,
  timeToRead,
  title,
  description,
  slug,
}: MarkdownRemarkFrontmatter & Pick<MarkdownRemark, 'timeToRead'> & MarkdownRemarkFields) => (
  <S.PostItemLink to={slug!}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

export default PostItem;
