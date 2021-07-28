import React from "react";

import {
  AboutUsContainer,
  AboutUsContent,
  AboutUsColumn,
  AboutUsImage,
  AboutUsTitulo,
  AboutUsSubtitulo,
} from "./about-us.styles";

import Imagen from "../../assets/img-about.jpg";

const AboutUs = () => {
  return (
    <AboutUsContainer id="quienes">
      <AboutUsContent>
        <AboutUsColumn>
          <AboutUsImage src={Imagen} />
        </AboutUsColumn>

        <AboutUsColumn>
          <AboutUsTitulo>¿Quienes Somos?</AboutUsTitulo>

          <AboutUsSubtitulo>
            Nuestro concepto de estudio se encuentra dirigido a la atención
            presencial y directa con el cliente, logrando una atención
            personalizada con el asunto de relevancia jurídica.
            <br />
            <br />
            Nuestra trayectoria por más de veinte años como asesores, y
            litigantes en el área del derecho, nos hacen tener una preferencia
            con el público. Además, el compromiso que se crea entre el
            profesional y el cliente; genera confianza, certidumbre y
            satisfacción.
            <br />
            <br />
            Trabajamos para personas naturales y para las empresas, pyme,
            microempresas y cualquier otras personas sujetas de crédito, para
            que logren desarrollar sus actividades productivas y proyectos. Sin
            perjuicio, de guiar el buen término de su empresa.
            <br />
            <br />
            Sin embargo, nos hacemos cargo de otras áreas del derecho de acuerdo
            a sus necesidades del cliente.
          </AboutUsSubtitulo>
        </AboutUsColumn>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
