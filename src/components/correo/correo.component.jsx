import React from "react";

import Logo from "../../assets/logoweb.png";

import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";

import {
  CorreoContainer,
  CorreoContainerLogo,
  CorreoLogo,
  CorreoImage,
  FormWrapper,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  CorreoNav,
} from "./correo.styles";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Correo = () => {
  let location = useLocation();

  return (
    <>
      <CorreoNav>
        <CorreoContainerLogo>
          <CorreoLogo to="/" onClick={toggleHome}>
            <CorreoImage src={Logo} />
          </CorreoLogo>
        </CorreoContainerLogo>
      </CorreoNav>
      <CorreoContainer>
        <FormWrapper>
          <FormContent>
            <Form>
              <FormH1>Contactanos</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput required type="email" value={location.state} />

              <FormLabel htmlFor="for">Nombre</FormLabel>
              <FormInput required type="text" />
              <FormLabel htmlFor="for">Telefono</FormLabel>
              <FormInput required type="text" />

              <FormButton type="submit">Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrapper>
      </CorreoContainer>
    </>
  );
};

export default Correo;
