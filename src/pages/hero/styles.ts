import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 5vw;
  display: flex;
  gap: 20px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  strong {
    font-size: 30px;
    ${({ theme }) => css`
      color: ${theme.colors.secondary.red};
    `}
  }
`;

export const Right = styled.div``;

export const Image = styled.img`
  width: 350px;
  height: 400px;
  border-radius: 7px;
`;
