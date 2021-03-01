import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 5px;
    text-align: center;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    background: ${theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  `}
`

export const ChallegeActive = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    header {
      font-size: 1.25rem;
      font-weight: ${theme.font.bold};
      padding: 0 ${theme.spacings.medium} ${theme.spacings.small};
      color: ${theme.colors.blue};
      border-bottom: 1px solid ${theme.colors.grayLine};
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;

      strong {
        font-size: 2rem;
        font-weight: ${theme.font.bold};
        color: ${theme.colors.title};
        margin: ${theme.spacings.small} 0 ${theme.spacings.xsmall};
      }

      p {
        line-height: 1.5;
      }
    }

    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  `}
`

export const ChallegeNotActive = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      line-height: 1.4;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      max-width: 70%;
      margin-top: ${theme.spacings.xlarge};

      img {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`

const colorModifiers = {
  failed: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
    &:hover {
      background: ${darken(0.1, theme.colors.red)};
    }
  `,

  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
    &:hover {
      background: ${darken(0.1, theme.colors.green)};
    }
  `
}

type ButtonProps = {
  status: 'failed' | 'success'
}

export const ChallegeButton = styled.div<ButtonProps>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    border: 0;
    border-radius: 5px;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    transition: background ${theme.transition.default};

    ${!!status && colorModifiers[status](theme)};
  `}
`
