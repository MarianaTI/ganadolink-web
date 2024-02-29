import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Content, CustomIcon, FooterContainer, SocialIcons } from "./index.style";

function Customfooter() {
  return (
    <>
      <FooterContainer>
        <Content>
          <h1>GanadoLink</h1>
          <span>
            Si tienes alguna pregunta o necesitas asistencia, no dudes en
            contactarnos.
          </span>
          <SocialIcons>
            <CustomIcon icon={faFacebook} />

            <CustomIcon icon={faInstagram} />
          </SocialIcons>
        </Content>
      </FooterContainer>
    </>
  );
}

export default Customfooter;
