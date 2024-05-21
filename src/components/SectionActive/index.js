import React from "react";
import { Active, Container, Disable, Finished, Line } from "./index.style";

const SectionActive = () => {
  return (
    <Container>
      <Finished>1</Finished>
      <Line/>
      <Active>2</Active>
      <Line/>
      <Disable>3</Disable>
    </Container>
  );
};

export default SectionActive;
