import styled from "styled-components";
import { getRandomColor, getRandomColor2 } from "./getRandomColor";

export const Wrapper = styled.div`
  align-items: center;
  jusfy-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

//articles block
export const News = styled.div`
  display: grid;
  grid-template-rows: 450px 450px 450px 450px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  color: black;
  width: 80%;
  margin-top: 110px;
`;

//the article
export const Container = styled.div`
  background-size: cover;
  position: relative;
  background: rgb(203, 242, 252);
  background: linear-gradient(
    253deg,
    ${getRandomColor2} 0%,
    ${getRandomColor} 100%
  );
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

//images of news
export const ImageNews = styled.div`
  width: 100%;
  height: 195px;
  overflow: hidden;
`;

export const ElementImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

//box of title and texts
export const Letter = styled.div`
  padding: 5px; 
  width: 90%;
  height:90%
  margin-left: 10px;
  

`;

export const Description = styled.p`
  overflow: hidden;
  height: 59px;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  height: 25px;
  display: flex;
  align-items: center;
`;

export const NewsAuthor = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 18px;
  display: flex;
`;

export const Favicon = styled.img`
  margin-right: 5px;
`;

export const Date = styled.div`
  margin-left: 5px;
`;

//title of news
export const TitleStyle = styled.div`
  text-decoration: none;
  font-color: black;
  width: 100%;
  height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleAnchor = styled.a`
  text-decoration: none;
  color: black;
`;

//tooltip

export const BoxText = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0px 40px 10px -3px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: 2s;
`;
