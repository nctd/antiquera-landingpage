import React from "react";

import Imagen from "../../assets/Image.jpg";

import {
  MenuContainer,
  MenuBackground,
  ImageBackground,
  MenuContent,
  MenuTitle,
  MenuSubtitle,
  SpanColor,
} from "./menu.styles";

function Menu() {
  return (
    <MenuContainer>
      <MenuBackground>
        <ImageBackground />
      </MenuBackground>

      <MenuContent>
        <MenuTitle>
          Como estudio <SpanColor>Jurídico</SpanColor> de la región de
          Antofagasta con trayectoria, promovemos el desarrollo de los proyectos
          de las personas y empresas.
        </MenuTitle>
        <MenuSubtitle>
          Somos profesionales en el área del derecho de universidades públicas
          que entregan herramientas afines para la resolución de conflictos de
          relevancia jurídica, y que guían en los procesos en que se necesiten
          soluciones.
        </MenuSubtitle>
      </MenuContent>
    </MenuContainer>
  );
}

export default Menu;
