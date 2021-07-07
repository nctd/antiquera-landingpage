import React from "react";

import {
  CorreoContainer,
  FormWrapper,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./correo.styles";

const Correo = () => {
  return (
    <>
      <CorreoContainer>
        <FormWrapper>
          <Icon to="/">Test</Icon>
          <FormContent>
            <Form>
              <FormH1>Contactanos</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />

              <FormLabel htmlFor="for">Nombre</FormLabel>
              <FormInput type="text" />
              <FormLabel htmlFor="for">Telefono</FormLabel>
              <FormInput type="text" />

              <FormButton type="submit">Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrapper>
      </CorreoContainer>
    </>
  );
};

export default Correo;
