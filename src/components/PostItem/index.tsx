import React from "react";
import * as S from "./styled"

export type PostItemProps = {
  slug: string
  category: string
  date: string
  timeToRead: string
  title: string
  description: string
  background?: string
}

const PostItem = ({background = "#1fa1f2", slug, category, date, timeToRead, title, description}: PostItemProps) => (
<S.PostItemLink to="/slug/">
<S.PostItemWrapper>
  <S.PostItemTag background={background}>Misc</S.PostItemTag>
  <S.PostItemInfo>
    <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
    <S.PostItemTitle>{title}</S.PostItemTitle>
    <S.PostItemDescription>
    {description}
    </S.PostItemDescription>
  </S.PostItemInfo>
</S.PostItemWrapper>
</S.PostItemLink>
) 

export default PostItem