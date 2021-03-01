import styled, { css } from 'styled-components'

type XpBarProps = {
  value: number
}

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      font-size: ${theme.font.sizes.small};
    }

    > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background-color: ${theme.colors.grayLine};
      margin: 0 ${theme.spacings.small};
      position: relative;
    }
  `}
`

export const ProgressXpBar = styled.div<XpBarProps>`
  ${({ theme, value }) => css`
    height: 4px;
    width: ${value}%;
    border-radius: 4px;
    background-color: ${theme.colors.green};
  `}
`

export const CurrentXp = styled.span<XpBarProps>`
  ${({ value }) => css`
    position: absolute;
    top: 12px;
    left: ${value}%;
    transform: translateX(-50%);
  `};
`
