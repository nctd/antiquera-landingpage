import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { MdArrowForward } from "react-icons/md";

export const Nav = styled.nav`
  background: #ffffff 0% 0% no-repeat padding-box;

  height: 110px; //esto era 80
  // margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  // position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 1rem;
  left: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 80%;
  padding: 0 24px;
  max-width: 1580px;
  // max-width: 1100px;

  @media screen and (max-width: 960px) {
    display: inline-grid;
  }
`;

export const HeaderLogo = styled(LinkRouter)`
  color: black;
  justity-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    align-items: left;
  }
`;

export const ResponsiveIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    // top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #0f171f;
  }
`;

export const HeadMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeadItem = styled.li`
  height: 80px;
`;

export const HeadLink = styled(LinkScroll)`
  color: #495254;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;

  // Creo que es :
  &:active {
    border-bottom: 3px solid #0f171f;
  }
`;

export const HeadButton = styled.nav`
  display: flex;
  align-items: center;
  // flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeadButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #0f171f;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  // &:hover {
  //   transition: all 0.2s ease-in-out;
  //   background: #fff;
  //   color: #0f171f;
  // }
  &:active {
    background-color: #0f171f;
    // box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ButtonArrow = styled(MdArrowForward)`
  vertical-align: bottom;
  font-size: 19px;
`;

export const HeaderImage = styled.img`
  // width: 100%;
  height: 135px;
  margin-left: -8px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: -25px;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    margin-left: -25px;
    height: auto;
  }
`;
