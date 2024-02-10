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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "@/components/CustomSelect";

const formSchema = yup.object({
  sellName: yup.string().required("El nombre del vendedor es requerido"),
  sellAddress: yup.string().required("El domicilio del vendedor es requerido"),
  sellState: yup.string().required("El municipio del vendedor es requerido"),
  buyerName: yup.string().required("El nombre del comprador es requerido"),
  buyerAddress: yup
    .string()
    .required("El domicilio del comprador es requerido"),
  buyerState: yup.string().required("El municipio del comprador es requerido"),
  buyerRanch: yup
    .string()
    .required("El rancho/predo del comprador es requerido"),
  animalPatente: yup
    .string()
    .required("La patente/factura del comprador es requerido"),
  animalColor: yup
    .string()
    .required("La patente/factura del comprador es requerido"),
  animalEarring: yup
    .string()
    .required("La patente/factura del comprador es requerido"),
  type: yup.string().required("La patente/factura del comprador es requerido"),
  brand: yup.string().required("La patente/factura del comprador es requerido"),
  model: yup.string().required("La patente/factura del comprador es requerido"),
  plate: yup.string().required("La patente/factura del comprador es requerido"),
  trailerColor: yup.string(),
  trailerPlate: yup.string(),
  vehicleName: yup
    .string()
    .required("La patente/factura del comprador es requerido"),
});

