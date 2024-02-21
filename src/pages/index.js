import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import CustomCategories from "@/components/CustomCategories";
import Indexfooter from "@/components/CustomFooter";
import {
  ContainerCaracteImg,
  ContainerCaracteristicas,
  ContainerInicio,
  Containerimg2,
  ContenedorTexto,
  TituloInicio,
  Titulo2,
  StartContainer,
  TextContainer,
} from "@/styles/Index.style";  
import AlertComponent from "@/components/CustomAlert";
import CustomAlertSeverity from "@/components/CustomAlertSeverity";

export default function Home() {
  return (
    <ContainerInicio>
      <div style={{ position: "relative", width: "auto", height: "600px" }}>
        <Image
          src="/img/imgInicio.png"
          layout="fill"
          objectFit="cover"
          alt="inicio"
        />
      </div>
      <AlertComponent imageSrc="/img/hecho.png"  text="Parece que ocurrio un problema" onClose={(null)} btmstyle/>
      <div>
        <StartContainer>
          <TextContainer>
            <span>
              Nuestra plataforma simplifica por completo el proceso de guías de tránsito, desde el llenado hasta la entrega, garantizando que su ganado llegue a su destino con la documentación correcta y completa.
            </span>
            <CustomButton buttonText="Comienza ahora" />
          </TextContainer>

          <Containerimg2>
            <Image
              src="/img/imgInicio2.png"
              width={850}
              height={750}
              alt="inicio2"
            />
          </Containerimg2>
        </StartContainer>
      </div>

      <ContenedorTexto>
        <TituloInicio>
          <span>¿A qué nos dedicamos?</span>
            <span>
              En GanadoLink, simplificamos el proceso de guías de tránsito de ganado con nuestros formularios innovadores. Facilitamos la gestión de la documentación para productores y transportistas.
            </span>
        </TituloInicio>
      </ContenedorTexto>

      <ContainerCaracteristicas>
        <Titulo2>
          <h1>¡Aquí podrás encontrar!</h1>
        </Titulo2>
      </ContainerCaracteristicas>

        <ContainerCaracteImg>
          <CustomCategories
            img="/img/caracteristicasimg1.png"
            title="Facilidad de uso"
            text="Crea formularios de tránsito de ganado de manera sencilla y sin complicaciones en solo unos pocos clics."
          />
          <CustomCategories
            img="/img/caracteristicasimg2.png"
            title="Descarga tus guías"
            text="Genera formularios personalizados de tránsito de ganado y descárgalos fácilmente en formato PDF o Excel para un acceso y almacenamiento aún más conveniente."
          />
          <CustomCategories
            img="/img/caracteristicasimg3.png"
            title="Acceso Centralizado de Guías"
            text="Accede y visualiza todas tus guías de tránsito de ganado de forma organizada y sencilla en un solo lugar, para un control completo de tu actividad ganadera."
          />
        </ContainerCaracteImg>
      <Indexfooter />
    </ContainerInicio>
  );
}