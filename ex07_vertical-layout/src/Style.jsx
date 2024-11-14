import styled from "styled-components";
import "ress"; //노말라이즈

//생성된 스타일 컴포넌트는 export 해줘야 컴포넌트에서 사용할 수 있음
export const Header = styled.header`
  width: 400px;
  height: 100%;
  background: linear-gradient(45deg, aqua, royalblue);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1599px) {
    width: 350px;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
    height: 80px;
  }
`;

export const HeaderTitle = styled.h1`
  font: bold 50px/1 "Orbitron", sans-serif;
  color: #fff;
  letter-spacing: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 1199px) {
    font: bold 24px/1 "Orbitron", sans-serif;
    transform: translateY(-50%);
  }
`;

export const NavList = styled.ul`
  list-style: none;
  position: absolute;
  bottom: 100px;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1199px) {
    bottom: 25px;
    left: 83%;
  }
  @media screen and (max-width: 899px) {
    left: 80%;
  }
  @media screen and (max-width: 679px) {
    left: 70%;
  }
  @media screen and (max-width: 539px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 20px;
  color: #fff;
`;

export const Main = styled.main`
  padding: 20px;
  margin-left: 400px;
  box-sizing: border-box;

  @media screen and (max-width: 1599px) {
    margin-left: 350px;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const FilterList = styled.ul`
  margin-bottom: 10px;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 539px) {
    padding: 0 13px;
    margin-right: 0;
    box-sizing: border-box;
  }
`;

export const FilterItem = styled.li`
  width: 100px;
  height: 26px;
  background: #fff;
  font: bold 7px/26px "Orbitron", sans-serif;
  color: #aaa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 539px) {
    width: 32%;
    margin-right: 2%;
  }
  @media screen and (max-width: 539px) {
    margin-right: 0;
  }
`;

export const Article = styled.article`
  float: left;
  width: 20%;
  padding: 12px;
  box-sizing: border-box;

  @media screen and (max-width: 1599px) {
    width: 25%;
  }
  @media screen and (max-width: 899px) {
    width: 33.333%;
  }
  @media screen and (max-width: 679px) {
    width: 50%;
  }
  @media screen and (max-width: 539px) {
    width: 100%;
  }
`;

export const ArticleDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 14px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const ArticleImg = styled.img`
  width: 100%;
`;

export const ArticleTitle = styled.h2`
  margin-top: 15px;
  margin-bottom: 5px;
  font: bold 11px/1 "Orbitron", sans-serif;
  color: #444;
`;

export const ArticleContent = styled.p`
  margin-bottom: 15px;
  font: 10px/1.2 Arial, sans-serif;
  color: #777;
`;
