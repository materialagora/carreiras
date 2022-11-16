import styled, { css } from "styled-components";

export const HeroImage = styled.div`
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 20px;

  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    background: ${theme.colors.linear.dark},
      url("https://64.media.tumblr.com/80c00f7e1e6cbd1475da15775090c0f5/tumblr_ozqcrghFre1v8545ko2_1280.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  `}
`;

export const HeroContents = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      color: ${theme.colors.neutral.white};

      h1 {
        text-transform: uppercase;
        font-size: ${theme.font.sizes.xxxlarge};
      }
    `;
  }}
`;
