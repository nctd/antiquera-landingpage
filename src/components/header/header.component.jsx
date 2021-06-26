import React from "react";

import { FaBars } from "react-icons/fa";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  Nav,
  HeaderContainer,
  HeaderLogo,
  ResponsiveIcon,
  HeadMenu,
  HeadItem,
  HeadLink,
  HeadButton,
  HeadButtonLink,
  ButtonArrow,
} from "./header.styles";

const Header = ({ toggle }) => {
  return (
    <Nav>
      <HeaderContainer>
        <HeaderLogo to="/">
          <Logo />
        </HeaderLogo>

        <ResponsiveIcon onClick={toggle}>
          <FaBars />
        </ResponsiveIcon>

        <HeadMenu>
          <HeadItem>
            <HeadLink to="inicio">Inicio</HeadLink>
          </HeadItem>

          <HeadItem>
            <HeadLink to="quienes">Quienes somos</HeadLink>
          </HeadItem>

          <HeadItem>
            <HeadLink to="equipo">Nuestro equipo</HeadLink>
          </HeadItem>

          <HeadItem>
            <HeadLink to="servicios">Servicios</HeadLink>
          </HeadItem>

          <HeadButton>
            <HeadButtonLink to="/contact">
              <ButtonArrow /> Contactanos
            </HeadButtonLink>
          </HeadButton>
        </HeadMenu>
      </HeaderContainer>
    </Nav>
  );
};

export default Header;
