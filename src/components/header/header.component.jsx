import React from "react";

import { FaBars } from "react-icons/fa";

import Logo from "../../assets/logoweb.png";

import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  HeaderContainer,
  HeaderLogo,
  HeaderImage,
  ResponsiveIcon,
  HeadMenu,
  HeadItem,
  HeadLink,
  HeadButton,
  HeadButtonLink,
  ButtonArrow,
} from "./header.styles";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Header = ({ toggle }) => {
  return (
    <Nav>
      <HeaderContainer>
        <HeaderLogo to="/" onClick={toggleHome}>
          <HeaderImage src={Logo} />
        </HeaderLogo>

        <ResponsiveIcon onClick={toggle}>
          <FaBars />
        </ResponsiveIcon>

        <HeadMenu>
          <HeadItem>
            <HeadLink
              to="inicio"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-140}
            >
              Inicio
            </HeadLink>
          </HeadItem>

          <HeadItem>
            <HeadLink
              to="quienes"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-140}
            >
              Quienes somos
            </HeadLink>
          </HeadItem>

          <HeadItem>
            <HeadLink
              to="equipo"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-140}
            >
              Nuestro equipo
            </HeadLink>
          </HeadItem>

          <HeadItem>
            <HeadLink
              to="servicios"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-140}
            >
              Servicios
            </HeadLink>
          </HeadItem>

          <HeadButton>
            <HeadButtonLink to="/contacto">
              <ButtonArrow /> Contactanos
            </HeadButtonLink>
          </HeadButton>
        </HeadMenu>
      </HeaderContainer>
    </Nav>
  );
};

export default Header;
