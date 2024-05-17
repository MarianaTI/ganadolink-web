import GetAllEspecieRepo from "@/application/usecases/especieUseCase/GetAllEspecieCase";
import GetAllMotivoRepo from "@/application/usecases/motivoUseCase/GetAllMotivoRepo";
import CreateOrderUseCase from "@/application/usecases/orderUseCase/CreateOrderUseCase";
import GetAllRazaCase from "@/application/usecases/razaUseCase/GetAllRazaCase";
import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import CustomInput from "@/components/CustomInput";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import CustomSelect from "@/components/CustomSelect";
import Order from "@/domain/entities/order";
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
  SectionName,
  Subtitle,
  TableStyled,
  Title,
} from "@/styles/Guide.style";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const NewForm = () => {
  const userId = useSelector((state) => state.user._id);
  const [especies, setEspecie] = useState([]);
  const [motivos, setMotivo] = useState([]);
  const [razas, setRaza] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});

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

  const onSubmit = async (data) => {
    const orderData = {
      vendedor: {
        nombre: data["seller-name"],
        domicilio: data["seller-address"],
        municipio: data["seller-town"],
      },
      comprador: {
        nombre: data["buyer-name"],
        domicilio: data["buyer-address"],
        municipio: data["buyer-town"],
        predio: data["buyer-farm"],
      },
      ganado: [
        {
          patente: data["animal-patent"],
          color: data["animal-color"],
          siniiga: data["animal-earring"],
        },
      ],
      vehiculo: {
        tipo: data["transport-type"],
        marca: data["transport-brand"],
        modelo: data["transport-model"],
        placa: data["transport-plate"],
        color: data["transport-color"],
        nombre_operador_vehiculo: data["transport-operator-name"],
      },
    };

    const order = new Order(
      null,
      null,
      null,
      userId,
      orderData.vendedor,
      orderData.comprador,
      orderData.ganado,
      orderData.vehiculo
    );
    const orderRepo = new OrderRepo();
    const createOrderUseCase = new CreateOrderUseCase(orderRepo);
    try {
      const createdOrder = await createOrderUseCase.run(order);
      console.log("Orden creada:", createdOrder);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  const handleInputChange = (field, value) => {
    setDatosModificados((prevState) => ({
      ...prevState,
      [field]: value,
    }));
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
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    fetchEspecies();
    fetchMotivos();
    fetchRaza();
  }, []);

  return (
    <Container>
      <Title>Comienza con el formulario</Title>
      <Description>
        {" "}
        Agradecemos tu colaboración para completar el formulario con información
        precisa y completa. Esto nos permitirá procesar tu solicitud de manera
        eficiente.
      </Description>
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
            //   onSelectionChange={handleEspecieChange}
          />
        </CheckboxContainer>
        <GridContainer>
          <div>
            <SectionName>Datos del remitente (vendedor)</SectionName>
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("vendedor.nombre", e.target.value)
              }
              name="seller-name"
              label="Nombre"
              fullWidth
            />
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("vendedor.domicilio", e.target.value)
              }
              name="seller-address"
              label="Domicilio"
              fullWidth
            />
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("vendedor.municipio", e.target.value)
              }
              name="seller-town"
              label="Municipio"
              fullWidth
            />
          </div>
          <div>
            <SectionName>Datos del destinario (comprador)</SectionName>
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("comprador.nombre", e.target.value)
              }
              name="buyer-name"
              label="Nombre"
              fullWidth
            />
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("comprador.domicilio", e.target.value)
              }
              name="buyer-address"
              label="Domicilio"
              fullWidth
            />
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("comprador.municipio", e.target.value)
              }
              name="buyer-town"
              label="Municipio"
              fullWidth
            />
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("comprador.predio", e.target.value)
              }
              name="buyer-farm"
              label="Rancho o predo"
              fullWidth
            />
          </div>
        </GridContainer>
        <SectionName>Motivo de la movilización</SectionName>
        <CheckboxContainer>
          <CustomCheckboxInput
            data={motivos}
            name="id_motivo"
            //   onSelectionChange={handleMotivoChange}
          />
        </CheckboxContainer>
        <Subtitle>
          <div />
          <span>DATOS DEL GANADO</span>
        </Subtitle>
        <SectionName>Movilizacion de animales</SectionName>
        <ButtonContainer>
          <AddButton>
            <Icon icon={faCirclePlus} />
            Agregar
          </AddButton>
        </ButtonContainer>
        <GridContainer>
          <div>
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("ganado.patente", e.target.value)
              }
              name="animal-patent"
              label="Patente o factura"
              fullWidth
            />
            <CustomSelect
              label="Raza"
              name="id_raza"
              control={control}
              data={razas}
              fullWidth
            />
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("ganado.siniiga", e.target.value)
              }
              name="animal-earring"
              label="Arete siiniga"
              fullWidth
            />
          </div>
          <div>
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
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("ganado.color", e.target.value)
              }
              name="animal-color"
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
            <tr>
              <td>1</td>
              <td>SED34DF4RF</td>
              <td>Femenino</td>
              <td>Hereford</td>
              <td>Rojo</td>
              <td>WD3RF41</td>
              <td>
                <Image
                  src="/img/aboutus.jpg"
                  alt="Animal"
                  width={100}
                  height={100}
                  layout="fixed"
                  style={{objectFit: "cover", borderRadius: "15px"}}
                />
              </td>
              <td>
                <DeleteButton>Eliminar</DeleteButton>
              </td>
            </tr>
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
              onChange={(e) =>
                handleInputChange("vehiculo.tipo", e.target.value)
              }
              name="transport-type"
              label="Tipo"
              fullWidth
            />
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("vehiculo.modelo", e.target.value)
              }
              name="transport-model"
              label="Modelo"
              fullWidth
            />
          </div>
          <div>
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("vehiculo.marca", e.target.value)
              }
              name="transport-brand"
              label="Marca"
              fullWidth
            />

            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("vehiculo.placa", e.target.value)
              }
              name="transport-plate"
              label="Placa"
              fullWidth
            />
          </div>
        </GridContainer>
        <GridContainer>
          <div>
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange("vehiculo.color", e.target.value)
              }
              name="transport-color"
              label="Color"
              fullWidth
            />
          </div>
          <div>
            <CustomInput
              control={control}
              onChange={(e) =>
                handleInputChange(
                  "vehiculo.nombre_operador_vehiculo",
                  e.target.value
                )
              }
              name="transport-operator-name"
              label="Nombre del operador"
              fullWidth
            />
          </div>
        </GridContainer>

        <CustomButton type="submit" buttonText="Aceptar" />
      </Form>
    </Container>
  );
};

export default NewForm;
