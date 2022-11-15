import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
  theme?: DefaultTheme | undefined;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
 @font-face {
    font-family: Roboto;
    font-weight: 400;
    src: local('Roboto'), url(/fonts/Roboto-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: Roboto;
    font-weight: 500;
    src: local('Roboto'), url(/fonts/Roboto-Medium.ttf) format('truetype');
  }

  @font-face {
    font-family: Roboto;
    font-weight: 700;
    src: local('Roboto'), url(/fonts/Roboto-Bold.ttf) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.medium};
      font-style: normal;
    }

    input {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.neutral.darkGrey};
      line-height: ${theme.font.sizes.xxlarge};
      padding: ${theme.spacings.xxsmall};
      height: ${theme.spacings.large};
    }

    button {
      font-height: ${theme.font.regular};
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.sizes.xxlarge};
    }

    label {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.small};
      color: ${theme.colors.neutral.darkGrey};
    }

    ul {
      list-style: none;
    }
  `}

`;

export default GlobalStyles;
