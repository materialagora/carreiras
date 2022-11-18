import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;

  strong {
    ${({ theme }) => css`
      color: ${theme.colors.neutral.lightGrey};
    `}
  }

  span {
    ${({ theme }) => css`
      color: ${theme.colors.neutral.grey};
    `}
  }
`;
