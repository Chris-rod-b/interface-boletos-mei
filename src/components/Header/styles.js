import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;
export const Shield = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      font-size: 15px;
      display: block;
      color: #002042;
    }

    span {
      font-size: 15px;
      font-weight: bold;
      color: #002042;
    }
  }
`;
