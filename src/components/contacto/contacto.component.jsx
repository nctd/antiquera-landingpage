import React from "react";

import {
  ContactoContainer,
  ContactoTitulo,
  ContactoSubtitulo,
  ContactoInput,
  ContactoWrapper,
} from "./contacto.styles";

const Contacto = () => {
  return (
    <ContactoContainer>
      <ContactoTitulo>Déjanos tus datos y te contactaremos</ContactoTitulo>
      <ContactoSubtitulo>
        Recuerda que excepcionalmente por contingencia de la Pandemia que nos
        afecta, estamos agendando <br />
        consultas de manera remota por la plataforma Zoom.
      </ContactoSubtitulo>
      <ContactoWrapper>
        <ContactoInput type="text" placeholder="Email" />
      </ContactoWrapper>
    </ContactoContainer>
  );
};

export default Contacto;
