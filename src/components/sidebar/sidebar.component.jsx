import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarButton,
  SidebarButtonLink,
} from "./sidebar.styles";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="inicio"> Inicio</SidebarLink>
          <SidebarLink to="quienes"> Quienes somos </SidebarLink>
          <SidebarLink to="equipo"> Nuestro equipo </SidebarLink>
          <SidebarLink to="servicios"> Servicios </SidebarLink>
        </SidebarMenu>
        <SidebarButton>
          <SidebarButtonLink to="/contact"> Contactanos </SidebarButtonLink>
        </SidebarButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
