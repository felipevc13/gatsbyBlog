import React from 'react';
import * as S from './styled';
import Icons from './icons';
import links from './content';

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label as keyof typeof Icons];
        return (
          <S.SocialLinksItem key={index}>
            <S.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        );
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
);

export default SocialLinks;
