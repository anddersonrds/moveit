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

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  body, button, input, textarea {
    font: 400, 1rem, 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg && css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `};

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; // This will reduce the font size by one pixel from the default 16px
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%; // This will reduce the font size by two pixel from the default 16px
    }
  }
`

export default GlobalStyles
