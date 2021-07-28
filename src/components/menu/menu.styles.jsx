import styled from "styled-components";

export const MenuContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const MenuContent = styled.div`
  flex: 1;
  z-index: 3;
  max-width: 1520px;
  position: absolute;
  padding: 8px 40px;
  display: flex;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin-top: 80px;
    padding: 8px 20px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 80px;
    padding: 8px 20px;
  }
`;

export const MenuTitulo = styled.h1`
  color: #262222;
  font-size: 40px;
  text-align: justify;
  hyphens: auto;
  @media screen and (max-width: 900px) {
    font-size: 30px;
    padding-top: 40px;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    padding-top: 40px;
    text-align: justify;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
    padding-top: 40px;
    text-align: justify;
  }
`;

export const MenuSubtitulo = styled.p`
  margin-top: 24px;
  color: #262222;
  font-size: 25px;
  text-align: justify;
  font-weight: bolder;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: justify;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    text-align: justify;
  }
`;

export const SpanColor = styled.span`
  color: #e5b06e;
`;

export const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const MenuImage = styled.img`
  box-shadow: 0px 20px 20px #00000029;
  width: 80%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
