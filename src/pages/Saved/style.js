import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CommonButton } from '../../components';

export const Container = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-top:50px;
`;
export const StyledTitle = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 40px;
  border-bottom: 1px solid brown;
  font-weight: bold;
`;

export const Stylelisting = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;

`;
export const MovieStyle = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 18px;
`;

export const BoxrigthStyle = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 350px;
`;

export const StyleLink = styled(Link)`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  background-color: brown;
  font-size: 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 5ms;

  &:hover{
    background: #8b0000;
  };
  
`;

export const CommonButtonStyle = styled(CommonButton)`
  border: 1px solid brown;
  
  &:hover{
    background: none;
  };
`;

export const StyledSpn = styled.div`
  font-size: 20px;

`;
