import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const SearchTermInput = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 5vw;

  strong {
    font-size: 20px;
    margin-right: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 150px;
  border-radius: 7px;
  border: 1px solid #ccc;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
    width: 400px;
    border: 1px solid #000;
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
