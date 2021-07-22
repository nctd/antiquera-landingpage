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
          <SidebarLink
            to="inicio"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-140}
          >
            Inicio
          </SidebarLink>
          <SidebarLink
            to="quienes"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-140}
          >
            Quienes somos
          </SidebarLink>
          <SidebarLink
            to="equipo"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-140}
          >
            Nuestro equipo
          </SidebarLink>
          <SidebarLink
            to="servicios"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-140}
          >
            Servicios
          </SidebarLink>
        </SidebarMenu>
        <SidebarButton>
          <SidebarButtonLink to="/contacto"> Contactanos </SidebarButtonLink>
        </SidebarButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
