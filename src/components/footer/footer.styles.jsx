import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #0f171f;
  margin-top: 50px;
`;
export const FooterWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10rem;
  padding: 48px 24px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  margin-left: 40px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    max-width: 350px;
    margin: 0 auto;

    :nth-child(2) {
      order: 1;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    max-width: 350px;
    margin: 0 auto;
  }
`;

export const FooterLogo = styled.img`
  width: 369px;
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

  color: #fff;
`;

export const FooterInput = styled.input`
  background: #fff;
  box-shadow: 0px 3px 6px #00000026;
  border-radius: 19px;
  height: 50px;
  width: 509px;
  padding-left: 1rem;
  border: 1px solid #00000026;
  &::placeholder {
    font-size: 20px;
    letter-spacing: 0px;
    color: #7070708c;
    opacity: 1;
    font-weight: bolder;
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
  }
`;

export const FooterInputWrapper = styled.div`
  display: grid;
  padding-top: 20px;
  grid-column-gap: 1rem;
  /* grid-template-columns: auto 1fr; */
  grid-template-columns: minmax(auto, 300px) 40px;
`;

export const FooterButton = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 32px; */
  justify-content: column;

  // flex-direction: column;
  @media screen and (max-width: 768px) {
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
`;

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
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
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 18px;
  white-space: nowrap;
  &:active {
    border-bottom: 3px solid #0f171f;
  }
`;

// export const FooterWrapper = styled.div`
//   padding: 48px 24px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// export const FooterLinkContainer = styled.div`
//   display: flex;
//   justify-content: center;

//   @media screen and (max-width: 820px) {
//     padding-top: 32px;
//   }
// `;

// export const FooterLinkWrapper = styled.div`
//   display: flex;

//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `;

// export const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin: 16px;
//   text-align: left;
//   width: 160px;
//   box-sizing: border-box;
//   color: #fff;

//   @media screen and (max-width: 420px) {
//     margin: 0;
//     padding: 10px;
//     width: 100%;
//   }
// `;

// export const FooterLinkTitle = styled.h1`
//   font-size: 14px;
//   margin-bottom: 16px;
// `;

// export const FooterLink = styled(LinkRouter)`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 0.5rem;
//   font-size: 14px;

//   &:hover {
//     color: #01bf71;
//     transition: 0.3s ease-out;
//   }
// `;
