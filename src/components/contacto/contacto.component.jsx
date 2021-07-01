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

const Contacto = () => {
  return (
    <ContactoContainer>
      <ContactoTitulo>Déjanos tus datos y te contactaremos</ContactoTitulo>
      <ContactoSubtitulo>
        Recuerda que excepcionalmente por contingencia de la pandemia que nos
        afecta, estamos agendando <br />
        consultas de manera remota por la plataforma Zoom.
      </ContactoSubtitulo>

      <ContactoWrapper>
        <ContactoInput type="text" placeholder="Email" />
      </ContactoWrapper>
      <ContactoButton>
        <ContactoButtonLink>Enviar</ContactoButtonLink>
      </ContactoButton>
      <ContactoWrapper>
        <ContactoCard>
          <ContactoImagen src={Imagen} />

          <ResponsiveTitulo>Déjanos tus datos</ResponsiveTitulo>

          <ResponsiveSubTitulo>
            Recuerda que excepcionalmente por contingencia de la pandemia que
            nos afecta, estamos agendando consultas de manera remota por la
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
};

export default Contacto;
