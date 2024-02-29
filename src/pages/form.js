import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import CustomInput from "@/components/CustomInput";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import {
  AccionButton,
  AddContainer,
  ButtonsContainer,
  CheckboxContainer,
  CheckboxContainerBoolean,
  Container,
  FlexForm,
  FormContainer,
  FormContent,
  FormDetails,
  FormName,
  ImageContainer,
  MarkIcon,
  PenIcon,
  Tab,
  TabContent,
  TableStyled,
  TabsContainer,
  TdContainer,
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

const Form = () => {
  const [files, setFiles] = useState({});
  const [selectedBoolean, setSelectedBoolean] = useState("");
  const [registerAnimals, setRegisterAnimals] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [especies, setEspecie] = useState([]);
  const [motivos, setMotivo] = useState([]);
  const [razas, setRaza] = useState([]);

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

  const genderOptions = [
    { _id: 'macho', name: 'macho' },
    { _id: 'hembra', name: 'hembra' }
  ];

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const onSubmitAnimal = (data) => {
    setRegisterAnimals((currentRegister) => [...currentRegister, data]);
  };

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({});

  const handleSelectionChange = (selectedIds) => {
    console.log(selectedIds);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleBooleanChange = (booleanName) => setSelectedBoolean(booleanName);

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
      <TabContent active={activeTab === 0}></TabContent>
      <TabContent active={activeTab === 1}>
        <AddContainer>
          <CustomButton
            buttonText="Agregar"
            customAddDesig
            onClick={handleSubmit(onSubmitAnimal)}
          />
        </AddContainer>
        <FormContainer onSubmit={handleSubmit(onSubmitAnimal)}>
          <CustomInput
            label="Patente o factura"
            name="animalPatente"
            control={control}
            fullWidth
          />
          <CustomSelect
            label="Sexo"
            name="animalGender"
            control={control}
            options={genderOptions}
            fullWidth
          />
          <CustomSelect
            label="Seleccionar raza"
            name="animalRaza"
            control={control}
            options={razas}
            fullWidth
          />
          <CustomInput
            label="Color"
            name="animalColor"
            control={control}
            fullWidth
          />
          <CustomInput
            label="Arete siniiga"
            name="animalEarring"
            control={control}
            fullWidth
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
                  <td>{registro.animalPatente}</td>
                  <td>{registro.animalGender}</td>
                  <td>{registro.animalColor}</td>
                  <td>{registro.animalRaza}</td>
                  <td>{registro.animalRaza}</td>
                  <td>{registro.animalEarring}</td>
                  <TdContainer>
                    <AccionButton>
                      <MarkIcon icon={faXmark} />
                    </AccionButton>
                    <AccionButton>
                      <PenIcon icon={faPen} />
                    </AccionButton>
                  </TdContainer>
                  <TdContainer></TdContainer>
                </TrStyled>
              ))}
            </tbody>
          </TableStyled>
        </div>
      </TabContent>
      <TabContent active={activeTab === 2}></TabContent>
    </Container>
  );
};

export default Form;
