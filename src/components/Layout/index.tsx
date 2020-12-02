import React from 'react';
import Sidebar from '../Sidebar';
import GlobalStyles from '../../styles/global';
import MenuBar from "../MenuBar"

import * as S from './styled';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar/>
    </S.LayoutWrapper>
  );
};



export default Layout;
