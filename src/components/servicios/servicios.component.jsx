import React from "react";

import {
  ServiciosContainer,
  ServiciosTitulo,
  ServiciosWrapper,
  ServiciosCard,
  CardIcon,
  CardTitulo,
  CardSubtitulo,
} from "./servicios.styles";

import Card_01 from "../../assets/img-card-01.jpg";

const Servicios = () => {
  return (
    <ServiciosContainer>
      <ServiciosTitulo>Nuestros servicios</ServiciosTitulo>
      <ServiciosWrapper>
        <ServiciosCard>
          <CardTitulo>Derecho empresarial</CardTitulo>
          <CardIcon src={Card_01} />
          <CardSubtitulo>
            Sociedades: constitución, modificación, fusiones, divisiones,
            transformaciones entre otras.
          </CardSubtitulo>
        </ServiciosCard>
      </ServiciosWrapper>
    </ServiciosContainer>
  );
};

export default Servicios;
