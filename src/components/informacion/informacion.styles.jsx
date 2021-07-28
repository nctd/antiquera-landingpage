import styled from "styled-components";

export const InfoContainer = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 200px;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const InfoContent = styled.div`
  max-width: 1520px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 10rem;
  padding: 0 100px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(100px, max-content);
    padding: 0 20px;
    grid-gap: 0;
  }
`;

export const InfoTitulo = styled.h1`
  font-size: 50px;
  color: #262222;
  padding-bottom: 64px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 25px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding-bottom: 60px;
  flex: 1;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
  }
`;

export const CardImagen = styled.img`
  box-shadow: 0px 9px 9px #000000ac;
  width: 100%;
  height: 350px;
  object-fit: fill;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CardTitulo = styled.h2`
  font-size: 20px;
  text-align: center;
  display: inline-block;
  padding-bottom: 30px;
  font-weight: bolder;
`;

export const CardSubtitulo = styled.p`
  font-size: 18px;
  text-align: justify;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }

  @media screen and (max-width: 480px) {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
`;

export const SpanColor = styled.span`
  color: #e5b06e;
  font-weight: bolder;
`;

export const SubtitulosContainer = styled.div`
  height: ${(props) => (props.overflow ? "350px" : "auto")};
  align-self: center;

  @media screen and (max-width: 768px) {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    padding-bottom: 50px;
  }
`;
