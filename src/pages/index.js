import CustomCategories from "@/components/CustomCategories";
import CustomComment from "@/components/CustomComment";
import Tooltip from "@mui/material/Tooltip";
import {
  AboutUsContainer,
  Background,
  ButtonStyled,
  ButtonsContainer,
  CenterContainer,
  CharacteristicsContainer,
  CollapsibleButton,
  ContactContainer,
  Container,
  ContainerQuestion,
  ContentContainer,
  CopyEmail,
  FAQ,
  GridContainer,
  GridContainerAboutUs,
  GridContainerCharacteristics,
  GridImage,
  GridWelcome,
  Icon,
  IconCopy,
  ImgStyled,
  ImgStyledAboutUs,
  Question,
  TextRight,
  Title,
  Welcome,
  WhoWeAre,
} from "@/styles/Index.style";
import { comment } from "/src/constants";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { Skeleton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { questions } from "@/constants";
import Customfooter from "@/components/CustomFooter";

const Home = () => {
  const [openCollapsibleIndex, setOpenCollapsibleIndex] = useState(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const emailRef = useRef(null);

  const toggleCollapsible = (index) => {
    setOpenCollapsibleIndex(openCollapsibleIndex === index ? null : index);
    setSelectedQuestionIndex(openCollapsibleIndex === index ? null : index);
  };

  const copyEmail = () => {
    const email = emailRef.current.textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = email;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comment.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const loading = () => {
    return (
      <div>
        {" "}
        <div
          style={{
            padding: "150px 0px 50px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridColumnGap: "150px",
            marginBottom: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              marginLeft: "92px",
            }}
          >
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
        <Container style={{ marginBottom: "150px" }}>
          <CenterContainer>
            <Skeleton
              variant="rounded"
              animation="wave"
              height={600}
              width={700}
            />
          </CenterContainer>
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
          <Container
            style={{
              background: "rgba(255, 229, 197, 0.15)",
              height: "auto",
              padding: "32px 0",
            }}
          >
            <FAQ>
              <span className="first-child">Preguntas más frecuentes</span>
              <span className="last-child">
                Aquí encontrarás respuestas a las preguntas más comunes sobre
                nuestra plataforma y los servicios que ofrecemos.
              </span>
            </FAQ>
            <CenterContainer
              style={{ justifyContent: "start", marginTop: "8px" }}
            >
              {questions.map((item, index) => (
                <ContainerQuestion
                  key={index}
                  isSelected={selectedQuestionIndex === index}
                >
                  <Question>
                    <span style={{ fontWeight: "500" }}>{item.question}</span>
                    <CollapsibleButton onClick={() => toggleCollapsible(index)}>
                      {openCollapsibleIndex === index ? "-" : "+"}
                    </CollapsibleButton>
                  </Question>
                  {openCollapsibleIndex === index && (
                    <ContentContainer>
                      <span>{item.answer}</span>
                    </ContentContainer>
                  )}
                </ContainerQuestion>
              ))}
            </CenterContainer>
            <FAQ>
              <span
                className="first-child"
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                ¿Tienes alguna otra pregunta?
              </span>
              <span className="last-child" style={{ width: "350px" }}>
                No dudes en eviarnos un correo electronico con tu pregunta para
                más aclaración
              </span>
              <ContactContainer>
                <Tooltip
                  title="¡Correo copiado!"
                  open={tooltipOpen}
                  onClose={() => setTooltipOpen(false)}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <span className="email" ref={emailRef}>
                    contact@ganadolink.com
                  </span>
                </Tooltip>
                <CopyEmail onClick={copyEmail}>
                  copiar <IconCopy icon={faCopy} />
                </CopyEmail>
              </ContactContainer>
            </FAQ>
          </Container>
          <div>
            <div style={{ height: "150px", overflow: "hidden", background: "rgba(255, 229, 197, 0.15)" }}>
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style={{ height: "100% ", width: "100%" }}
              >
                <path
                  d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  style={{ stroke: "none", fill: "#FFE5C5" }}
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
