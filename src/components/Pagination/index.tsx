import React from 'react';
import { Link, PageProps } from 'gatsby';

import * as S from './styled';

export type PaginationProps = {
  isFirst: boolean;
  isLast: boolean;
  currentPage: number;
  numPages: number;
  prevPage?: string;
  nextPage?: string;
};

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }: PaginationProps) => (
  <S.PaginationWrapper>
    {!isFirst && !!prevPage && <Link to={prevPage}>← página anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && !!nextPage && <Link to={nextPage}>proxima página →</Link>}
  </S.PaginationWrapper>
);

export default Pagination;
