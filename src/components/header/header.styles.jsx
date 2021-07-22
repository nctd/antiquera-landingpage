import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { MdArrowForward } from "react-icons/md";

export const Nav = styled.nav`
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 1rem;
  left: 0;

  @media screen and (max-width: 1360px) {
    transition: 0.8s all ease;
    height: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1580px;
`;

export const HeaderLogo = styled(LinkRouter)`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: left;
  }
`;

export const ResponsiveIcon = styled.div`
  display: none;

  @media screen and (max-width: 1360px) {
    display: contents;
    position: absolute;
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

  @media screen and (max-width: 1360px) {
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
  font-weight: bolder;
  font-size: 20px;
  white-space: nowrap;

  &.active {
    border-bottom: 3px solid #0f171f;
  }
`;

export const HeadButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1360px) {
    display: none;
  }
`;

export const HeadButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #0f171f;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-weight: bolder;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:active {
    background-color: #0f171f;
    transform: translateY(4px);
  }
`;

export const ButtonArrow = styled(MdArrowForward)`
  vertical-align: bottom;
  font-size: 24px;
`;

export const HeaderImage = styled.img`
  height: 135px;

  @media screen and (max-width: 480px) {
    height: 100px;
  }
`;
