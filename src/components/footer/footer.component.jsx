import React from "react";

import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterLogo,
  FooterTexto,
  FooterSubtexto,
  FooterInput,
  FooterButton,
  FooterButtonLink,
  FooterInputWrapper,
  FooterMenu,
  FooterItem,
  FooterLink,
  FooterTextoResponsive,
  FooterTextoNormal,
  Form,
  FormInput,
  Button,
} from "./footer.styles";

import Logo from "../../assets/footerlogo.png";

const toggleHome = () => {
  scroll.scrollToTop();
};

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
            <FooterSubtexto>Antofagasta-Chile</FooterSubtexto>
            <br />
            <FooterTextoNormal>
              <FooterSubtexto style={{ fontWeight: "bolder" }}>
                +5698828230
              </FooterSubtexto>
              <FooterSubtexto style={{ fontWeight: "bolder" }}>
                (55) 2781022
              </FooterSubtexto>
              <br />
              <FooterSubtexto style={{ fontWeight: "bolder" }}>
                www.aycm.cl
              </FooterSubtexto>
            </FooterTextoNormal>
            <FooterTextoResponsive>
              <FooterSubtexto style={{ fontWeight: "bolder" }}>
                +5698828230
              </FooterSubtexto>
              <br />
              <FooterSubtexto style={{ fontWeight: "bolder" }}>
                (55) 2781022
              </FooterSubtexto>

              <FooterSubtexto style={{ fontWeight: "bolder", margin: "-8px" }}>
                www.aycm.cl
              </FooterSubtexto>
            </FooterTextoResponsive>
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
              <FooterLink
                to="inicio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-140}
              >
                Inicio
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink
                to="quienes"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-140}
              >
                Quienes somos
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink
                to="equipo"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-140}
              >
                Nosotros
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink
                to="servicios"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-140}
              >
                Servicios
              </FooterLink>
            </FooterItem>
          </FooterMenu>
        </FooterColumn>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
