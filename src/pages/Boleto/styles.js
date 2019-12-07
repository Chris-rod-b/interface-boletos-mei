import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto 0;
  text-align: center;
`;
export const Text = styled.div`
  margin: 0 0 75px;

  div {
    margin: 0 0 20px;
  }
  strong {
    font-size: 22px;
  }
  span {
    font-size: 18px;
  }
`;
export const ProductList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, 0fr);
  grid-gap: 45px;
  list-style: none;
`;

export const Items = styled.li`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px;
  border-color: ${props => (props.error ? '#cc092f' : '#1eb99a')};
  padding: 20px;

  span {
    font-size: 20px;
    color: ${props => (props.error ? '#cc092f' : '#1eb99a')};
  }
  strong {
    font-size: 20px;
    color: ${props => (props.error ? '#cc092f' : '#1eb99a')};
  }
  div {
    color: ${props => (props.error ? '#cc092f' : '#1eb99a')};
    display: flex;
    align-items: center;
    font-size: 16px;
    margin: 5px auto 5px;
    b {
      font-size: 26px;
    }
  }
  p {
    font-size: 18px;
    color: ${props => (props.error ? '#cc092f' : '#1eb99a')};
    font-weight: bold;
    font-style: italic;
  }
`;

export const Accordion = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px;
  border-color: #e1173f;
  padding: 50px 50px 50px;
  margin: 30px auto 0;
  width: 1115px;
  div {
    margin: 0 20px;
  }
  small {
    display: block;
    font-size: 14px;
  }
  strong {
    font-size: 25px;
  }
  b {
    font-size: 40px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
  span {
    font-size: 20px;
  }

  button {
    align-self: center;
    text-decoration: none;
    padding: 10px;
    border: 0;
    width: 200px;
    border-radius: 50px;
    font-size: 14px;
    color: #fff;
    background-color: #e1173f;
    transition: background 0.2s;
    margin: 0 10px 0;

    &:hover {
      background: ${darken(0.05, '#e1173f')};
    }
  }
`;

export const Button = styled.button`
  align-self: center;
  text-decoration: none;
  padding: 5px;
  border: 0;
  width: 100px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 14px;
  font-style: italic;
  color: #fff;
  background-color: #e1173f;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#e1173f')};
  }
`;
