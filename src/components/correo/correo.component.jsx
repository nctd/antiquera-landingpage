import React from "react";

import Logo from "../../assets/logoweb.png";

import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import emailjs from "emailjs-com";

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

const API_KEY = process.env.REACT_APP_EMAIL_API_KEY;

const MySwal = withReactContent(Swal);

const toggleHome = () => {
  scroll.scrollToTop();
};

function enviarCorreo(e) {
  console.log("a");
  e.preventDefault();

  emailjs
    .sendForm("service_vril919", "template_ehzr86o", e.target, API_KEY)
    .then(
      (result) => {
        return MySwal.fire({
          title: <p>Contacto enviado</p>,
          icon: "success",
          confirmButtonColor: "#0f171f",
        });
      },
      (error) => {
        return MySwal.fire({
          title: <p>Ocurrió un error</p>,
          icon: "error",
          confirmButtonColor: "#0f171f",
        });
      }
    );
  e.target.reset();
}

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
            <Form onSubmit={enviarCorreo}>
              <FormH1>Contáctanos</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                required
                type="email"
                defaultValue={location.state}
                name="correo"
              />

              <FormLabel htmlFor="for">Nombre</FormLabel>
              <FormInput required type="text" name="nombre" />
              <FormLabel htmlFor="for">Telefono</FormLabel>
              <FormInput required type="text" name="telefono" />

              <FormButton type="submit">Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrapper>
      </CorreoContainer>
    </>
  );
};

export default Correo;
