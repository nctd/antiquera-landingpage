import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const CorreoContainer = styled.div`
  min-height: 692px;
  overflow: hidden;
  background: #ffffff;
`;

export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #0f171f;
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 768px) {
    padding: 42px 42px;
  }

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 36px;
  font-weight: bolder;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  color: #000000;
  font-weight: bolder;
  font-size: 16px;
`;

export const FormTextBox = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  color: #000000;
  font-weight: bolder;
  font-size: 16px;
`;

export const FormButton = styled.button`
  background: #e5b06e;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-weight: bolder;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const CorreoNav = styled.nav`
  background: #ffffff 0% 0% no-repeat padding-box;

  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  margin-bottom: 1rem;
  left: 0;

  @media screen and (max-width: 1360px) {
    transition: 0.8s all ease;
    height: 100%;
  }
`;

export const CorreoContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1580px;
`;

export const CorreoLogo = styled(LinkRouter)`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const CorreoImage = styled.img`
  height: 135px;
  @media screen and (max-width: 480px) {
    height: 100px;
  }
`;
