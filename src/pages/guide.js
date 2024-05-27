import GetAllEspecieRepo from "@/application/usecases/especieUseCase/GetAllEspecieCase";
import GetAllMotivoRepo from "@/application/usecases/motivoUseCase/GetAllMotivoRepo";
import CreateOrderUseCase from "@/application/usecases/orderUseCase/CreateOrderUseCase";
import GetAllRazaCase from "@/application/usecases/razaUseCase/GetAllRazaCase";
import CustomAlerts from "@/components/CustomAlerts";
import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import CustomInput from "@/components/CustomInput";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import CustomSelect from "@/components/CustomSelect";
import SectionActive from "@/components/SectionActive";
import EspecieRepo from "@/infraestructure/implementation/httpRequest/axios/EspecieRepo";
import MotivoRepo from "@/infraestructure/implementation/httpRequest/axios/MotivoRepo";
import OrderRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import RazaRepo from "@/infraestructure/implementation/httpRequest/axios/RazaRepo";
import {
  AddButton,
  ButtonContainer,
  CheckboxContainer,
  Container,
  DeleteButton,
  Description,
  Form,
  GridContainer,
  Icon,
  IconTooltip,
  SectionName,
  SubmitButtonsContainer,
  Subtitle,
  TableStyled,
  Title,
  TooltipContainer,
} from "@/styles/Guide.style";
import {
  faCirclePlus,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const Guide = () => {
  const router = useRouter();
  const userId = useSelector((state) => state.user._id);
  const [orderDataGanado, setOrderDataGanado] = useState({ ganado: [] });
  const [especies, setEspecie] = useState([]);
  const [motivos, setMotivo] = useState([]);
  const [razas, setRaza] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const [showGrid, setShowGrid] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    title: "",
    text: "",
  });
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: '"Poppins", sans-serif',
            textAlign: "center",
            fontSize: "13px",
          },
        },
      },
    },
  });

  const [datosModificados, setDatosModificados] = useState({
    _id: null,
    id_user: userId,
    id_especie: null,
    id_motivo: null,
    vendedor: {
      nombre: "",
      domicilio: "",
      municipio: "",
    },
    comprador: {
      nombre: "",
      domicilio: "",
      municipio: "",
      predio: "",
    },
    ganado: [],
    vehiculo: {
      tipo: "",
      marca: "",
      modelo: "",
      placa: "",
      color: "",
      nombre_operador_vehiculo: "",
    },
  });

  const {
    control: controlGanado,
    handleSubmit: handleSubbmitGanado,
    reset: resetAnimal,
    formState: { errors: errorsGanado },
  } = useForm({});

  const handleEspecieChange = (id) => {
    setDatosModificados((prevState) => ({
      ...prevState,
      id_especie: id,
    }));
  };

  const handleMotivoChange = (id) => {
    setDatosModificados((prevState) => ({
      ...prevState,
      id_motivo: id,
    }));
  };

  const handleVendedorChange = (field, value) => {
    setDatosModificados((prevState) => ({
      ...prevState,
      vendedor: {
        ...prevState.vendedor,
        [field]: value,
      },
    }));
  };

  const handleCompradorChange = (field, value) => {
    setDatosModificados((prevState) => ({
      ...prevState,
      comprador: {
        ...prevState.comprador,
        [field]: value,
      },
    }));
  };

  const handleVehiculoChange = (field, value) => {
    setDatosModificados((prevState) => ({
      ...prevState,
      vehiculo: {
        ...prevState.vehiculo,
        [field]: value,
      },
    }));
  };

  const handleOptionsChange = (selectedOption) => {
    setShowGrid(selectedOption === "si");
  };

  const fetchEspecies = async () => {
    const especieRepo = new EspecieRepo();
    const getAllEspecie = new GetAllEspecieRepo(especieRepo);
    try {
      const response = await getAllEspecie.run();
      setEspecie(response.especies);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMotivos = async () => {
    const motivoRepo = new MotivoRepo();
    const getAllMotivo = new GetAllMotivoRepo(motivoRepo);
    try {
      const response = await getAllMotivo.run();
      setMotivo(response.motivos);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRaza = async () => {
    const razaRepo = new RazaRepo();
    const getAllRaza = new GetAllRazaCase(razaRepo);
    try {
      const response = await getAllRaza.run();
      setRaza(response.razas);
      console.log(response.razas);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitAnimal = (data) => {
    const animal = {
      patente: data.patente,
      sexo: data.sexo,
      id_raza: data.id_raza,
      color: data.color,
      siniiga: data.siniiga,
      figura_herraje: imageUrl,
    };

    setOrderDataGanado((prevOrderData) => ({
      ...prevOrderData,
      ganado: [...prevOrderData.ganado, animal],
    }));

    setImageUrl("");
    resetAnimal({
      patente: "",
      sexo: "",
      id_raza: "",
      color: "",
      siniiga: "",
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  useEffect(() => {
    fetchEspecies();
    fetchMotivos();
    fetchRaza();
  }, []);

  const onSubmit = async () => {
    const order = {
      id_especie: datosModificados.id_especie,
      id_motivo: datosModificados.id_motivo,
      id_user: datosModificados.id_user,
      vendedor: datosModificados.vendedor,
      comprador: datosModificados.comprador,
      ganado: orderDataGanado.ganado,
      vehiculo: datosModificados.vehiculo,
    };

    const orderRepo = new OrderRepo();
    const createOrderUseCase = new CreateOrderUseCase(orderRepo);
    try {
      const createdOrder = await createOrderUseCase.run(order);
      console.log("Orden creada:", createdOrder);

      setAlertInfo({
        show: true,
        title: "Creado correctamente",
        text: "La orden se ha creado exitosamente",
      });

      reset();
      setDatosModificados({
        _id: null,
        id_user: userId,
        id_especie: null,
        id_motivo: null,
        vendedor: {
          nombre: "",
          domicilio: "",
          municipio: "",
        },
        comprador: {
          nombre: "",
          domicilio: "",
          municipio: "",
          predio: "",
        },
        ganado: [],
        vehiculo: {
          tipo: "",
          marca: "",
          modelo: "",
          placa: "",
          color: "",
          nombre_operador_vehiculo: "",
        },
      });
      setOrderDataGanado({
        ganado: [],
      });

      setTimeout(() => {
        router.push("/catalogue");
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        setAlertInfo({
          show: true,
          title: "Ocurrió un Error Inesperado",
          text:
            `${error.message} - ${error.response.data.message}` ||
            "No se pudo completar la operación.",
        });
      }, 1000);
    }
  };

  const getRazaNameId = (id) => {
    const raza = razas.find((raza) => raza._id === id);
    return raza ? raza.name : "";
  };

  const handleDeleteAnimal = (index) => {
    setOrderDataGanado((prevOrderData) => {
      const updatedGanado = [...prevOrderData.ganado];
      updatedGanado.splice(index, 1);
      return {
        ...prevOrderData,
        ganado: updatedGanado,
      };
    });
  };

  useEffect(() => {
    console.log("Datos enviados:", datosModificados);
  }, [datosModificados]);

  return (
    <Container>
      <Title>Comienza con el formulario</Title>
      <Description>
        {" "}
        Agradecemos tu colaboración para completar el formulario con información
        precisa y completa. Esto nos permitirá procesar tu solicitud de manera
        eficiente.
      </Description>
      <SectionActive />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Subtitle>
          <div />
          <span>DATOS GENERALES</span>
        </Subtitle>
        <SectionName>Especie a movilizar</SectionName>
        <CheckboxContainer>
          <CustomCheckboxInput
            data={especies}
            name="id_especie"
            onSelectionChange={handleEspecieChange}
          />
        </CheckboxContainer>
        <GridContainer>
          <div>
            <SectionName>Datos del remitente (vendedor)</SectionName>
            <CustomInput
              control={control}
              name="seller-name"
              label="Nombre"
              fullWidth
              onChange={(e) => handleVendedorChange("nombre", e.target.value)}
            />
            <CustomInput
              control={control}
              name="seller-address"
              label="Domicilio"
              fullWidth
              onChange={(e) =>
                handleVendedorChange("domicilio", e.target.value)
              }
            />
            <CustomInput
              control={control}
              name="seller-city"
              label="Municipio"
              fullWidth
              onChange={(e) =>
                handleVendedorChange("municipio", e.target.value)
              }
            />
          </div>
          <div>
            <SectionName>Datos del destinario (comprador)</SectionName>
            <CustomInput
              control={control}
              name="buyer-name"
              label="Nombre"
              fullWidth
              onChange={(e) => handleCompradorChange("nombre", e.target.value)}
            />
            <CustomInput
              control={control}
              name="buyer-address"
              label="Domicilio"
              fullWidth
              onChange={(e) =>
                handleCompradorChange("domicilio", e.target.value)
              }
            />
            <CustomInput
              control={control}
              name="buyer-city"
              label="Municipio"
              fullWidth
              onChange={(e) =>
                handleCompradorChange("municipio", e.target.value)
              }
            />
            <CustomInput
              control={control}
              name="buyer-ranch"
              label="Rancho o predo"
              fullWidth
              onChange={(e) => handleCompradorChange("predio", e.target.value)}
            />
          </div>
        </GridContainer>
        <SectionName>Motivo de la movilización</SectionName>
        <CheckboxContainer>
          <CustomCheckboxInput
            data={motivos}
            name="id_motivo"
            onSelectionChange={handleMotivoChange}
          />
        </CheckboxContainer>
        <Subtitle>
          <div />
          <span>DATOS DEL GANADO</span>
        </Subtitle>
        <TooltipContainer>
          <SectionName>Movilización de animales</SectionName>
          <ThemeProvider theme={theme}>
            <Tooltip
              placement="top"
              title="Rellena los datos y da click en el boton de 'Agregar' para añadir un animal a la tabla, usalo según lo necesario."
            >
              <IconTooltip icon={faQuestionCircle} />
            </Tooltip>
          </ThemeProvider>
        </TooltipContainer>
        <ButtonContainer>
          <AddButton onClick={handleSubbmitGanado(onSubmitAnimal)}>
            <Icon icon={faCirclePlus} />
            Agregar
          </AddButton>
        </ButtonContainer>
        <GridContainer onSubmit={handleSubbmitGanado(onSubmitAnimal)}>
          <div>
            <CustomInput
              control={controlGanado}
              name="patente"
              label="Patente o factura"
              fullWidth
            />
            <CustomSelect
              label="Raza"
              name="id_raza"
              control={controlGanado}
              data={razas}
              fullWidth
            />
            <CustomInput
              control={controlGanado}
              name="siniiga"
              label="Arete siiniga"
              fullWidth
            />
          </div>
          <div>
            <CustomSelect
              label="Sexo"
              name="sexo"
              control={controlGanado}
              data={[
                { value: "macho", label: "Macho" },
                { value: "hembra", label: "Hembra" },
              ]}
              fullWidth
            />
            <CustomInput
              control={controlGanado}
              name="color"
              label="Color"
              fullWidth
            />
            <CustomImage
              name="animalImage"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = function () {
                    // Aquí `reader.result` contiene la representación base64 de la imagen
                    console.log("Imagen en base64:", reader.result);
                    setImageUrl(reader.result); // Ahora `imageUrl` almacenará la cadena base64 de la imagen
                  };
                  reader.readAsDataURL(file);
                }
              }}
              ref={fileInputRef}
            />
          </div>
        </GridContainer>
        <TableStyled>
          <thead>
            <tr>
              <th>Número de animales</th>
              <th>Patente ó factura</th>
              <th>Sexo</th>
              <th>Color</th>
              <th>Raza</th>
              <th>Arete</th>
              <th>Figura de herraje</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orderDataGanado.ganado.length === 0 ? (
              <tr>
                <td colSpan="8">Aún no hay animales registrados</td>
              </tr>
            ) : (
              orderDataGanado.ganado.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.patente}</td>
                  <td>{order.sexo}</td>
                  <td>{order.color}</td>
                  <td>{getRazaNameId(order.id_raza)}</td>
                  <td>{order.siniiga}</td>
                  <td>
                    {order.figura_herraje && (
                      <Image
                        src={order.figura_herraje}
                        alt="Animal"
                        width={100}
                        height={100}
                        layout="fixed"
                        style={{ borderRadius: "15px" }}
                      />
                    )}
                  </td>
                  <td>
                    <DeleteButton
                      type="button"
                      onClick={() => handleDeleteAnimal(index)}
                    >
                      Eliminar
                    </DeleteButton>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </TableStyled>
        <Subtitle>
          <div />
          <span>DATOS DEL VEHICULO</span>
        </Subtitle>
        <SectionName>Detalles</SectionName>
        <GridContainer>
          <div>
            <CustomInput
              control={control}
              name="transport-type"
              label="Tipo"
              fullWidth
              onChange={(e) => handleVehiculoChange("tipo", e.target.value)}
            />
            <CustomInput
              control={control}
              name="transport-model"
              label="Modelo"
              fullWidth
              onChange={(e) => handleVehiculoChange("modelo", e.target.value)}
            />
          </div>
          <div>
            <CustomInput
              control={control}
              name="transport-brand"
              label="Marca"
              fullWidth
              onChange={(e) => handleVehiculoChange("marca", e.target.value)}
            />

            <CustomInput
              control={control}
              name="transport-plate"
              label="Placa"
              fullWidth
              onChange={(e) => handleVehiculoChange("placa", e.target.value)}
            />
          </div>
        </GridContainer>
        <TooltipContainer>
          <SectionName>Remolque</SectionName>
          <ThemeProvider theme={theme}>
            <Tooltip
              placement="top"
              title="Coloca 'Si' si tu vehiculo cuenta con remolque para continuar rellenando los datos correspondientes."
            >
              <IconTooltip icon={faQuestionCircle} />
            </Tooltip>
          </ThemeProvider>
        </TooltipContainer>
        <CheckboxContainer>
          <CustomCheckboxInput
            label="Opciones"
            name="remolque"
            data={[
              { value: "si", label: "Si" },
              { value: "no", label: "No" },
            ]}
            control={control}
            onSelectionChange={handleOptionsChange}
            fullWidth
          />
        </CheckboxContainer>
        <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GridContainer>
              <div>
                <CustomInput
                  control={control}
                  name="transport-color"
                  label="Color"
                  fullWidth
                  onChange={(e) =>
                    handleVehiculoChange("color", e.target.value)
                  }
                />
              </div>
              <div>
                <CustomInput
                  control={control}
                  name="transport-operator-name"
                  label="Nombre del operador"
                  fullWidth
                  onChange={(e) =>
                    handleVehiculoChange(
                      "nombre_operador_vehiculo",
                      e.target.value
                    )
                  }
                />
              </div>
            </GridContainer>
          </motion.div>
        )}
        </AnimatePresence>
        <SubmitButtonsContainer>
          <CustomButton type="submit" buttonText="Cancelar" customDesign />
          <CustomButton type="submit" buttonText="Aceptar" />
        </SubmitButtonsContainer>
      </Form>
      {alertInfo.show && (
        <CustomAlerts
          open={alertInfo}
          onClose={() => setAlertInfo(false)}
          title={alertInfo.title}
          text={alertInfo.text}
          login
        />
      )}
    </Container>
  );
};

export default Guide;
