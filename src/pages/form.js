import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import {
    ButtonsContainer,
  CheckboxContainer,
  Container,
  FlexForm,
  FormContent,
  Tab,
  TabContent,
  TabsContainer,
} from "@/styles/Form.style";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
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

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleContinuarClick = () => {
    // Cambiar a la siguiente pestaña al hacer clic en "Continuar"
    if (activeTab < 2) {
      setActiveTab(activeTab + 1);
    }
  };

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
            />
            <CustomCheckboxInput
              label="Porcino"
              name="porcino"
              control={control}
            />
            <CustomCheckboxInput label="Aviar" name="aviar" control={control} />
            <CustomCheckboxInput label="Otro" name="other" control={control} />
          </CheckboxContainer>
        </FormContent>
        <FlexForm>
          <FormContent>
            <span>DATOS DEL REMITENTE (VENDEDOR)</span>
            <CustomInput label="Nombre" name="sellName" control={control} />
            <CustomInput
              label="Domicilio"
              name="sellAddress"
              control={control}
            />
            <CustomInput label="Municipio" name="sellState" control={control} />
          </FormContent>
          <FormContent>
            <span>DATOS DEL DESTINATARIO (COMPRADOR)</span>
            <CustomInput label="Nombre" name="buyerName" control={control} />
            <CustomInput
              label="Domicilio"
              name="buyerAddress"
              control={control}
            />
            <CustomInput
              label="Municipio"
              name="buyerState"
              control={control}
            />
            <CustomInput
              label="Rancho o predo"
              name="buyerRanch"
              control={control}
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
            />
            <CustomCheckboxInput
              label="Reproducción"
              name="reproducción"
              control={control}
            />
            <CustomCheckboxInput label="Engorda" name="engorda" control={control} />
            <CustomCheckboxInput label="Compra venta" name="compraventa" control={control} />
            <CustomCheckboxInput label="Otro" name="other" control={control} />
          </CheckboxContainer>
        </FormContent>
        <ButtonsContainer>
            <CustomButton customDesign buttonText="Cancelar"/>
            <CustomButton  buttonText="Continuar" onClick={handleContinuarClick} type="submit"/>
        </ButtonsContainer>
      </TabContent>
      <TabContent active={activeTab === 1}>
        <div>
            <CustomButton buttonText="Agregar"/>
        </div>
        <ButtonsContainer>
            <CustomButton customDesign buttonText="Cancelar"/>
            <CustomButton  buttonText="Continuar" onClick={handleContinuarClick} type="submit"/>
        </ButtonsContainer>
      </TabContent>
      <TabContent active={activeTab === 2}>
        Contenido de la pestaña 3
        <ButtonsContainer>
            <CustomButton customDesign buttonText="Cancelar"/>
            <CustomButton  buttonText="Aceptar" type="submit"/>
        </ButtonsContainer>
      </TabContent>
    </Container>
  );
};

export default Form;
