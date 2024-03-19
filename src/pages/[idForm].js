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

const IdForm = () => {
  const route = useRouter();
  const { idForm } = route.query;
  const [activeTab, setActiveTab] = useState(0);
  const [especies, setEspecie] = useState([]);
  const [motivos, setMotivo] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const {
    control,
    formState: { errors },
  } = useForm({});

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
    setSelectedEspecie(id);
  };

  const handleMotivoChange = (id) => {
    setSelectedMotivo(id);
  };

  useEffect(() => {
    const orderRepo = new OrderRepo();
    const getOneOrderUseCase = new GetOneOrderUseCase(orderRepo);

    const fetchOrder = async () => {
      if (idForm) {
        try {
          const response = await getOneOrderUseCase.run(idForm);
          setSelectedOrder(response.order);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchOrder();
  }, [idForm]);

  useEffect(() => {
    fetchEspecies();
    fetchMotivos();
  }, []);

  if (!selectedOrder) {
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
        <TabContent active={activeTab === 0}>
          {/* onSubmit:  onSubmit={handleSubmitGeneral((data) =>
              onSubmitDatosGenerales(data, userId)
            )} */}
          <FormContainerDatosGenerales>
            <div>
              <span>ESPECIE A MOVILIZAR</span>
              <CheckboxContainer>
                <CustomCheckboxInput
                data={especies}
                name="id_especie"
                defaultValue={selectedOrder.id_especie}
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
                  defaultValue={selectedOrder.vendedor.nombre}
                  control={control}
                  // control={controlGeneral}
                  customFormDesign
                />
                <CustomInput
                  label="Domicilio"
                  name="sellAddress"
                  defaultValue={selectedOrder.vendedor.domicilio}
                  control={control}
                  // control={controlGeneral}
                  customFormDesign
                />
                <CustomInput
                  label="Municipio"
                  name="sellState"
                  defaultValue={selectedOrder.vendedor.municipio}
                  control={control}
                  // control={controlGeneral}
                  customFormDesign
                />
              </div>
              <div className="formSection">
                <span>DATOS DEL DESTINATARIO (COMPRADOR)</span>
                <CustomInput
                  label="Nombre"
                  name="buyerName"
                  defaultValue={selectedOrder.comprador.nombre}
                  control={control}
                  // control={controlGeneral}
                  customFormDesign
                />
                <CustomInput
                  label="Domicilio"
                  name="buyerAddress"
                  defaultValue={selectedOrder.comprador.domicilio}
                  control={control}
                  // control={controlGeneral}
                  customFormDesign
                />
                <CustomInput
                  label="Municipio"
                  name="buyerState"
                  defaultValue={selectedOrder.comprador.municipio}
                  control={control}
                  // control={controlGeneral}
                  customFormDesign
                />
                <CustomInput
                  label="Rancho o predo"
                  name="buyerRanch"
                  defaultValue={selectedOrder.comprador.predio}
                  control={control}
                  // control={controlGeneral}
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
                  defaultValue={selectedOrder.id_motivo}
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
              // onClick={handleSubmit(onSubmitAnimal)}
            />
          </AddContainer>
          {/* onSubmit:  onSubmit={handleSubmit(onSubmitAnimal)} */}
          <FormContainer>
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
                {selectedOrder.ganado.map((order, index) => (
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
                      {/* onClick:  onClick={() => handleDeleteAnimal(index)} */}
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
              // onClick={handleClickContinuar}
              type="button"
            />
          </ButtonsContainer>
        </TabContent>
        {/* Tab Datos del vehiculo */}
        <TabContent active={activeTab === 2}>
          {/* onSubmit: onSubmit={handleSubmitVehic(onSubmitVehicule)} */}
          <FormContainerDatosGenerales>
            <span>DETALLES</span>
            <DetailsGrid>
              <CustomInput
                label="Tipo"
                name="type"
                defaultValue={selectedOrder.vehiculo.tipo}
                control={control}
                // control={controlVehic}
                fullWidth
              />
              <CustomInput
                label="Marca"
                name="brand"
                defaultValue={selectedOrder.vehiculo.marca}
                control={control}
                // control={controlVehic}
                fullWidth
              />
              <CustomInput
                label="Modelo"
                name="model"
                defaultValue={selectedOrder.vehiculo.modelo}
                control={control}
                // control={controlVehic}
                fullWidth
              />
              <CustomInput
                label="Placa"
                name="plate"
                defaultValue={selectedOrder.vehiculo.placa}
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
                    // control={controlVehic}
                    // onSelectionChange={handleOptionsChange}
                    fullWidth
                  />
                </CheckboxContainerBoolean>
              </div>
              <CustomInput
                label="Color"
                name="trailerColor"
                defaultValue={selectedOrder.vehiculo.color}
                control={control}
                // control={controlVehic}
                className="halfWidth"
                fullWidth
              />
              <CustomInput
                label="Nombre del operador del vehiculo"
                name="vehicleName"
                defaultValue={selectedOrder.vehiculo.nombre_operador_vehiculo}
                control={control}
                // control={controlVehic}
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
    </div>
  );
};

export default IdForm;
