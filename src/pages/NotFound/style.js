import styled from 'styled-components';
// Router
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

export const ErrorStyle = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: brown;
`;

export const TextStyle = styled.div`
  width: 250px;
  font-size: 20px;
  font-style: italic;
  text-align: center;
  color: brown;
`;

export const StyleLink = styled(Link)`
  width: 100px;
  margin-top: 15px;
  font-size: 15px;
  text-decoration: none;
  text-align: center;
  background-color: brown;
  color: #fff;
  border-radius:2px;

  &:hover{
    background: #d11507;
  };
`;
