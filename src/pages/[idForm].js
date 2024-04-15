import GetAllEspecieRepo from "@/application/usecases/especieUseCase/GetAllEspecieCase";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import GetOneOrderUseCase from "@/application/usecases/orderUseCase/GetOneOrderUseCase";
import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import CustomInput from "@/components/CustomInput";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import CustomSelect from "@/components/CustomSelect";
import EspecieRepo from "@/infraestructure/implementation/httpRequest/axios/EspecieRepo";
import OrderRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import {
  AccionButton,
  AddContainer,
  ButtonsContainer,
  CheckboxContainer,
  CheckboxContainerBoolean,
  Container,
  DetailsGrid,
  Form,
  FormContainer,
  FormContainerDatosGenerales,
  FormContent,
  MarkIcon,
  PenIcon,
  Tab,
  TabContent,
  TableStyled,
  TabsContainer,
  TheadStyled,
  TrStyled,
} from "@/styles/Form.style";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MotivoRepo from "@/infraestructure/implementation/httpRequest/axios/MotivoRepo";
import GetAllMotivoRepo from "@/application/usecases/motivoUseCase/GetAllMotivoRepo";
import withAuth from "@/components/Authenticated";
import UpdateOrderUseCase from "@/application/usecases/orderUseCase/UpdateOrderUseCase";
import Order from "@/domain/entities/order";
import { useSelector } from "react-redux";
import AlertComponent from "@/components/CustomAlert";
import CustomAlerts from "@/components/CustomAlerts";

