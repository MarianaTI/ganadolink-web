import CustomButton from "@/components/CustomButton";
import CustomCharacteristics from "@/components/CustomCharacteristics";
import CustomImageParallax from "@/components/CustomImageParallax";
import {
  CharacteristicsStyled,
  DescriptionContainer,
  GridImage,
  GridText,
  ParallaxContent,
  SpanStyled,
  TextStyled,
  VideoContainer,
  VideoText,
} from "@/styles/Index.style";
import { GridContainer } from "@/styles/Login.style";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loading = () => {
    return (
      <div>
        <div>
          <Skeleton height={650} variant="section" animation="wave" />
        </div>
        <TextStyled>
          <Skeleton height={50} width={700} animation="wave" />
        </TextStyled>
        <GridContainer>
          <Skeleton height={400} variant="section" animation="wave" />
        </GridContainer>
        <div>
          <SpanStyled>
            <Skeleton height={50} width={700} animation="wave" />
          </SpanStyled>
          <CharacteristicsStyled>
            <Skeleton
              height={350}
              width={400}
              variant="section"
              animation="wave"
            />
            <Skeleton
              height={350}
              width={400}
              variant="section"
              animation="wave"
            />
            <Skeleton
              height={350}
              width={400}
              variant="section"
              animation="wave"
            />
          </CharacteristicsStyled>
        </div>
        <div style={{ marginBottom: "32px" }}>
          <Skeleton height={200} variant="section" animation="wave" />
        </div>
        <GridContainer style={{ gap: "8px" }}>
          <Skeleton height={500} variant="section" animation="wave" />
          <Skeleton height={500} variant="section" animation="wave" />
        </GridContainer>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        loading()
      ) : (
        <div>
          <div>
            <CustomImageParallax
              imageUrl="/img/index.png"
              title="Agro en un solo lugar"
            >
              <ParallaxContent>
                <span>
                  Un punto de encuentro virtual para el mundo agropecuario,
                  donde la venta de ganado es más que un negocio.
                </span>
                <CustomButton buttonText="Comenzar ahora" customIndexDesign />
              </ParallaxContent>
            </CustomImageParallax>
          </div>
          <TextStyled>
            <h1>
              Formularios intuitivos para tu negocio ganadero.
              <span>&#160;</span>
            </h1>
          </TextStyled>
          <GridContainer>
            <GridText>
              <span>
                Nuestra plataforma simplifica por completo el proceso de guías
                de tránsito, desde el llenado hasta la entrega, garantizando que
                su ganado llegue a su destino con la documentación correcta y
                completa.
              </span>
            </GridText>
            <GridImage>
              <img src="/img/ImgInicio2.png" className="img1" />
              <img src="/img/index3.jpg" className="img2" />
            </GridImage>
          </GridContainer>
          <div>
            <SpanStyled>¡Aquí podrás encontrar!</SpanStyled>
            <CharacteristicsStyled>
              <CustomCharacteristics
                img="/img/laptop.png"
                title="Facilidad de uso"
                text="Crea formularios de tránsito de ganado de manera sencilla y sin complicaciones en solo unos pocos clics."
              />
              <CustomCharacteristics
                img="/img/checklist.png"
                title="Descarga tus guías"
                text="Genera formularios de tránsito de ganado personalizados y descárgalos en PDF o Excel para un acceso conveniente."
              />
              <CustomCharacteristics
                img="/img/book.png"
                title="Acceso centralizado de guías"
                text="Accede y visualiza guías de tránsito de ganado en un solo lugar, para un control completo de tu actividad ganadera."
              />
            </CharacteristicsStyled>
          </div>
          <DescriptionContainer>
            <span className="title">¿A qué nos dedicamos?</span>
            <span className="children">
              En GanadoLink, simplificamos el proceso de guías de tránsito de
              ganado con nuestros formularios innovadores. Facilitamos la
              gestión de la documentación para productores y transportistas.
            </span>
          </DescriptionContainer>
          <GridContainer>
            <VideoText>
              <span className="title">Lo que piensan nuestros clientes</span>
              <span className="icon">"</span>
              <span className="comment">
                Una herramienta fantástica para generar formularios de tránsito
                de ganado, fácil de usar y muy práctica. ¡Realmente útil para
                mantener registros organizados!
              </span>
            </VideoText>
            <VideoContainer>
              <video src="/img/cows.mp4" autoPlay muted className="video" />
            </VideoContainer>
          </GridContainer>
        </div>
      )}
    </>
  );
}

export default Home;