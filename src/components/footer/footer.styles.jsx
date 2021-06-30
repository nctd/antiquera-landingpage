import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
  margin-top: 50px;
`;
export const FooterWrapper = styled.div`
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
    // grid-template-columns: 1fr;
    grid-template-columns: minmax(100px, max-content);

    padding: 0 20px;
    background: #0f171f;
  }
`;

export const FooterColumn = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    background: none;
    box-shadow: none;
    /* padding: 10px; */
  }

  @media screen and (max-width: 480px) {
    background: none;
    box-shadow: none;
    /* padding: 10px; */
  }
`;

export const FooterLogo = styled.img`
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