const IdForm = () => {
  const route = useRouter();
  const { idForm } = route.query;
  const [orderData, setOrderData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [especies, setEspecie] = useState([]);
  const [motivos, setMotivo] = useState([]);
  const userId = useSelector((state) => state.user._id);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    title: "",
    text: "",
  });

  // Estado para almacenar los datos modificados del primer formulario (Datos Generales)
  const [datosGeneralesModificados, setDatosGeneralesModificados] = useState({
    _id: idForm,
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
    ganado: [
      {
        patente: "",
        sexo: "",
        id_raza: {
          _id: "",
          name: "",
        },
        color: "",
        siniiga: "",
        figura_herraje: "",
      },
    ],
    vehiculo: {
      tipo: "",
      marca: "",
      modelo: "",
      placa: "",
      color: "",
      nombre_operador_vehiculo: "",
    },
  });

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    const orderRepo = new OrderRepo();
    const getOneOrderUseCase = new GetOneOrderUseCase(orderRepo);

    const fetchOrder = async () => {
      if (idForm) {
        try {
          const response = await getOneOrderUseCase.run(idForm);
          setOrderData(response.order);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchOrder();
  }, [idForm]);

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

  const handleEspecieChange = (id) => {
    setDatosGeneralesModificados((prevState) => ({
      ...prevState,
      id_especie: id,
    }));
  };

  const handleMotivoChange = (id) => {
    setDatosGeneralesModificados((prevState) => ({
      ...prevState,
      id_motivo: id,
    }));
  };

  const handleVendedorChange = (field, value) => {
    setDatosGeneralesModificados((prevState) => ({
      ...prevState,
      vendedor: {
        ...prevState.vendedor,
        [field]: value,
      },
    }));
  };

  const handleCompradorChange = (field, value) => {
    setDatosGeneralesModificados((prevState) => ({
      ...prevState,
      comprador: {
        ...prevState.comprador,
        [field]: value,
      },
    }));
  };

  const handleVehiculoChange = (field, value) => {
    setDatosGeneralesModificados((prevState) => ({
      ...prevState,
      vehiculo: {
        ...prevState.vehiculo,
        [field]: value,
      },
    }));
  };

  const handleContinue = () => {
    if (activeTab < 2) {
      setActiveTab(activeTab + 1);
    }
  };

  const onSubmitDatosGenerales = async () => {
    console.log("Enviando datos del formulario:", datosGeneralesModificados);
    await onSubmit(datosGeneralesModificados);
  };

  const onSubmit = async (datosGeneralesModificados) => {
    const orderRepo = new OrderRepo(idForm);
    const updateOrderUseCase = new UpdateOrderUseCase(orderRepo);
    
    try {
      const response = await updateOrderUseCase.run(datosGeneralesModificados);
      console.log(response);

      setAlertInfo({
        show: true,
        title: "Actualizado correctamente",
        text: "La orden se ha actualizado correctamente",
      });
      setTimeout(() => {
        route.push("/catalogue");
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


  useEffect(() => {
    console.log("Datos Generales Modificados:", datosGeneralesModificados);
  }, [datosGeneralesModificados]);

  useEffect(() => {
    fetchEspecies();
    fetchMotivos();
    if (orderData) {
      setDatosGeneralesModificados({
        _id: orderData._id,
        id_especie: orderData.id_especie || null,
        id_motivo: orderData.id_motivo || null,
        vendedor: {
          nombre: orderData.vendedor.nombre || "",
          domicilio: orderData.vendedor.domicilio || "",
          municipio: orderData.vendedor.municipio || "",
        },
        comprador: {
          nombre: orderData.comprador.nombre || "",
          domicilio: orderData.comprador.domicilio || "",
          municipio: orderData.comprador.municipio || "",
          predio: orderData.comprador.predio || "",
        },
        vehiculo: {
          tipo: orderData.vehiculo.tipo || "",
          marca: orderData.vehiculo.marca || "",
          modelo: orderData.vehiculo.modelo || "",
          placa: orderData.vehiculo.placa || "",
          color: orderData.vehiculo.color || "",
          nombre_operador_vehiculo: orderData.nombre_operador_vehiculo || "",
        },
        ganado: orderData.ganado.map((animal) => ({
          patente: animal.patente || "",
          sexo: animal.sexo || "",
          id_raza: animal.id_raza?._id || null,
          color: animal.color || "",
          siniiga: animal.siniiga || "",
          figura_herraje: animal.figura_herraje || "",
        })),
      });
    }
  }, [orderData, reset]);

  if (!orderData) {
    return <div>Cargando formulario...</div>;
  }

  return (
    <div>
      <Container>
        <TabsContainer>
          <Tab active={activeTab === 0} onClick={() => handleTabClick(0)}>
            Datos GENERALES
          </Tab>
          <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>
            DATOS DEL GANADO
          </Tab>
          <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>
            DATOS DEL VEHÍCULO
          </Tab>
        </TabsContainer>
        {/* Tab Datos Generales */}
        <FormContainerDatosGenerales
          onSubmit={handleSubmit(onSubmitDatosGenerales)}
        >
          <TabContent active={activeTab === 0}>
            <div>
              <span>ESPECIE A MOVILIZAR</span>
              <CheckboxContainer>
                <CustomCheckboxInput
                  data={especies}
                  name="id_especie"
                  defaultValue={orderData.id_especie}
                  onSelectionChange={handleEspecieChange}
                />
              </CheckboxContainer>
            </div>
            <FormContent>
              <div className="formSection">
                <span>DATOS DEL REMITENTE (VENDEDOR)</span>
                <CustomInput
                  label="Nombre"
                  name="sellName"
                  defaultValue={orderData.vendedor.nombre}
                  control={control}
                  onChange={(e) =>
                    handleVendedorChange("nombre", e.target.value)
                  }
                  customFormDesign
                />
                <CustomInput
                  label="Domicilio"
                  name="sellAddress"
                  defaultValue={orderData.vendedor.domicilio}
                  control={control}
                  onChange={(e) =>
                    handleVendedorChange("domicilio", e.target.value)
                  }
                  customFormDesign
                />
                <CustomInput
                  label="Municipio"
                  name="sellState"
                  defaultValue={orderData.vendedor.municipio}
                  control={control}
                  onChange={(e) =>
                    handleVendedorChange("municipio", e.target.value)
                  }
                  customFormDesign
                />
              </div>
              <div className="formSection">
                <span>DATOS DEL DESTINATARIO (COMPRADOR)</span>
                <CustomInput
                  label="Nombre"
                  name="buyerName"
                  defaultValue={orderData.comprador.nombre}
                  control={control}
                  onChange={(e) =>
                    handleCompradorChange("nombre", e.target.value)
                  }
                  customFormDesign
                />
                <CustomInput
                  label="Domicilio"
                  name="buyerAddress"
                  defaultValue={orderData.comprador.domicilio}
                  control={control}
                  onChange={(e) =>
                    handleCompradorChange("domicilio", e.target.value)
                  }
                  customFormDesign
                />
                <CustomInput
                  label="Municipio"
                  name="buyerState"
                  defaultValue={orderData.comprador.municipio}
                  control={control}
                  onChange={(e) =>
                    handleCompradorChange("municipio", e.target.value)
                  }
                  customFormDesign
                />
                <CustomInput
                  label="Rancho o predo"
                  name="buyerRanch"
                  defaultValue={orderData.comprador.predio}
                  control={control}
                  onChange={(e) =>
                    handleCompradorChange("predio", e.target.value)
                  }
                  customFormDesign
                />
              </div>
            </FormContent>
            <div>
              <span>MOTIVO DE LA MOVILIZACIÓN</span>
              <CheckboxContainer>
                <CustomCheckboxInput
                  data={motivos}
                  name="id_motivo"
                  defaultValue={orderData.id_motivo}
                  onSelectionChange={handleMotivoChange}
                />
              </CheckboxContainer>
            </div>
            <ButtonsContainer>
              <CustomButton customDesign buttonText="Cancelar" />
              <CustomButton
                buttonText="Continuar"
                type="button"
                onClick={handleContinue}
              />
            </ButtonsContainer>
          </TabContent>
          {/* Tab Datos del ganado */}
          <TabContent active={activeTab === 1}>
            <AddContainer>
              <CustomButton buttonText="Agregar" />
            </AddContainer>
            <FormContent>
              <CustomInput
                label="Patente o factura"
                name="patente"
                control={control}
                fullWidth
              />
              <CustomSelect
                label="Sexo"
                name="sexo"
                control={control}
                data={[
                  { value: "macho", label: "Macho" },
                  { value: "hembra", label: "Hembra" },
                ]}
                fullWidth
              />
              <CustomSelect
                label="Raza"
                name="id_raza"
                control={control}
                // data={razas}
                fullWidth
              />
              <CustomInput
                label="Color"
                name="color"
                control={control}
                fullWidth
              />
              <CustomInput
                label="Arete siniiga"
                name="siniiga"
                control={control}
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
              />
            </FormContent>
            <div>
              <TableStyled>
                <TheadStyled>
                  <TrStyled>
                    <th>Número de animales</th>
                    <th>Patente ó factura</th>
                    <th>Sexo</th>
                    <th>Color</th>
                    <th>Raza</th>
                    <th>Arete</th>
                    <th>Figura de herraje</th>
                    <th>Acciones</th>
                  </TrStyled>
                </TheadStyled>
                <tbody>
                  {orderData.ganado.map((order, index) => (
                    <TrStyled key={order.siniiga}>
                      <td>{index + 1}</td>
                      <td>{order.patente}</td>
                      <td>{order.sexo}</td>
                      <td>{order.color}</td>
                      <td>{order.id_raza.name}</td>
                      <td>{order.siniiga}</td>
                      <td>
                        {order.figura_herraje && (
                          <Image
                            src={order.figura_herraje}
                            alt="Animal"
                            width={100}
                            height={100}
                            layout="fixed"
                          />
                        )}
                      </td>

                      <td>
                        <AccionButton>
                          <MarkIcon icon={faXmark} />
                        </AccionButton>
                        <AccionButton>
                          <PenIcon icon={faPen} />
                        </AccionButton>
                      </td>
                    </TrStyled>
                  ))}
                </tbody>
              </TableStyled>
            </div>
            <ButtonsContainer>
              <CustomButton customDesign buttonText="Cancelar" />
              <CustomButton
                buttonText="Continuar"
                type="button"
                onClick={handleContinue}
              />
            </ButtonsContainer>
          </TabContent>
          <TabContent active={activeTab === 2}>
            <FormContainerDatosGenerales>
              <span>DETALLES</span>
              <DetailsGrid>
                <CustomInput
                  label="Tipo"
                  name="type"
                  defaultValue={orderData.vehiculo.tipo}
                  control={control}
                  onChange={(e) => handleVehiculoChange("tipo", e.target.value)}
                  fullWidth
                />
                <CustomInput
                  label="Marca"
                  name="brand"
                  defaultValue={orderData.vehiculo.marca}
                  control={control}
                  // control={controlVehic}
                  fullWidth
                />
                <CustomInput
                  label="Modelo"
                  name="model"
                  defaultValue={orderData.vehiculo.modelo}
                  control={control}
                  // control={controlVehic}
                  fullWidth
                />
                <CustomInput
                  label="Placa"
                  name="plate"
                  defaultValue={orderData.vehiculo.placa}
                  control={control}
                  // control={controlVehic}
                  fullWidth
                />
                <div className="fullWidth">
                  <span>Remolque</span>
                  <CheckboxContainerBoolean>
                    <CustomCheckboxInput
                      label="Opciones"
                      name="remolque"
                      data={[
                        { value: "si", label: "Si" },
                        { value: "no", label: "No" },
                      ]}
                      fullWidth
                    />
                  </CheckboxContainerBoolean>
                </div>
                <CustomInput
                  label="Color"
                  name="trailerColor"
                  defaultValue={orderData.vehiculo.color}
                  control={control}
                  className="halfWidth"
                  fullWidth
                />
                <CustomInput
                  label="Nombre del operador del vehiculo"
                  name="vehicleName"
                  defaultValue={orderData.vehiculo.nombre_operador_vehiculo}
                  control={control}
                  className="halfWidth"
                  fullWidth
                />
              </DetailsGrid>
              <ButtonsContainer>
                <CustomButton customDesign buttonText="Cancelar" />
                <CustomButton
                  buttonText="Confirmar"
                  type="submit"
                  onClick={onSubmitDatosGenerales}
                />
              </ButtonsContainer>
            </FormContainerDatosGenerales>
          </TabContent>
        </FormContainerDatosGenerales>
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
    </div>
  );
};

export default withAuth(IdForm);
