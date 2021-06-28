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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="inicio" onClick={toggle}>
            Inicio
          </SidebarLink>
          <SidebarLink to="quienes" onClick={toggle}>
            Quienes somos
          </SidebarLink>
          <SidebarLink to="equipo" onClick={toggle}>
            Nuestro equipo
          </SidebarLink>
          <SidebarLink to="servicios" onClick={toggle}>
            Servicios
          </SidebarLink>
        </SidebarMenu>
        <SidebarButton>
          <SidebarButtonLink to="/contact"> Contactanos </SidebarButtonLink>
        </SidebarButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
