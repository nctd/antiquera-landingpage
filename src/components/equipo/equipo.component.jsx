import React from "react";

import {
  EquipoContainer,
  EquipoContent,
  EquipoTitulo,
  EquipoColumn,
  EquipoImagen,
  ImagenTitulo,
} from "./equipo.styles";
import Card_01 from "../../assets/img-elizabethyapura.jpg";
import Card_03 from "../../assets/img-jorgecortes.jpg";
import Card_02 from "../../assets/img-sandraantiquera.jpg";
import Card_04 from "../../assets/img-cynthiaavalos.jpg";

const Equipo = () => {
  return (
    <EquipoContainer>
      <EquipoTitulo>Nuestro equipo</EquipoTitulo>
      <EquipoContent>
        <EquipoColumn>
          <EquipoImagen src={Card_01} />
          <ImagenTitulo>Elizabeth Yapura Araya</ImagenTitulo>
        </EquipoColumn>

        <EquipoColumn>
          <EquipoImagen central src={Card_02} />
          <ImagenTitulo>Sandra Antiquera Fredes</ImagenTitulo>
        </EquipoColumn>

        <EquipoColumn>
          <EquipoImagen central src={Card_03} />
          <ImagenTitulo>Jorge Cortes Monroy</ImagenTitulo>
        </EquipoColumn>

        <EquipoColumn>
          <EquipoImagen src={Card_04} />
          <ImagenTitulo>Cynthia Avalos Tirado</ImagenTitulo>
        </EquipoColumn>
      </EquipoContent>
    </EquipoContainer>
  );
};

export default Equipo;
