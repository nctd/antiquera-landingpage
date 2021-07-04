import React from "react";

import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterLogo,
  FooterTexto,
  FooterInput,
  FooterButton,
  FooterButtonLink,
  FooterInputWrapper,
  FooterMenu,
  FooterItem,
  FooterLink,
  // FooterLinkContainer,
  // FooterLinkWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
} from "./footer.styles";

import Logo from "../../assets/footerlogo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <FooterLogo src={Logo} />
        </FooterColumn>
        <FooterColumn>
          <FooterTexto>
            Maipú Nº499, Of 303 Ed Padre Alberto Hurtado
            <br />
            <br />
            Antofagasta-Chile
            <br />
            <br />
            <p style={{ fontWeight: "bolder" }}>+5698828230</p>
            <br />
            <p style={{ fontWeight: "bolder" }}> (55) 2781022</p>
            <br />
            <br />
            <p style={{ fontWeight: "bolder" }}> www.aycm.cl</p>
          </FooterTexto>
        </FooterColumn>
        <FooterColumn>
          <FooterTexto>Escribenos y te contactaremos.</FooterTexto>
          <FooterInputWrapper>
            <FooterInput type="text" placeholder="Email" />
            <FooterButton>
              <FooterButtonLink>Ingresar</FooterButtonLink>
            </FooterButton>
          </FooterInputWrapper>
          <FooterMenu>
            <FooterItem>
              <FooterLink>Inicio</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>Quienes somos</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>Nosotros</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink>Servicios</FooterLink>
            </FooterItem>
          </FooterMenu>
        </FooterColumn>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
