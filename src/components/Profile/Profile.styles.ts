import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > img {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
    }

    > div {
      margin-left: ${theme.spacings.small};
    }
  `}
`

export const NameInfo = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};
  `}
`

export const LevelInfo = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xxsmall};

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
