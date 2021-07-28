import React from "react";

import {
  ContactoContainer,
  ContactoTitulo,
  ContactoSubtitulo,
  ContactoInput,
  ContactoWrapper,
  ContactoCard,
  ContactoImagen,
  ContactoButton,
  ContactoButtonLink,
  ResponsiveTitulo,
  ResponsiveSubTitulo,
  ResponsiveWrapper,
  ResponsiveInput,
  ResponsiveButton,
  ResponsiveButtonLink,
  ResponsiveArrow,
} from "./contacto.styles";

import Imagen from "../../assets/img-contacto.png";

class Contacto extends React.Component {
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
      <ContactoContainer>
        <ContactoTitulo>Escribe tus datos y te contactaremos</ContactoTitulo>
        <ContactoSubtitulo>
          Recuerda que la atención es presencial, pero excepcionalmente por
          pandemia estamos <br /> programando consultas de manera remota por
          plataforma Zoom.
        </ContactoSubtitulo>

        <ContactoWrapper>
          <ContactoInput
            type="text"
            placeholder="Email"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </ContactoWrapper>
        <ContactoButton>
          <ContactoButtonLink
            to={{
              pathname: "/contacto",
              state: this.state.value,
            }}
          >
            Enviar
          </ContactoButtonLink>
        </ContactoButton>
        <ContactoWrapper>
          <ContactoCard>
            <ContactoImagen src={Imagen} />

            <ResponsiveTitulo>Escribe tus datos</ResponsiveTitulo>

            <ResponsiveSubTitulo>
              Recuerda que la atención es presencial, pero excepcionalmente por
              pandemia estamos programando consultas de manera remota por
              plataforma Zoom.
            </ResponsiveSubTitulo>
            <ResponsiveWrapper>
              <ResponsiveInput type="text" placeholder="Email" />
              <ResponsiveButton>
                <ResponsiveButtonLink>
                  <ResponsiveArrow />
                </ResponsiveButtonLink>
              </ResponsiveButton>
            </ResponsiveWrapper>
          </ContactoCard>
        </ContactoWrapper>
      </ContactoContainer>
    );
  }
}

export default Contacto;
