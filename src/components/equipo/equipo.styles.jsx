import styled from "styled-components";

export const EquipoContainer = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0px;
    height: 100%;
  }
`;

export const EquipoContent = styled.div`
  max-width: 1520px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1.5rem;
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

export const EquipoTitulo = styled.h1`
  font-size: 50px;
  color: #262222;
  padding-bottom: 64px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

export const EquipoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding-bottom: 60px;
  flex: 1;
  padding-top: 10px;

  @media screen and (max-width: 1100px) {
    :nth-child(2) {
      order: -1;
    }
    :nth-child(3) {
      order: -2;
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
  }
`;

export const EquipoImagen = styled.img`
  box-shadow: 0px 3px 6px #00000029;
  width: 100%;
  /* height: 350px; */
  height: ${(props) => (props.central ? "420px" : "320px")};
  object-fit: cover;
  margin-bottom: 25px;

  @media screen and (max-width: 1100px) {
    height: 350px;
    /* margin-bottom: 60px; */
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ImagenTitulo = styled.h2`
  font-size: 20px;
  text-align: center;
  display: inline-block;
  padding-bottom: 30px;
`;
