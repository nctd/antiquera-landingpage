import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #0f171f;

  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 48px 48px;

  @media screen and (max-width: 1550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    grid-gap: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const FooterColumn = styled.div`
  /* max-width: 450px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  @media screen and (max-width: 1100px) {
    margin-left: 0px;
    /* max-width: 350px; */
    margin: 0 auto;
    width: 100%;

    :nth-child(2) {
      order: 1;
    }
  }
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const FooterLogo = styled.img`
  max-width: 369px;
  height: 100%;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const FooterTexto = styled.p`
  font-size: 20px;
  text-align: justify;
  white-space: nowrap;
  color: #fff;
  /* margin-left: -280px; */

  @media screen and (max-width: 1100px) {
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FooterSubtexto = styled.p`
  font-size: 20px;
  text-align: justify;
  white-space: nowrap;
  color: #fff;

  @media screen and (max-width: 1100px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const FooterInput = styled.input`
  background: #fff;
  box-shadow: 0px 3px 6px #00000026;
  border-radius: 19px;
  height: 50px;
  width: 300px;
  padding-left: 1rem;
  border: 1px solid #00000026;
  color: black;
  font-size: 16px;
  &::placeholder {
    font-size: 20px;
    letter-spacing: 0px;
    color: #7070708c;
    opacity: 1;
    font-weight: bolder;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: table-row;

    &::placeholder {
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 0px;
      opacity: 1;
      text-align: left;
    }
  }
`;

export const FooterInputWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  grid-column-gap: 1rem;
  /* grid-template-columns: auto 1fr; */
  /* grid-template-columns: minmax(auto, 300px) 40px; */

  @media screen and (max-width: 768px) {
    width: 100%;
    display: table;
    grid-column-gap: 0px;
    grid-template-columns: minmax(auto, 250px) 35%;
  }
`;

export const FooterButton = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 32px; */
  justify-content: column;

  // flex-direction: column;
  @media screen and (max-width: 768px) {
    display: table-cell;
    cursor: pointer;
    padding: 5px;
  }
`;

export const FooterButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #e5b06e;
  white-space: nowrap;
  /* padding: 10px 22px; */
  padding: 15px 39px;
  color: #fff;
  font-weight: bolder;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 150px;
  height: 50px;

  &:active {
    background-color: #fff;
    color: #e5b06e;
    transform: translateY(4px);
  }

  @media screen and (max-width: 768px) {
    padding: 17px 10px;
    font-size: 13px;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const FooterItem = styled.li`
  height: 80px;
`;

export const FooterLink = styled(LinkScroll)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 3rem;
  height: 100%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 20px;
  white-space: nowrap;
  &:active {
    border-bottom: 3px solid #0f171f;
  }
`;

export const FooterTextoResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const FooterTextoNormal = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
