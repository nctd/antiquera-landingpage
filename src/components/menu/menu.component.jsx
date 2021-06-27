import React from "react";

import Imagen from "../../assets/menu-imagen-1.jpg";

import {
  MenuContainer,
  MenuContent,
  MenuTitle,
  MenuSubtitle,
  SpanColor,
  MenuColumn,
  MenuImage,
} from "./menu.styles";

function Menu() {
  return (
    <MenuContainer>
      <MenuContent>
        <MenuColumn>
          <MenuImage src={Imagen} />
        </MenuColumn>

        <MenuColumn>
          <MenuTitle>
            Como estudio <SpanColor>Jurídico</SpanColor> de la región de
            Antofagasta con trayectoria, promovemos el desarrollo de los
            proyectos de las personas y empresas.
          </MenuTitle>
          <MenuSubtitle>
            Somos profesionales en el área del derecho de universidades públicas
            que entregan herramientas afines para la resolución de conflictos de
            relevancia jurídica, y que guían en los procesos en que se necesiten
            soluciones.
          </MenuSubtitle>
        </MenuColumn>
      </MenuContent>
    </MenuContainer>
  );
}

export default Menu;
