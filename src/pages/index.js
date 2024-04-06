import CustomCategories from "@/components/CustomCategories";
import CustomComment from "@/components/CustomComment";
import {
  AboutUsContainer,
  Background,
  ButtonStyled,
  ButtonText,
  ButtonsContainer,
  CenterContainer,
  CharacteristicsContainer,
  Container,
  GridContainer,
  GridContainerAboutUs,
  GridContainerCharacteristics,
  GridImage,
  GridWelcome,
  Icon,
  ImgStyled,
  ImgStyledAboutUs,
  TextRight,
  Title,
  Welcome,
  WhoWeAre,
} from "@/styles/Index.style";
import { comment } from "/src/constants";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comment.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const loading = () => {
    return (
      <div>
        <div
          style={{
            padding: "150px 0px 50px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridColumnGap: "150px",
            marginBottom: "100px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "start", marginLeft: "92px" }}>
            <Skeleton
              variant="rounded"
              animation="wave"
              height={400}
              width={500}
            />
          </div>
          <div>
            <Skeleton variant="rounded" animation="wave" height={400} />
          </div>
        </div>
        <CharacteristicsContainer
          style={{ background: "none", height: "560px" }}
        >
          <GridContainerCharacteristics>
            <Skeleton
              variant="rounded"
              animation="wave"
              height={200}
              width={500}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={200}
              width={500}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={200}
              width={500}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={200}
              width={500}
            />
          </GridContainerCharacteristics>
        </CharacteristicsContainer>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            <Skeleton
              variant="rounded"
              animation="wave"
              height={40}
              width={800}
            />
          </div>
          <GridContainerAboutUs>
            <AboutUsContainer>
              <Skeleton
                variant="rounded"
                animation="wave"
                height={400}
                width={800}
              />
            </AboutUsContainer>
            <CenterContainer>
              <Skeleton
                variant="rounded"
                animation="wave"
                height={400}
                width={800}
              />
            </CenterContainer>
          </GridContainerAboutUs>
        </Container>
        <Container>
          <GridContainerAboutUs>
            <AboutUsContainer>
              <Skeleton
                variant="rounded"
                animation="wave"
                height={400}
                width={800}
              />
            </AboutUsContainer>
            <CenterContainer>
              <Skeleton
                variant="rounded"
                animation="wave"
                height={400}
                width={800}
              />
            </CenterContainer>
          </GridContainerAboutUs>
        </Container>
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
          <GridContainer>
            <GridWelcome>
              <Welcome>
                <h1>
                  Gestiona tu <span>ganado</span> con un toque de innovación
                </h1>
                <p>
                  Simplifica la gestión, venta y transporte de ganado, uniendo a
                  ganaderos y compradores en un solo lugar.
                </p>
                <ButtonsContainer>
                  <ButtonStyled>
                    <span>Comenzar a usar </span>
                    <Icon icon={faChevronRight} />
                  </ButtonStyled>
                </ButtonsContainer>
              </Welcome>
            </GridWelcome>
            <GridImage>
              <Background />
              <ImgStyled src="/img/ganado.png" />
            </GridImage>
          </GridContainer>
          <CharacteristicsContainer>
            <Title>
              <span>
                ¡Tu <span className="color">administración</span> simplificada,
                en un solo lugar!
              </span>
            </Title>
            <GridContainerCharacteristics>
              <CustomCategories
                img="/img/caracteristica1.png"
                title="Acceso centralizado de guías"
                text="Accede y visualiza tus guías de tránsito de ganado de manera organizada y  sencilla en un solo lugar, para un control total de tu actividad  ganadera."
              />
              <CustomCategories
                img="/img/caracteristica2.png"
                title="Facilidad de uso"
                text="Crea formularios de tránsito de ganado de manera sencilla y sin complicaciones en solo unos pocos clics."
              />
              <CustomCategories
                img="/img/caracteristica3.png"
                title="Seguridad de datos"
                text="Tu información ganadera está protegida con los más altos estándares de  seguridad para garantizar la confidencialidad y la integridad de tus  registros."
              />
              <CustomCategories
                img="/img/caracteristica4.png"
                title="Descarga tus guías"
                text="Crea y descarga fácilmente formularios personalizados de tránsito de  ganado en PDF o Excel para un acceso y almacenamiento más conveniente."
              />
            </GridContainerCharacteristics>
          </CharacteristicsContainer>
          <Container>
            <WhoWeAre>
              <span>Descubre qué nos hace únicos</span>
            </WhoWeAre>
            <GridContainerAboutUs>
              <AboutUsContainer>
                <span>
                  Optimizamos el proceso de guías de tránsito de ganado con
                  nuestros formularios innovadores, simplificando la gestión de
                  documentación tanto para productores como para transportistas.
                </span>
                <span>
                  Además, nuestra plataforma ofrece una experiencia intuitiva y
                  eficiente, asegurando que tanto productores como
                  transportistas puedan cumplir con los requisitos de
                  documentación de manera rápida y sin complicaciones.
                </span>
              </AboutUsContainer>
              <CenterContainer>
                <ImgStyledAboutUs src="/img/aboutus.jpg" alt="aboutus" />
              </CenterContainer>
            </GridContainerAboutUs>
          </Container>
          <Container>
            <GridContainerAboutUs>
              <CenterContainer>
                <video
                  width="580px"
                  height="430px"
                  autoPlay
                  muted
                  loop
                  style={{ objectFit: "cover", borderRadius: "15px" }}
                >
                  <source src="/img/video.mp4" type="video/mp4" />
                </video>
              </CenterContainer>
              <CenterContainer>
                <TextRight>
                  <span>
                    Lo que nuestros <span className="color">usuarios</span>{" "}
                    piensan de nosotros
                  </span>
                </TextRight>
                <CustomComment
                  key={currentCommentIndex}
                  opinion={comment[currentCommentIndex].opinion}
                  currentIndex={currentCommentIndex}
                  totalComments={comment.length}
                />
              </CenterContainer>
            </GridContainerAboutUs>
          </Container>
        </div>
      )}
    </>
  );
};

export default Home;
