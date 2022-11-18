import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 4rem 5vw;

    ${({ theme }) => css`
      color: ${theme.colors.secondary.red};
    `}
  }

  h2 {
    ${({ theme }) => css`
      color: ${theme.colors.secondary.red};
    `}
  }
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
`;

export const Form = styled.form`
  position: relative;
  width: 30rem;
  background: #57bd84;
  border-radius: 0.7rem;
`;

export const SearchHeroInput = styled.div`
  display: flex;
  /* align-items: center; */
  margin: 4rem 5vw;
  gap: 20px;

  strong {
    font-size: 40px;
    ${({ theme }) => css`
      color: ${theme.colors.neutral.white};
    `}
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 40px;
    font-weight: bold;
    ${({ theme }) => css`
      color: ${theme.colors.secondary.red};
    `}
  }
`;

export const SearchInput = styled.input`
  width: 400px;
  padding: 20px;
  border-radius: 7px;

  background-color: transparent;
  transition: all 0.5s ease;
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.secondary.darkBlue};
  `}

  &:focus {
    outline: none;
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.secondary.red};
    `}
  }
`;

export const PersonContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  margin-left: 70px;
  box-shadow: 0 0 1px #000;
  background-color: #ccc;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const TextFriends = styled.h2`
  margin-left: 70px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid #ccc;
  background-color: #ccc;
  color: #000;
  border-radius: 7px;
  cursor: pointer;
  margin-left: 40px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
