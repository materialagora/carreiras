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
  position: relative;

  h1 {
    width: 100%;
    max-width: 1200px;
    color: #fff;
    text-align: left;
    font-size: 48px;
    font-style: italic;
    text-shadow: #000 7px 7px;
    font-style: italic;
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

export const GroupsContainer = styled.div`
  width: 100%;

  ul {
    margin-top: 40px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 21%;

    li {
      width: 220px;
      height: 110px;
      margin: 48px 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      a {
        background-color: rgba(0, 0, 0, 0.7);
        border: 7px solid #fff;
        outline: 5px solid #000;
        outline-offset: -0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 216px;
        height: 108px;
        transition: 0.2s;
        position: relative;
        -webkit-transform: skew(-10deg);
        -ms-transform: skew(-10deg);
        transform: skew(-10deg);
        transform-origin: bottom left;
        transition: 0.2s;
        cursor: pointer;
        text-decoration: none;
        font-weight: bold;
        font-size: 24px;

        &:hover {
          font-size: 26px;
          border-color: #1064c4;
          background-color: rgba(0, 0, 0, 0.9);
          width: 220px;
          height: 110px;
        }
      }

      button {
        position: absolute;
        top: -10px;
        right: -30px;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 50%;
        height: 34px;
        width: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const CreateGroupFormContainer = styled.div`
  input {
    height: 64px;
    width: 100%;
    background: #fff;
    outline: 1px solid #000;
    outline-offset: -0.3rem;
    margin-top: 16px;
    overflow: hidden;
    -webkit-transform: skew(-10deg);
    -ms-transform: skew(-10deg);
    transform: skew(-10deg);
    font-size: 20px;
    padding: 16px;
    height: 100%;
    flex: 1;
    color: #000;

    &::placeholder {
      color: #c2c2c2;
    }
  }

  button {
    margin-top: 24px;
  }
`;
