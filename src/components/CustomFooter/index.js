import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  ButtonIcon,
  Content,
  CustomIcon,
  FooterContainer,
  FooterContentRoute,
  FooterContentTerms,
  LineStyled,
  LinksContainer,
  LinksContent,
  LinksText,
  SocialIcons,
} from "./index.style";
import Link from "next/link";

function Customfooter() {
  const toFacebook = () => {
    window.open("https://www.facebook.com", "_blank");
  }

  const toInstagram = () => {
    window.open("https://www.instagram.com", "_blank");
  }


  return (
    <>
      <FooterContainer>
        <FooterContentRoute>
          <Content>
            <h1>GanadoLink</h1>
            <span>
              Si tienes alguna pregunta o necesitas asistencia, no dudes en
              contactarnos.
            </span>
            <SocialIcons>
              <ButtonIcon onClick={toFacebook}>
                Facebook <CustomIcon icon={faFacebookSquare} />
              </ButtonIcon>
              <ButtonIcon onClick={toInstagram}>
                Instagram <CustomIcon icon={faInstagram} />
              </ButtonIcon>
            </SocialIcons>
          </Content>
          <LinksText>
            <LinksContainer>
              <LinksContent>
                <span className="title">Empresa</span>
                <Link href="/">
                  <span>Home</span>
                </Link>
              </LinksContent>
              <LinksContent>
                <span className="title">Recursos</span>
                <Link href="/form">
                  <span>Formulario</span>
                </Link>
                <Link href="/catalogue">
                  <span>Cátalogo</span>
                </Link>
              </LinksContent>
              <LinksContent>
                <span className="title">Legal</span>
                <Link href="#">
                  <span>Términos y condiciones</span>
                </Link>
                <Link href="#">
                  <span>Política de privacidad</span>
                </Link>
              </LinksContent>
            </LinksContainer>
          </LinksText>
        </FooterContentRoute>
        <LineStyled />
        <FooterContentTerms>
          <div style={{ marginLeft: "40px" }}>
            <span>contact@ganadolink.com</span>
          </div>
          <div>© 2024 GanadoLink Inc.</div>
        </FooterContentTerms>
      </FooterContainer>
    </>
  );
}

export default Customfooter;
