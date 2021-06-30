import styled from "styled-components";

export const ContactoContainer = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 100%;
    background: #0f171f;
    display: inline-flex;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    background: #0f171f;
    display: inline-flex;
  }
`;

export const ContactoWrapper = styled.div`
  /* max-width: 1520px; */
  margin: 0 auto;
  display: flex;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  align-items: center;
  /* grid-gap: 16px; */
  /* padding: 0 50px; */

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    background: #0f171f;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(100px, max-content);

    padding: 0 20px;
    background: #0f171f;
  } */
`;

export const ContactoTitulo = styled.h1`
  font-size: 2.5rem;
  color: #262222;
  margin-bottom: 64px;
`;

export const ContactoSubtitulo = styled.p`
  color: #262222;
  text-align: center;
  font-size: 18px;
  margin-bottom: 64px;
`;

export const ContactoInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 22px;
  opacity: 1;
  width: 1212px;
  height: 112px;
  padding-left: 2rem;
  font-size: 40px;

  &::placeholder {
    font-size: 40px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;
