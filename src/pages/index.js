import CustomButton from "@/components/CustomButton";
import CustomCategories from "@/components/CustomCategories";
import {
  ContainerCaracteImg,
  ContainerCaracteristicas,
  ContainerInicio,
  Containerimg,
  Containerimg2,
  ContenedorTexto,
  TextoImgInicio,
  TituloInicio,
  FooterContainer,
  FooterText,
  Footercomp,
  GridFooter,
  SocialIcons,
  SocialIcon,
  Titulo2,
} from "@/styles/Index.style";
import {
  Container,
  GridContainer,
  GridForm,
} from "@/styles/Login.style";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <ContainerInicio>
        <GridContainer>
          <Containerimg>
            <Image
              src="/img/imgInicio.png"
              width={850}
              height={750}
              style={{ width: "108%" }}
            />
            <TextoImgInicio>
              <div>
                <TituloInicio>
                  <h1>Agro en un solo lugar</h1>
                  <p>
                    Un punto de encuentro virtual para el mundo agropecuario,
                    onde la venta de ganado es más que un negocio
                  </p>
                </TituloInicio>
              </div>
            </TextoImgInicio>
          </Containerimg>
        </GridContainer>
        <Container>
          <GridContainer>
            <GridForm>
              <TituloInicio>
                <div>
                  <p>
                    Nuestra plataforma simplifica por completo el proceso de
                    guías de tránsito, desde el llenado hasta la entrega,
                    garantizando que su ganado llegue a su destino con la
                    documentación correcta y completa.{" "}
                  </p>
                </div>
              </TituloInicio>
              <CustomButton buttonText="Comienza ahora"/>
            </GridForm>
            <Containerimg2>
              <Image
                src="/img/imgInicio2.png"
                width={850}
                height={750}
                style={{ width: "108%" }}
              />
            </Containerimg2>
          </GridContainer>
        </Container>
        <ContenedorTexto>
          <TituloInicio>
            <span>¿A que nos dedicamos?</span>
            <span>
              En GanadoLink, simplificamos el proceso de guías de tránsito de
              ganado con nuestros formularios innovadores. Facilitamos la
              gestión de la documentación para productores y transportistas.
            </span>
          </TituloInicio>
        </ContenedorTexto>

        <ContainerCaracteristicas>
          <Titulo2>
            <h2>¡Aquí podrás encontrar!</h2>
          </Titulo2>
        </ContainerCaracteristicas>
        <ContainerCaracteImg>
          <TituloInicio>
              <CustomCategories img="/img/caracteristicasimg1.jpg" title="Facilidad de uso" text="Crea formularios de tránsito de ganado de manera sencilla y sin complicaciones en solo unos pocos clics."/>
          </TituloInicio>
          <TituloInicio>
            {/* <ImageContainer>
              <Image
                src="/img/caracteristicasimg2.jpg"
                width={200}
                height={200}
              />
              <h3>Descarga tus guias</h3>
              <span>
                Genera formularios personalizados de tránsito de ganado y
                descárgalos fácilmente en formato PDF o Excel para un acceso y
                almacenamiento aún más conveniente.
              </span>
            </ImageContainer> */}
          </TituloInicio>
          <TituloInicio>
            {/* <ImageContainer>
              <Image
                src="/img/caracteristicasimg3.jpg"
                width={200}
                height={200}
              />
              <h3>Acceso centralizado a guias</h3>
              <span>
                Accede y visualiza todas tus guías de tránsito de ganado de
                forma organizada y sencilla en un solo lugar, spanara un control
                completo de tu actividad ganadera.
              </span>
            </ImageContainer> */}
          </TituloInicio>
        </ContainerCaracteImg>
      </ContainerInicio>
      <FooterContainer>
        <TituloInicio>
          <FooterText>
            <Footercomp>
              <GridFooter>
                <h2>GanadoLink</h2>
                <span>
                  Si tienes alguna duda pregunta o necesitas asistencia, no
                  dudes contactanos
                </span>
                <span>&copy; 2024 GanadoLink</span>
                <br />
                <SocialIcons>
                  <SocialIcon href="https://facebook.com" target="_blank">
                    <FaFacebook />
                  </SocialIcon>
                  <SocialIcon href="https://instagram.com" target="_blank">
                    <FaInstagram />
                  </SocialIcon>
                </SocialIcons>
              </GridFooter>
            </Footercomp>
          </FooterText>
        </TituloInicio>
      </FooterContainer>
    </>
  )
}
