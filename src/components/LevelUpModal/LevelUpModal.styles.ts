import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(242, 243, 245, 0.8);
`

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 400px;
    padding: ${theme.spacings.medium} ${theme.spacings.xlarge};
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    background: ${theme.colors.white};

    header {
      font-size: 8.75rem;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.blue};
      background: url('img/icons/levelup.svg') no-repeat center;
      background-size: contain;
    }

    strong {
      font-size: 2.25rem;
      color: ${theme.colors.text};
    }

    p {
      font-size: 1.25rem;
      color: ${theme.colors.text};
      margin-top: 0.25rem;
    }
  `}
`

export const Button = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border: 0;
  background: transparent;
  font-size: 0;
`