const Form = () => {
  const [files, setFiles] = useState({});

  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [selectedBoolean, setSelectedBoolean] = useState("");

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      sellName: "",
      sellAddress: "",
      sellState: "",
      buyerName: "",
      buyerAddress: "",
      buyerState: "",
      buyerRanch: "",
      animalPatente: "",
      animalColor: "",
      animalEarring: "",
      type: "",
      brand: "",
      model: "",
      plate: "",
      trailerColor: "",
      trailerPlate: "",
      vehicleName: "",
    },
    resolver: yupResolver(formSchema),
  });

  const [activeTab, setActiveTab] = useState(0);
  const [maxAllowedTab, setMaxAllowedTab] = useState(0);

  const handleTabClick = (index) => {
    if (index <= maxAllowedTab) {
      setActiveTab(index);
    }
  };

  const handleContinuarClick = async () => {
    let isValid = false;

    const fieldsToValidate = {
      0: [
        "sellName",
        "sellAddress",
        "sellState",
        "buyerName",
        "buyerAddress",
        "buyerState",
        "buyerRanch",
      ],
      1: ["animalPatente", "animalColor", "animalEarring"],
      2: ["type", "brand", "model", "plate", "vehicleName"],
    }[activeTab];

    if (fieldsToValidate) {
      isValid = await trigger(fieldsToValidate);
    }

    if (isValid && activeTab < 2) {
      const nextTab = activeTab + 1;
      setActiveTab(nextTab);
      setMaxAllowedTab(Math.max(maxAllowedTab, nextTab));
    }
  };

  const handleSpeciesChange = (speciesName) => setSelectedSpecies(speciesName);
  const handleReasonChange = (reasonName) => setSelectedReason(reasonName);
  const handleBooleanChange = (booleanName) => setSelectedBoolean(booleanName);

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <TabsContainer>
        <Tab active={activeTab === 0} onClick={() => handleTabClick(0)}>
          DATOS GENERALES
        </Tab>
        <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>
          DATOS DEL GANADO
        </Tab>
        <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>
          DATOS DEL VEHÍCULO
        </Tab>
      </TabsContainer>
      <TabContent active={activeTab === 0}>
        <FormContent>
          <span>ESPECIE A MOVILIZAR</span>
          <CheckboxContainer>
            <CustomCheckboxInput
              label="Bovino"
              name="bovino"
              control={control}
              checked={selectedSpecies === "bovino"}
              onChange={() => handleSpeciesChange("bovino")}
            />
            <CustomCheckboxInput
              label="Porcino"
              name="porcino"
              control={control}
              checked={selectedSpecies === "porcino"}
              onChange={() => handleSpeciesChange("porcino")}
            />
            <CustomCheckboxInput
              label="Aviar"
              name="aviar"
              control={control}
              checked={selectedSpecies === "aviar"}
              onChange={() => handleSpeciesChange("aviar")}
            />
            <CustomCheckboxInput
              label="Otro"
              name="other"
              control={control}
              checked={selectedSpecies === "otherSpecies"}
              onChange={() => handleSpeciesChange("otherSpecies")}
            />
          </CheckboxContainer>
        </FormContent>
        <FlexForm>
          <FormContent>
            <span>DATOS DEL REMITENTE (VENDEDOR)</span>
            <CustomInput
              label="Nombre"
              name="sellName"
              control={control}
              error={errors.sellName?.message}
              customFormDesign
            />
            <CustomInput
              label="Domicilio"
              name="sellAddress"
              control={control}
              error={errors.sellAddress?.message}
              customFormDesign
            />
            <CustomInput
              label="Municipio"
              name="sellState"
              control={control}
              error={errors.sellState?.message}
              customFormDesign
            />
          </FormContent>
          <FormContent>
            <span>DATOS DEL DESTINATARIO (COMPRADOR)</span>
            <CustomInput
              label="Nombre"
              name="buyerName"
              control={control}
              error={errors.buyerName?.message}
              customFormDesign
            />
            <CustomInput
              label="Domicilio"
              name="buyerAddress"
              control={control}
              error={errors.buyerAddress?.message}
              customFormDesign
            />
            <CustomInput
              label="Municipio"
              name="buyerState"
              control={control}
              error={errors.buyerState?.message}
              customFormDesign
            />
            <CustomInput
              label="Rancho o predo"
              name="buyerRanch"
              control={control}
              error={errors.buyerRanch?.message}
              customFormDesign
            />
          </FormContent>
        </FlexForm>
        <FormContent>
          <span>MOTIVO DE LA MOVILIZACIÓN</span>
          <CheckboxContainer>
            <CustomCheckboxInput
              label="Abasto"
              name="abasto"
              control={control}
              checked={selectedReason === "abasto"}
              onChange={() => handleReasonChange("abasto")}
            />
            <CustomCheckboxInput
              label="Reproducción"
              name="reproducción"
              control={control}
              checked={selectedReason === "reproduccion"}
              onChange={() => handleReasonChange("reproduccion")}
            />
            <CustomCheckboxInput
              label="Engorda"
              name="engorda"
              control={control}
              checked={selectedReason === "engorda"}
              onChange={() => handleReasonChange("engorda")}
            />
            <CustomCheckboxInput
              label="Compra venta"
              name="compraventa"
              control={control}
              checked={selectedReason === "compraventa"}
              onChange={() => handleReasonChange("compraventa")}
            />
            <CustomCheckboxInput
              label="Otro"
              name="other"
              control={control}
              checked={selectedReason === "otherReason"}
              onChange={() => handleReasonChange("otherReason")}
            />
          </CheckboxContainer>
        </FormContent>
        <ButtonsContainer>
          <CustomButton customDesign buttonText="Cancelar" />
          <CustomButton
            buttonText="Continuar"
            onClick={handleContinuarClick}
            type="submit"
          />
        </ButtonsContainer>
      </TabContent>
      <TabContent active={activeTab === 1}>
        <AddContainer>
          <CustomButton buttonText="Agregar" customAddDesig />
        </AddContainer>
        <FormContent>
          <span>MOVILIZACIÓN DE ANIMALES</span>
          <FormContainer>
            <CustomInput
              label="Patente o factura"
              name="animalPatente"
              control={control}
              error={errors.animalPatente?.message}
              fullWidth
            />
            <CustomSelect
              label="Sexo"
              name="animalGender"
              control={control}
              fullWidth
            />
            <CustomSelect
              label="Raza"
              name="animalRace"
              control={control}
              fullWidth
            />
            <CustomInput
              label="Color"
              name="animalColor"
              control={control}
              error={errors.animalColor?.message}
              fullWidth
            />
            <CustomInput
              label="Arete siniiga"
              name="animalEarring"
              control={control}
              error={errors.animalEarring?.message}
              fullWidth
            />
          </FormContainer>
          <ImageContainer>
            <span>Figura de herraje</span>
            <CustomImage />
          </ImageContainer>
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
              <TrStyled>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <TdContainer>
                  <AccionButton>
                    <MarkIcon icon={faXmark} />
                  </AccionButton>
                  <AccionButton>
                    <PenIcon icon={faPen} />
                  </AccionButton>
                </TdContainer>
              </TrStyled>
            </tbody>
          </TableStyled>
        </div>
        <ButtonsContainer>
          <CustomButton customDesign buttonText="Cancelar" />
          <CustomButton
            buttonText="Continuar"
            onClick={handleContinuarClick}
            type="submit"
          />
        </ButtonsContainer>
      </TabContent>
      <TabContent active={activeTab === 2}>
        <FormContent>
          <span>DETALLES</span>
          <FormDetails>
            <CustomInput
              label="Tipo"
              name="type"
              control={control}
              error={errors.type?.message}
              fullWidth
            />
            <CustomInput
              label="Marca"
              name="brand"
              control={control}
              error={errors.brand?.message}
              fullWidth
            />
            <CustomInput
              label="Modelo"
              name="model"
              control={control}
              error={errors.model?.message}
              fullWidth
            />
            <CustomInput
              label="Placa"
              name="plate"
              control={control}
              error={errors.plate?.message}
              fullWidth
            />
            <div>
              <span>Remolque</span>
              <CheckboxContainerBoolean>
                <CustomCheckboxInput
                  label="Si"
                  name="yes"
                  control={control}
                  checked={selectedBoolean === "yes"}
                  onChange={() => handleBooleanChange("yes")}
                />
                <CustomCheckboxInput
                  label="No"
                  name="no"
                  control={control}
                  checked={selectedBoolean === "no"}
                  onChange={() => handleBooleanChange("no")}
                />
              </CheckboxContainerBoolean>
            </div>
            {selectedBoolean === "yes" && (
              <>
                <CustomInput
                  label="Color"
                  name="trailerColor"
                  control={control}
                  error={errors.trailerColor?.message}
                  fullWidth
                />
                <CustomInput
                  label="Placa"
                  name="trailerPlate"
                  control={control}
                  error={errors.trailerPlate?.message}
                  fullWidth
                />
              </>
            )}
          </FormDetails>
          <FormName>
            <CustomInput
              label="Nombre del operador del vehiculo"
              name="vehicleName"
              control={control}
              error={errors.vehicleName?.message}
              fullWidth
            />
          </FormName>
          <ButtonsContainer>
            <CustomButton customDesign buttonText="Cancelar" />
            <CustomButton
              buttonText="Guardar"
              onClick={handleContinuarClick}
              type="submit"
            />
          </ButtonsContainer>
        </FormContent>
      </TabContent>
    </Container>
  );
};

export default Form;
