import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import CustomInput from "@/components/CustomInput";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import {
  AccionButton,
  AddContainer,
  ButtonsContainer,
  CheckboxContainer,
  Container,
  FlexForm,
  FormContainer,
  FormContent,
  FormDetails,
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

const Form = () => {
  const [files, setFiles] = useState({});

  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => setActiveTab(index);
  const handleContinuarClick = () =>
    activeTab < 2 && setActiveTab(activeTab + 1);

  const handleSpeciesChange = (speciesName) => setSelectedSpecies(speciesName);
  const handleReasonChange = (reasonName) => setSelectedReason(reasonName);

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
              customFormDesign
            />
            <CustomInput
              label="Domicilio"
              name="sellAddress"
              control={control}
              customFormDesign
            />
            <CustomInput
              label="Municipio"
              name="sellState"
              control={control}
              customFormDesign
            />
          </FormContent>
          <FormContent>
            <span>DATOS DEL DESTINATARIO (COMPRADOR)</span>
            <CustomInput
              label="Nombre"
              name="buyerName"
              control={control}
              customFormDesign
            />
            <CustomInput
              label="Domicilio"
              name="buyerAddress"
              control={control}
              customFormDesign
            />
            <CustomInput
              label="Municipio"
              name="buyerState"
              control={control}
              customFormDesign
            />
            <CustomInput
              label="Rancho o predo"
              name="buyerRanch"
              control={control}
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
            />
            <CustomInput label="Sexo" name="animalGender" control={control} />
            <CustomInput label="Raza" name="animalRace" control={control} />
            <CustomInput label="Color" name="animalPatente" control={control} />
            <CustomInput
              label="Arete siniiga"
              name="animalEarring"
              control={control}
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
            <CustomInput label="Tipo" name="type" control={control} />
            <CustomInput label="Marca" name="brand" control={control} />
            <CustomInput label="Modelo" name="model" control={control} />
            <CustomInput label="Placa" name="plate" control={control} />
          </FormDetails>
        </FormContent>
        <ButtonsContainer>
          <CustomButton customDesign buttonText="Cancelar" />
          <CustomButton buttonText="Aceptar" type="submit" />
        </ButtonsContainer>
      </TabContent>
    </Container>
  );
};

export default Form;
