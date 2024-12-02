import React from "react";
import { Active, Container, Disable, Finished, Line, Step } from "./index.style";

const SectionActive = () => {
  return (
    <Container>
      <Finished>1</Finished>
      <Step>
        <span>Paso 1</span>
        <span>Datos generales</span>
      </Step>
      <Line />
      <Active>2</Active>
      <Step>
        <span>Paso 1</span>
        <span>Datos generales</span>
      </Step>
      <Line />
      <Disable>3</Disable>
      <Step>
        <span>Paso 1</span>
        <span>Datos generales</span>
      </Step>
    </Container>
  );
};

export default SectionActive;
