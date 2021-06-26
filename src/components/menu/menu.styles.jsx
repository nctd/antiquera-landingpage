import styled from "styled-components";

import Imagen from "../../assets/Image.jpg";

export const MenuContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const MenuBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  // background-image: src(${Imagen});
`;

export const MenuContent = styled.div`
  flex: 1;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuTitle = styled.h1`
  color: #262222;
  font-size: 42px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const MenuSubtitle = styled.p`
  margin-top: 24px;
  color: #262222;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

// export const MenuButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
export const SpanColor = styled.span`
  color: #e5b06e;
`;
// export const ButtonArrow = styled(MdArrowForward)`
//   margin-left: 8px;
//   font-size: 20px;
// `;
