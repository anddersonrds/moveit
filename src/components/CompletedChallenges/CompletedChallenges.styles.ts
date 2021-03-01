import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: ${theme.spacings.xxlarge} 0;
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid #d7d8da;

    font-weight: ${theme.font.normal};

    span {
      &:first-child {
        font-size: 1.25rem;
      }

      &:last-child {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`
