import React from "react";

import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterLogo,
  // FooterLinkContainer,
  // FooterLinkWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
} from "./footer.styles";

import Logo from "../../assets/logoweb.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <FooterLogo src={Logo} />
        </FooterColumn>
      </FooterWrapper>
    </FooterContainer>
  );
};
/* //   <FooterWrapper>
    //     <img src={Logo} alt="footer-logo" />
    //     <FooterLinkContainer>
    //       <FooterLinkWrapper>
    //         <FooterLinkItems>
    //           <FooterLinkTitle>
    //             <FooterLink>Inicio</FooterLink>
    //           </FooterLinkTitle>
    //         </FooterLinkItems>
    //       </FooterLinkWrapper>
    //       <FooterLinkWrapper>
    //         <FooterLinkItems>
    //           <FooterLinkTitle>
    //             <FooterLink>Quienes somos</FooterLink>
    //           </FooterLinkTitle>
    //         </FooterLinkItems>
    //       </FooterLinkWrapper>
    //       <FooterLinkWrapper>
    //         <FooterLinkItems>
    //           <FooterLinkTitle>
    //             <FooterLink>Nuestro Equipo</FooterLink>
    //           </FooterLinkTitle>
    //         </FooterLinkItems>
    //       </FooterLinkWrapper>
    //       <FooterLinkWrapper>
    //         <FooterLinkItems>
    //           <FooterLinkTitle>
    //             <FooterLink>Servicios</FooterLink>
    //           </FooterLinkTitle>
    //         </FooterLinkItems>
    //       </FooterLinkWrapper>
    //     </FooterLinkContainer>
    //   </FooterWrapper> */
export default Footer;
