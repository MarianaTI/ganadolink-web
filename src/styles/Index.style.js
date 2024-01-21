import styled from "@emotion/styled";

export const Containerimg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;

  img {
    max-width: 100%;
    height: 100%;
    filter: brightness(60%);
  }
`;

export const Containerimg2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 90%;
    height: 60%;
  }
`;

export const TextoImgInicio = styled.div`
  text-align: right;
  background-color: beige;
  height: 100%;
  width: 33%;
  right: 0%;
  position: absolute;
  justify-content: center;
  background-color: beige;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 400px;
  border-bottom-left-radius: 400px;
`;
export const ContainerInicio = styled.div`
  height: 340vh;
  overflow: hidden;
`;

export const TituloInicio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    color: #2a2a2a;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
  }
`;

export const Titulo2 = styled(TituloInicio)`
padding: 48px;
    flex-direction: row;
    & h2 {
      color: red;
    }
`;

export const ContenedorTexto = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f2ebdf;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const BotonInicio = styled.div`
  text-align: center;
  justify-content: center;

  & button {
    border-radius: 5px;
    background: #f27d16;
    width: 200px;
    height: 35px;
    color: #ffffff;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  &:hover {
    background-color: #2980b9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
export const ContainerCaracteristicas = styled.div`
  width: 100%;
  height: 25vh;
  justify-content: center;
  text-align: center;
`;
export const ContainerCaracteImg = styled.div`
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  align-items: center;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  gap: 150px;
`;
export const ImageContainer = styled.div`
  width: 300px;
  height: 10vh;
  margin: 0 auto;
  text-align: center;
  height: 250px
  display: flex;
  flex-direction: column;
`;
export const FooterContainer = styled.footer`
  width: 100%;
  height: 45vh;
  background-color: beige;
`;
export const FooterText = styled.div`
  width: 50vw;
  overflow: hidden;
`;
export const Footercomp = styled.div`
  display: grid;
  width: 100vh;
  margin: 10 auto;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const GridFooter = styled.div`
  width: 300px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const SocialIcon = styled.a`
  color: #000;
  font-size: 28px;
  margin: 0 10px;
  text-decoration: none;
`;
