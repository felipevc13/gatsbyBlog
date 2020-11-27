import styled from 'styled-components';
import Img, { GatsbyImageFixedProps } from 'gatsby-image';

export type ImgProps = {
  fixed: GatsbyImageFixedProps;
};

export const AvatarWrapper = styled(Img)<ImgProps>`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
`;
