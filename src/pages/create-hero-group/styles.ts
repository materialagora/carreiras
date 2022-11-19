import styled, { css } from "styled-components";
import { SearchInput } from "../home/styles";

export const Wrapper = styled.div`
  margin: 4rem 5vw;
  display: flex;
  flex-direction: column;
`;

export const SearchHeroInput = styled(SearchInput)`
  margin-bottom: 20px;
  width: 500px;
`;

export const CreateHeroGroupWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RemoveButton = styled.button`
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
      color: ${theme.colors.secondary.red};
    `}
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary.red};
    border: 1px solid ${theme.colors.secondary.darkBlue};
    color: ${theme.colors.neutral.white};
    font-weight: bold;
  `}
`;
