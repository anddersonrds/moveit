import {
  css,
  DefaultTheme,
  createGlobalStyle,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/rajdhani-v10-latin-600.woff2') format('woff2');
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

  ${({ theme, removeBg }) => css`
    body {
      color: ${theme.colors.text};
      background: ${theme.colors.background};

      /* ${
        !removeBg &&
        css`
          background-color: ${theme.colors.dark};
        `
      }; */
    }

    body, input, textarea, button {
      font-family: ${theme.font.inter};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
    }
  `};


  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`

export default GlobalStyles
