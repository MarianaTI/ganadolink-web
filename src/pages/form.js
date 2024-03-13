import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import {
  AccionButton,
  AddContainer,
  ButtonsContainer,
  CheckboxContainer,
  CheckboxContainerBoolean,
  Container,
  DetailsGrid,
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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "@/components/CustomSelect";
import EspecieRepo from "@/infraestructure/implementation/httpRequest/axios/EspecieRepo";
import GetAllEspecieRepo from "@/application/usecases/especieUseCase/GetAllEspecieCase";
import MotivoRepo from "@/infraestructure/implementation/httpRequest/axios/MotivoRepo";
import GetAllMotivoRepo from "@/application/usecases/motivoUseCase/GetAllMotivoRepo";
import RazaRepo from "@/infraestructure/implementation/httpRequest/axios/RazaRepo";
import GetAllRazaCase from "@/application/usecases/razaUseCase/GetAllRazaCase";
import Image from "next/image";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import CustomImage from "@/components/CustomImage";
import OrderRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import CreateOrderUseCase from "@/application/usecases/orderUseCase/CreateOrderUseCase";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Form = () => {
  const router = useRouter();
  const userId = useSelector((state) => state.user._id);
  const [registerAnimals, setRegisterAnimals] = useState([]);
  const [registerGenerals, setRegisterGeneral] = useState([]);
  const [registerVehicule, setRegisterVehicule] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [especies, setEspecie] = useState([]);
  const [motivos, setMotivo] = useState([]);
  const [razas, setRaza] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedEspecie, setSelectedEspecie] = useState("");
  const [selectedMotivo, setSelectedMotivo] = useState("");
  const [selectedBoolean, setSelectedBoolean] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };

  const orderRepo = new OrderRepo();
  const createOrderUseCase = new CreateOrderUseCase(orderRepo);

  const onSubmitDatosGenerales = (data, userId) => {
    const datosGenerales = {
      id_especie: selectedEspecie,
      id_motivo: selectedMotivo,
      id_user: userId,
      vendedor: {
        nombre: data.sellName,
        domicilio: data.sellAddress,
        municipio: data.sellState,
      },
      comprador: {
        nombre: data.buyerName,
        domicilio: data.buyerAddress,
        municipio: data.buyerState,
        predio: data.buyerRanch,
      },
    };
    setRegisterGeneral([...registerGenerals, datosGenerales]);
    setActiveTab(1);
  };

  ///! funcion que recibe el objeto para pintar la tabla
  const onSubmitAnimal = (data) => {
    const completeData = { ...data, figura_herraje: imageUrl };
    setRegisterAnimals((currentRegister) => [...currentRegister, completeData]);

    // Limpia el estado de la imagen para la próxima selección
    setImageUrl("");
    reset({
      patente: "",
      sexo: "",
      id_raza: "",
      color: "",
      siniiga: "",
    });
  };

  const handleDeleteAnimal = (index) => {
    setRegisterAnimals((currentRegister) => {
      const deleteRegister = [...currentRegister];
      deleteRegister.splice(index, 1);
      return deleteRegister;
    });
  };

  const handleClickContinuar = async () => {
    const ganadoData = {
      ganado: registerAnimals.map(
        ({ patente, sexo, id_raza, color, siniiga, figura_herraje }) => ({
          patente,
          sexo,
          id_raza,
          color,
          siniiga,
          figura_herraje,
        })
      ),
    };

    const datosFinales = { ...ganadoData };

    setActiveTab(2);
  };

  const onSubmitVehicule = async (data) => {
    const dataVehicule = {
      tipo: data.type,
      marca: data.brand,
      modelo: data.model,
      placa: data.plate,
      color: data.trailerColor,
      nombre_operador_vehiculo: data.vehicleName,
    };

    // Actualiza el estado para reflejar el nuevo vehículo
    setRegisterVehicule((current) => [...current, dataVehicule]);

    await handleFinalize(dataVehicule);

    router.push("/catalogue");
  };

  const handleFinalize = async (newVehicule) => {
    try {
      const datosGenerales = registerGenerals[registerGenerals.length - 1];
      const datosVehiculo =
        newVehicule || registerVehicule[registerVehicule.length - 1];

      const order = {
        ...datosGenerales,
        ganado: Array.isArray(registerAnimals)
          ? registerAnimals
          : [registerAnimals],
        vehiculo: datosVehiculo,
      };

      const createdOrder = await createOrderUseCase.run(order);
      console.log(createdOrder);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    control: controlGeneral,
    handleSubmit: handleSubmitGeneral,
    formState: { errors: errorsGeneral },
  } = useForm({});

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const {
    control: controlVehic,
    handleSubmit: handleSubmitVehic,
    formState: { errors: errorsVehic },
  } = useForm({});

  const handleEspecieChange = (id) => {
    setSelectedEspecie(id);
  };

  const handleMotivoChange = (id) => {
    setSelectedMotivo(id);
  };

  const handleOptionsChange = (id) => {
    setSelectedBoolean(id);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    fetchEspecies();
    fetchMotivos();
    fetchRaza();
  }, []);

  return (
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
      <TabContent active={activeTab === 0}>
        <FormContainerDatosGenerales
          onSubmit={handleSubmitGeneral(onSubmitDatosGenerales)}
        >
          <div>
            <span>ESPECIE A MOVILIZAR</span>
            <CheckboxContainer>
              <CustomCheckboxInput
                data={especies}
                name="id_especie"
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
                control={controlGeneral}
                customFormDesign
              />
              <CustomInput
                label="Domicilio"
                name="sellAddress"
                control={controlGeneral}
                customFormDesign
              />
              <CustomInput
                label="Municipio"
                name="sellState"
                control={controlGeneral}
                customFormDesign
              />
            </div>
            <div className="formSection">
              <span>DATOS DEL DESTINATARIO (COMPRADOR)</span>
              <CustomInput
                label="Nombre"
                name="buyerName"
                control={controlGeneral}
                customFormDesign
              />
              <CustomInput
                label="Domicilio"
                name="buyerAddress"
                control={controlGeneral}
                customFormDesign
              />
              <CustomInput
                label="Municipio"
                name="buyerState"
                control={controlGeneral}
                customFormDesign
              />
              <CustomInput
                label="Rancho o predo"
                name="buyerRanch"
                control={controlGeneral}
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
                onSelectionChange={handleMotivoChange}
              />
            </CheckboxContainer>
          </div>
          <ButtonsContainer>
            <CustomButton customDesign buttonText="Cancelar" />
            <CustomButton buttonText="Continuar" type="submit" />
          </ButtonsContainer>
        </FormContainerDatosGenerales>
      </TabContent>
      {/* Tab Datos del ganado */}
      <TabContent active={activeTab === 1}>
        <AddContainer>
          <CustomButton
            buttonText="Agregar"
            onClick={handleSubmit(onSubmitAnimal)}
          />
        </AddContainer>
        <FormContainer onSubmit={handleSubmit(onSubmitAnimal)}>
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
            data={razas}
            fullWidth
          />
          <CustomInput label="Color" name="color" control={control} fullWidth />
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
        </FormContainer>
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
              {registerAnimals.map((registro, index) => (
                <TrStyled key={index}>
                  <td>{index + 1}</td>
                  <td>{registro.patente}</td>
                  <td>{registro.sexo}</td>
                  <td>{registro.color}</td>
                  <td>{registro.id_raza}</td>
                  <td>{registro.siniiga}</td>
                  <td>
                    {registro.figura_herraje && (
                      <Image
                        src={registro.figura_herraje}
                        alt="Animal"
                        width={100} 
                        height={100}
                        layout="fixed"
                      />
                    )}
                  </td>

                  <td>
                    <AccionButton onClick={() => handleDeleteAnimal(index)}>
                      <MarkIcon icon={faXmark} />
                    </AccionButton>
                    {/* <AccionButton>
                      <PenIcon icon={faPen} />
                    </AccionButton> */}
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
            onClick={handleClickContinuar}
            type="button"
          />
        </ButtonsContainer>
      </TabContent>
      {/* Tab Datos del vehiculo */}
      <TabContent active={activeTab === 2}>
        <FormContainerDatosGenerales
          onSubmit={handleSubmitVehic(onSubmitVehicule)}
        >
          <span>DETALLES</span>
          <DetailsGrid>
            <CustomInput
              label="Tipo"
              name="type"
              control={controlVehic}
              fullWidth
            />
            <CustomInput
              label="Marca"
              name="brand"
              control={controlVehic}
              fullWidth
            />
            <CustomInput
              label="Modelo"
              name="model"
              control={controlVehic}
              fullWidth
            />
            <CustomInput
              label="Placa"
              name="plate"
              control={controlVehic}
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
                  control={controlVehic}
                  onSelectionChange={handleOptionsChange}
                  fullWidth
                />
              </CheckboxContainerBoolean>
            </div>
            <CustomInput
              label="Color"
              name="trailerColor"
              control={controlVehic}
              className="halfWidth"
              fullWidth
            />
            <CustomInput
              label="Nombre del operador del vehiculo"
              name="vehicleName"
              control={controlVehic}
              className="halfWidth"
              fullWidth
            />
          </DetailsGrid>
          <ButtonsContainer>
            <CustomButton customDesign buttonText="Cancelar" />
            <CustomButton buttonText="Confirmar" type="submit" />
          </ButtonsContainer>
        </FormContainerDatosGenerales>
      </TabContent>
    </Container>
  );
};

export default Form;
