import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const Form = styled.form`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #666666;
      text-align: left;
      font-size: 18px;
    }
  }
`;

export const Term = styled(Link)`
  color: #666666;
  text-decoration: underline;
  transition: color 0.2s;
  &:visited {
    color: #666666;
  }
  &:active {
    color: #e1173f;
  }
  &:hover {
    color: #e1173f;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 15px 20px;
  margin: 0 auto 30px;
  font-size: 20px;
  width: 300px;
  height: 55px;
  border: solid 1px #666666;
  background-color: #ffffff;
`;

export const Button = styled(Link)`
  text-decoration: none;
  display: block;
  margin: 45px auto;
  padding: 14px;
  width: 212.3px;
  height: 48px;
  border: 0;
  border-radius: 50px;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
  background-color: #e1173f;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#e1173f')};
  }
`;
