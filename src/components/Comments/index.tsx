import React from 'react';
import * as S from './styled';
import ReactDisqusComments from 'react-disqus-comments';

type CommentsProps = {
  url: string;
  title: string;
};

const Comments = ({ url, title }: CommentsProps) => {
  const completeURL = `https://willianjusten.com.br${url}`;
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments shortname="willianjusten" identifier={completeURL} title={title} url={completeURL} />
    </S.CommentsWrapper>
  );
};

export default Comments;
