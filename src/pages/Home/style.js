import styled from 'styled-components';
// Router
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: fit-content;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

`;

export const MovieListStyle = styled.div`
  margin:15px;
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin:15px;
  padding: 15px;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

export const StyleImg = styled.img`
  width: 750px;
  max-height: 300px;
  background-color: aliceblue;
`;

export const TitleStyle = styled.p`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left:10px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px 5px 0 0;
  background-color: brown;
`;

export const LinkStyle = styled(Link)`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
  background-color: brown;
  font-size: 18px;
  text-decoration: none;
  border-radius: 0 0 5px 5px;
  transition: all 0.5s;

  &:hover{
    background: #d11507;
  };
`;
