import styled from 'styled-components';
// components
import { CommonButton } from '../../components';

export const Container = styled.div`
  max-width: 900px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;
export const StyleAlert = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 250px;
  font-size: 20px;
  color: brown;
  
`;
export const MovieList = styled.div`
  margin:15px;
`;

export const MovieTitleStyle = styled.p`
  width: 800px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
`;

export const BoxCard = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin:5px;
  padding: 15px;
  border-radius: 5px;
`;

export const SubtitleStyle = styled.div`
  width:800px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyleImg = styled.img`
  width: 800px;
  max-height:350px;
  border-radius:20px;
`;

export const SinopseStyle = styled.div`
  width: 800px;
  text-align: justify;  
`;

export const FooterStyle = styled.div`
  width:350px;
  display: flex;
  justify-content: space-around;
`;

export const ButtonFooterStyle = styled(CommonButton)`
  width: 150px;
  height: 40px;
  font-size: 20px;
  background-color: brown;
  color: #fff;
  border: 1px solid brown;
  transition: all 0.5s;

  &:hover{
    background: #d11507;
    color:#fff;
    transition: 500ms;

  };
`;
export const ButtonTrailerStyle = styled.a`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid brown;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: brown;
  transition: 500ms;

  &:hover{
    border-color:#d11507;
    color: #d11507;
  };
`;
export const LinkStyle = styled.a`
    width: 80px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius:5px;
  border: none;
  background-color: #fff;
  color: #A52A2A;
  cursor: pointer;
  
  &:hover{
    background: #E0E0E0;
  };
`;
