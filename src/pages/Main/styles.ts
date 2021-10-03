import styled from "styled-components";
import defaultAvatar from "../../assets/default_avatar.png";

interface ButtonProps {
  color?: string;
}

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px;

  h1 {
    width: 100%;
    max-width: 1200px;
    color: #fff;
    text-align: left;
  }
`;

export const SearchContainer = styled.div`
  height: 64px;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 32px;
  overflow: hidden;

  input {
    font-size: 20px;
    background: transparent;
    padding: 8px 24px;
    height: 100%;
    flex: 1;
  }

  button {
    width: 72px;
    height: 100%;
    background: #fff;
    color: #fff;
  }
`;

export const HeroesListContainer = styled.div`
  width: 100%;

  ul {
    margin-top: 40px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 21%;
  }
`;

export const HeroItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-radius: 12px;
  margin: 48px 64px;
  width: 216px;
  height: 400px;
  transition: 0.2s;
  position: relative;

  a {
    width: 100%;
    height: 75%;
    overflow: hidden;
    transition: 0.2s;

    &:hover {
      filter: grayscale(60%);
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin: 8px 0;
    width: 100%;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.color ?? "#4272a6"};
  text-transform: uppercase;
  font-weight: bold;
  height: 32px;
  color: #fff;
  width: 100%;
  margin-top: 4px;
  border-radius: 12px;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
