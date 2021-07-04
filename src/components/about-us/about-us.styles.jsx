import styled from "styled-components";

export const AboutUsContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    height: 100%;
    display: inline-flex;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0px;
    height: 100%;
    display: inline-flex;
  }
`;

export const AboutUsContent = styled.div`
  flex: 1;
  z-index: 3;
  max-width: 1520px;
  /* position: absolute; */
  padding: 8px 40px;
  display: flex;
  flex-direction: row;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;

  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    /* margin-top: 80px; */
    padding: 8px 20px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    /* margin-top: 80px; */
    padding: 8px 20px;
  }
`;

export const AboutUsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const AboutUsImage = styled.img`
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

export const AboutUsTitulo = styled.h1`
  color: #262222;
  font-size: 50px;
  text-align: justify;

  @media screen and (max-width: 1000px) {
    font-size: 38px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    padding-top: 40px;
    text-align: justify;
    display: inline-block;

    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-bottom: 2px solid #000000;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    padding-top: 40px;
    text-align: justify;
    display: inline-block;

    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;

    border-bottom: 2px solid #000000;
  }
`;

export const AboutUsSubtitulo = styled.p`
  margin-top: 24px;
  color: #262222;
  font-size: 20px;
  text-align: justify;
  font-weight: bolder;
  // max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: justify;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    text-align: justify;
  }
`;
