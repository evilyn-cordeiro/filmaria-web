import styled from 'styled-components';
// components
import { CommonButton } from '../Buttons';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: brown;
`;

export const Boxleft = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;
export const CommonButtonStyle = styled(CommonButton)`
  background-color: brown;
  color: #fff;
  
  :hover&{
    background-color: brown;
    color: #E0E0E0
  }
`;

export const Boxrigth = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
