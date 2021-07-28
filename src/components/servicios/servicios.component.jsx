import React from "react";

import {
  ServiciosContainer,
  ServiciosTitulo,
  ServiciosSubtitulo,
  ServiciosWrapper,
  ServiciosCard,
  CardIcon,
  CardTitulo,
  CardSubtitulo,
  MediaCardTitulo,
  SaltoLinea,
  SubtitulosContainer,
} from "./servicios.styles";

import Card_01 from "../../assets/img-card-01.jpg";
import Card_02 from "../../assets/img-card-02.jpg";
import Card_03 from "../../assets/img-card-03.jpg";
import Card_04 from "../../assets/img-card-04.jpg";

const Servicios = () => {
  return (
    <ServiciosContainer id="servicios">
      <ServiciosTitulo>Nuestros servicios</ServiciosTitulo>
      <ServiciosSubtitulo>
        Asesoramos sobre Ley Nº 20.720 sobre Insolvencia y <SaltoLinea />
        Reemprendimiento (Ley de quiebras), Derecho <SaltoLinea />
        Empresarial, Civil, Arbitral y Minero.
      </ServiciosSubtitulo>

      <ServiciosWrapper>
        {/* Derecho empresarial */}
        <ServiciosCard>
          <CardTitulo>Derecho Empresarial</CardTitulo>
          {/* <ImageHolder style={{ backgroundImage: `url(${Card_01})` }} /> */}
          <CardIcon src={Card_01} />
          <MediaCardTitulo>Derecho Empresarial</MediaCardTitulo>
          <SubtitulosContainer>
            <CardSubtitulo>
              Sociedades: constitución, modificación, fusiones, divisiones,
              transformaciones entre otras.
            </CardSubtitulo>
          </SubtitulosContainer>
        </ServiciosCard>
        {/* Derecho civil */}
        <ServiciosCard>
          <CardTitulo>Derecho Civil</CardTitulo>
          <CardIcon src={Card_02} />
          <MediaCardTitulo>Derecho Civil</MediaCardTitulo>
          <SubtitulosContainer>
            <CardSubtitulo>
              Asesorías en materias civiles y asuntos voluntarios
            </CardSubtitulo>
          </SubtitulosContainer>
        </ServiciosCard>
        {/* Juicios arbitrales */}
        <ServiciosCard>
          <CardTitulo>Juicios Arbitrales</CardTitulo>

          <CardIcon src={Card_03} />
          <MediaCardTitulo>Juicios Arbitrales</MediaCardTitulo>
          <SubtitulosContainer>
            <CardSubtitulo>
              Asesoría legal en Juicios Arbitrales sobre partición comunidades y
              sociedades.
            </CardSubtitulo>
          </SubtitulosContainer>
        </ServiciosCard>
        {/* Derecho minero */}
        <ServiciosCard>
          <CardTitulo>Derecho Minero</CardTitulo>
          <CardIcon src={Card_04} />
          <MediaCardTitulo>Derecho Minero</MediaCardTitulo>
          <SubtitulosContainer>
            <CardSubtitulo>
              Asesoría en todos los asuntos relativos en materias de minería.
              Pedimentos y manifestaciones.
            </CardSubtitulo>
          </SubtitulosContainer>
        </ServiciosCard>
      </ServiciosWrapper>
    </ServiciosContainer>
  );
};

export default Servicios;
