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
  LineaMedia,
  SaltoLinea,
} from "./servicios.styles";

import Card_01 from "../../assets/img-card-01.jpg";
import Card_02 from "../../assets/img-card-02.jpg";
import Card_03 from "../../assets/img-card-03.jpg";
import Card_04 from "../../assets/img-card-04.jpg";

const Servicios = () => {
  return (
    <ServiciosContainer>
      <ServiciosTitulo>Nuestros servicios</ServiciosTitulo>
      <ServiciosSubtitulo>
        Asesoramos sobre Ley Nº 20.720 sobre Insolvencia y <SaltoLinea />
        Reemprendimiento (Ley de quiebras), Derecho <SaltoLinea />
        Corporativo, Civil, Comercial y Minero.
      </ServiciosSubtitulo>
      {/* <LineaMedia /> */}
      <ServiciosWrapper>
        {/* Derecho empresarial */}
        <ServiciosCard>
          <CardTitulo>Derecho empresarial</CardTitulo>
          <CardIcon src={Card_01} />
          <MediaCardTitulo>Derecho empresarial</MediaCardTitulo>
          <CardSubtitulo>
            Sociedades: constitución, modificación, fusiones, divisiones,
            transformaciones entre otras.
          </CardSubtitulo>
        </ServiciosCard>
        {/* Derecho civil */}
        <ServiciosCard>
          <CardTitulo>Derecho civil</CardTitulo>
          <CardIcon src={Card_02} />
          <MediaCardTitulo>Derecho civil</MediaCardTitulo>
          <CardSubtitulo>
            Asesorías en materias civiles y asuntos voluntarios
          </CardSubtitulo>
        </ServiciosCard>
        {/* Juicios arbitrales */}
        <ServiciosCard>
          <CardTitulo>Juicios arbitrales</CardTitulo>
          <CardIcon src={Card_03} />
          <MediaCardTitulo>Juicios arbitrales</MediaCardTitulo>
          <CardSubtitulo>
            Asesoría legal en Juicios Arbitrales sobre partición comunidades y
            sociedades.
          </CardSubtitulo>
        </ServiciosCard>
        {/* Derecho minero */}
        <ServiciosCard>
          <CardTitulo>Derecho minero</CardTitulo>
          <CardIcon src={Card_04} />
          <MediaCardTitulo>Derecho minero</MediaCardTitulo>
          <CardSubtitulo>
            Asesoría en todos los asuntos relativos en materias de minería.
            Pedimentos y manifestaciones.
          </CardSubtitulo>
        </ServiciosCard>
      </ServiciosWrapper>
    </ServiciosContainer>
  );
};

export default Servicios;
