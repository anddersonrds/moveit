import styled, { css } from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.rajdhani};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};

    > span {
      font-size: 6.25rem;
      margin: 0 ${theme.spacings.xxsmall};
    }
  `}
`

export const CountTime = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;

    background: ${theme.colors.white};
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: ${theme.font.sizes.huge};
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  `}
`
type ButtonProps = {
  isActive?: boolean
}

export const CountdownButton = styled.button<ButtonProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;

    margin-top: ${theme.spacings.medium};
    border: 0;
    border-radius: 5px;
    font-size: 1.25rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    background: ${theme.colors.blue};

    ${
      isActive &&
      css`
        color: ${theme.colors.title};
        background: ${theme.colors.white};
      `
    }

    transition: ${theme.transition.default};

    &:not(:disabled):hover {
      background: ${theme.colors.blueDark};

      ${
        isActive &&
        css`
          color: ${theme.colors.white};
          background: ${theme.colors.red};
        `
      }
    }
  `}

  &:disabled {
    color: ${theme.colors.text};
    background: ${theme.colors.white};
    cursor: not-allowed;
  }
`
