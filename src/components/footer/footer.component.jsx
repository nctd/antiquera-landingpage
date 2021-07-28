import React from "react";

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
} from "./footer.styles";

import Logo from "../../assets/footerlogo.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
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
                  +56988282306
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
                  +56988282306
                </FooterSubtexto>
                <br />
                <FooterSubtexto style={{ fontWeight: "bolder" }}>
                  (55) 2781022
                </FooterSubtexto>

                <FooterSubtexto
                  style={{ fontWeight: "bolder", margin: "-8px" }}
                >
                  www.aycm.cl
                </FooterSubtexto>
              </FooterTextoResponsive>
            </FooterTexto>
          </FooterColumn>
          <FooterColumn>
            <FooterTexto>Escribenos y te contactaremos.</FooterTexto>
            <FooterInputWrapper>
              <FooterInput
                type="text"
                placeholder="Email"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <FooterButton>
                <FooterButtonLink
                  to={{
                    pathname: "/contacto",
                    state: this.state.value,
                  }}
                >
                  Ingresar
                </FooterButtonLink>
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
  }
}

export default Footer;
