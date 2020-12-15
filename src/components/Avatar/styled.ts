import styled from 'styled-components';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';
import media from 'styled-media-query';

export type ImgProps = {
  fluid: GatsbyImageFluidProps;
};

export const AvatarWrapper = styled(Img)<ImgProps>`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;

  ${media.lessThan('large')`
  height: 1.875rem;
  width: 1.875rem;
  `}
`;
