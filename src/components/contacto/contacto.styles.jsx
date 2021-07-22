import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";

import { FiSend } from "react-icons/fi";

export const ContactoContainer = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    height: 100%;
    display: inline-flex;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    display: inline-flex;
  }
`;

export const ContactoWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  align-items: center;
  display: inline-block;
  position: relative;
  @media screen and (max-width: 1000px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ContactoTitulo = styled.h1`
  font-size: 60px;
  color: #262222;
  margin-bottom: 30px;

  @media screen and (max-width: 1100px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactoSubtitulo = styled.p`
  color: #262222;
  text-align: center;
  font-size: 20px;
  margin-bottom: 64px;
  font-weight: bolder;
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactoInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 22px;
  opacity: 1;
  width: 800px;
  height: 112px;
  padding-left: 2rem;
  font-size: 40px;

  &::placeholder {
    font-size: 40px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactoCard = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom: 20px;
    &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }
`;

export const ContactoImagen = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 55%;
  }
`;

export const ContactoButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  justify-content: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactoButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #0f171f;
  white-space: nowrap;
  padding: 25px 80px;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 250px;
  height: 80px;

  &:active {
    background-color: #0f171f;
    transform: translateY(4px);
  }
`;

export const ResponsiveTitulo = styled.h1`
  display: none;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    color: #262222;
    margin-top: 40px;
    margin-bottom: 10px;
    display: block;
  }
`;
export const ResponsiveSubTitulo = styled.p`
  display: none;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    color: #737373;
    display: block;
    letter-spacing: 0.26px;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: grid;
    padding-top: 20px;
    grid-template-columns: minmax(auto, 300px) 40px;
  }
`;

export const ResponsiveInput = styled.input`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    background: #ebebeb;
    border-radius: 4px;
    padding-left: 5px;

    &::placeholder {
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
      text-align: left;
    }
  }
`;

export const ResponsiveButton = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;

    cursor: pointer;
  }
`;

export const ResponsiveButtonLink = styled(LinkRouter)`
  display: none;

  @media screen and (max-width: 768px) {
    display: inline-block;
    border-radius: 4px;
    background: #0f171f;
    padding: 10px 10px;
    color: #fff;
    margin-left: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    position: relative;

    &:active {
      background-color: #0f171f;
      transform: translateY(4px);
    }
  }
`;

export const ResponsiveArrow = styled(FiSend)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    vertical-align: bottom;
    font-size: 19px;
  }
`;
