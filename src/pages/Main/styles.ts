import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

export const Container = styled.div`
  position: relative;
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
    font-size: 96px;
    text-align: center;
    font-style: italic;
    text-shadow: #000 10px 10px;
  }
`;

export const HeaderButtonsContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  button {
    width: 200px;
    height: 40px;

    & + button {
      margin-left: 16px;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.color ?? '#4272a6'};
  text-transform: uppercase;
  font-weight: bold;
  height: 32px;
  color: #fff;
  width: 100%;
  margin-top: 4px;
  transition: 0.2s;
  -webkit-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  transform: skew(-10deg);
  border: 3px solid #000;
  outline: 2px solid #fff;
  outline-offset: -0.3rem;
  transition: 0.3s;

  &:hover {
    outline: 2px solid ${(props) => props.color ?? '#4272a6'};
  }
`;

export const SearchContainer = styled.div`
  height: 64px;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  overflow: hidden;
  -webkit-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  transform: skew(-10deg);

  input {
    font-size: 20px;
    background: transparent;
    padding: 8px 24px;
    height: 100%;
    flex: 1;
    color: #ffcc01;

    &::placeholder {
      color: #ffcc01;
    }
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
  margin: 48px 64px;
  width: 216px;
  height: 400px;
  transition: 0.2s;
  position: relative;
  -webkit-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  transform: skew(-10deg);
  transform-origin: bottom left;

  a {
    width: 100%;
    height: 75%;
    overflow: hidden;
    border: 7px solid #fff;
    outline: 5px solid #000;
    outline-offset: -0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
      border-color: #1064c4;
    }

    img {
      margin-left: 20px solid transparent;
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: 0.3s;

      &:hover {
        height: 110%;
        width: 110%;
      }
    }
  }

  span {
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    margin: 8px 0;
    width: 100%;
    font-style: italic;
    text-shadow: #000 8px 8px;
  }
`;

export const AddToGroupContainer = styled.div`
  padding: 16px;
  min-height: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  h3 {
    margin: 8px 0;
  }

  & > div {
    width: 100%;
    margin-top: 16px;
  }
`;

export const AddToGroupButtonsContainer = styled.div`
  margin-top: auto !important;
`;
