import styled from "styled-components";

export const MenuContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;

export const MenuContent = styled.div`
  flex: 1;
  z-index: 3;
  max-width: 1520px;
  position: absolute;
  padding: 8px 40px;
  display: flex;
  flex-direction: row;
  // align-items: center;
  //
  // display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  // margin-bottom: 30px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 80px;
  }
`;

// export const MenuBackground = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// export const ImageBackground = styled.div`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: #232a34;
//   // background-image: src(${Imagen});
// `;

export const MenuTitle = styled.h1`
  color: #262222;
  font-size: 30px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-top: 40px;
    text-align: justify;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    padding-top: 40px;
    text-align: justify;
  }
`;

export const MenuSubtitle = styled.p`
  margin-top: 24px;
  color: #262222;
  font-size: 20px;
  text-align: justify;
  // max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: justify;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    text-align: justify;
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

export const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const MenuImage = styled.img`
  box-shadow: 0px 20px 20px #00000029;
  width: 80%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
