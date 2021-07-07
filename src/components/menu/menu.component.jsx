import React from "react";

import {
  MenuContainer,
  MenuContent,
  MenuTitulo,
  MenuSubtitulo,
  SpanColor,
  MenuColumn,
  MenuImage,
} from "./menu.styles";

import Imagen from "../../assets/img-menu-new.jpg";

const Menu = () => {
  return (
    <MenuContainer id="inicio">
      <MenuContent>
        <MenuColumn>
          <MenuImage src={Imagen} />
        </MenuColumn>

        <MenuColumn>
          <MenuTitulo>
            Como estudio <SpanColor>Jurídico</SpanColor> de la región de
            Antofagasta con trayectoria, promovemos el desarrollo de los
            proyectos de las personas y empresas.
          </MenuTitulo>
          <MenuSubtitulo>
            Somos profesionales en el área del derecho de universidades públicas
            que entregan herramientas afines para la resolución de conflictos de
            relevancia jurídica, y que guían en los procesos en que se necesiten
            soluciones.
          </MenuSubtitulo>
        </MenuColumn>
      </MenuContent>
    </MenuContainer>
  );
};

export default Menu;
