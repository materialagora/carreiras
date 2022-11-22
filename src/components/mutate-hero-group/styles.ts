import styled, { css } from "styled-components";
import { SearchInput } from "../../pages/home-page/styles";

export const SearchHeroInput = styled(SearchInput)`
  margin-bottom: 20px;
  width: 500px;
`;

export const HeroGroupWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeroGroupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  padding: 20px;
  border-radius: 7px;
  background-color: transparent;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: transparent;

    ${({ theme }) => css`
      border: 1px solid ${theme.colors.secondary.darkBlue};
      color: ${theme.colors.secondary.blue};
    `}
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary.blue};
    border: 1px solid ${theme.colors.secondary.darkBlue};
    color: ${theme.colors.neutral.white};
    font-weight: bold;
  `}
`;
