import React from "react";

import {
  InfoContainer,
  InfoTitulo,
  InfoContent,
  InfoColumn,
  CardImagen,
  CardTitulo,
  CardSubtitulo,
  SpanColor,
  SubtitulosContainer,
} from "./informacion.styles";

import Card_01 from "../../assets/img-card-01.jpg";
import Card_02 from "../../assets/img-card-02.jpg";
import Card_03 from "../../assets/img-card-03.jpg";
import Card_04 from "../../assets/img-card-04.jpg";

const Informacion = () => {
  return (
    <InfoContainer>
      <InfoTitulo>Servicios entregados</InfoTitulo>
      <InfoContent>
        <InfoColumn>
          <CardImagen src={Card_01} />
          <CardTitulo>Derecho Empresarial</CardTitulo>
          <SubtitulosContainer overflow>
            <CardSubtitulo>
              Asesoramos sobre Ley Nº 20.720 sobre Insolvencia y
              Reemprendimiento
              <SpanColor> (Ley de quiebras)</SpanColor>.
              <br />
              <br />
              Constitución de empresas en un día, modificación, y disolución de
              sociedades y empresas, fusiones, divisiones y reestructuraciones.
              <br />
              <br />
              Asesoría Legal permanente a personas y empresas, redacción de
              contratos, y trámites administrativos en general.
              <br />
              <br />
              Se gestionan solicitudes de arrendamiento de inmuebles en
              Ministerio de Bienes Nacionales, y solicitud de Extracción de
              Áridos, ante el mismo organismo.
            </CardSubtitulo>
          </SubtitulosContainer>
        </InfoColumn>
        <InfoColumn>
          <CardImagen src={Card_02} />
          <CardTitulo>Derecho Civil</CardTitulo>
          <SubtitulosContainer overflow>
            <CardSubtitulo>
              Asesorías jurídicas
              <SpanColor> procedimientos ejecutivos </SpanColor> relacionado con
              el cobro documentos mercantiles como facturas, cheques y pagares,
              y también, la defensa en este tipo de procesos.
              <br />
              <br />
              En los <SpanColor> juicios ordinarios </SpanColor>
              asesoramos en la Indemnización de Perjuicios por Responsabilidad
              Contractual, y Extracontractual. Negligencias Médicas.
              <br />
              <br />
              Además, representamos en <SpanColor> juicios sumarios </SpanColor>
              (Término de contrato de arrendamiento, Comodato Precario,
              Precario, entre otros)
              <br />
              <br />
              En <SpanColor> Procedimientos voluntarios </SpanColor>gestionamos
              cambio de nombre, interdicciones, y posesiones efectivas.
            </CardSubtitulo>
          </SubtitulosContainer>
        </InfoColumn>
      </InfoContent>
      <InfoContent>
        <InfoColumn>
          <CardImagen src={Card_03} />
          <CardTitulo>Juicios Arbitrales</CardTitulo>
          <SubtitulosContainer>
            <CardSubtitulo>
              Designación de árbitros y demanda en juicio arbitral respecto de
              comunidades, liquidación de sociedad conyugal y sociedades.
            </CardSubtitulo>
          </SubtitulosContainer>
        </InfoColumn>

        <InfoColumn>
          <CardImagen src={Card_04} />
          <CardTitulo>Derecho Minero</CardTitulo>
          <SubtitulosContainer>
            <CardSubtitulo>
              Constitución de pedimentos y manifestaciones, servidumbres mineras
              y contratos.
            </CardSubtitulo>
          </SubtitulosContainer>
        </InfoColumn>
      </InfoContent>
    </InfoContainer>
  );
};

export default Informacion;
