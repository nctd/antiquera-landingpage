import styled from "styled-components";

export const ServiciosContainer = styled.div`
  // height: 800px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #fff 50%, #0f171f 50%);

  @media screen and (max-width: 1000px) {
    /* width: 1520px; */
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    // height: 1100px;
    background: #0f171f;
    /* display: inline-flex; */
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    // height: 1300px;
    background: #0f171f;
    /* display: inline-flex; */
  }
`;

export const ServiciosWrapper = styled.div`
  max-width: 1520px;
  // max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    background: #0f171f;
  }

  @media screen and (max-width: 768px) {
    /* grid-template-columns: 1fr; */
    grid-template-columns: minmax(100px, max-content);

    padding: 0 20px;
    background: #0f171f;
  }
`;

export const ServiciosTitulo = styled.h1`
  font-size: 50px;
  color: #262222;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 30px;
  }
`;

export const ServiciosSubtitulo = styled.p`
  color: #262222;
  text-align: center;
  font-size: 18px;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    color: #fff;
    padding: 10px;

    width: 90%;
    border-bottom: 1px solid #fff;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    color: #fff;
    padding: 10px;

    width: 90%;
    border-bottom: 2px solid #fff;
    padding-bottom: 30px;
  }
`;

export const ServiciosCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  height: 450px;
  margin-bottom: 120px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    background: none;
    box-shadow: none;
    margin-bottom: 30px;
    /* padding: 10px; */
  }

  @media screen and (max-width: 480px) {
    background: none;
    box-shadow: none;
    margin-bottom: 30px;
    /* padding: 10px; */
  }
`;

export const CardIcon = styled.img`
  // height: 160px;
  // width: 160px;
  width: 279px;
  height: 296px;
  margin-bottom: 25px;
  box-shadow: 0px 8px 8px #000000ac;

  @media screen and (max-width: 768px) {
    border-radius: 50%;
    box-shadow: none;
  }

  @media screen and (max-width: 480px) {
    border-radius: 50%;
    box-shadow: none;
  }
`;

export const CardTitulo = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const CardSubtitulo = styled.p`
  font-size: 1rem;
  text-align: justify;
  @media screen and (max-width: 768px) {
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    color: #fff;
  }
`;

export const MediaCardTitulo = styled.h2`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;
  }
`;

// export const LineaMedia = styled.hr`
//   display: none;

//   @media screen and (max-width: 768px) {
//     width: 85%;
//     color: #fff;
//     display: flex;
//     margin-bottom: 10px;
//   }

//   @media screen and (max-width: 480px) {
//     width: 85%;
//     color: #fff;
//     display: flex;
//     margin-bottom: 10px;
//   }
// `;

export const SaltoLinea = styled.br`
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubtitulosContainer = styled.div`
  height: 50px;
`;
