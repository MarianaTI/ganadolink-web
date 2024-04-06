import {
  Container,
  GridContainer,
  GridForm,
  GridImage,
  Image,
} from "@/styles/Login.style";
import React from "react";

const Register = () => {
  return (
    <Container>
      <GridContainer>
        <GridForm></GridForm>
        <GridImage>
          <div style={{ position: "relative", width: "auto", height: "100%" }}>
            <Image
              src="/"
              layout="fill"
              objectFit="cover"
              alt="grid"
            />
          </div>
        </GridImage>
      </GridContainer>
    </Container>
  );
};

export default Register;
