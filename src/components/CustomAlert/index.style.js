import styled from "@emotion/styled";

export const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  padding: 65px;
  background-color: #ffff;
  border-radius: 5px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
`;

export const Image = styled.img`
  max-width: 50px;
  align-items: center;
  justify-content: center; 
`;

export const Title = styled.h4`
    color: #2a2a2a;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    font-weight: bold;
`;

export const Text = styled.p`
  color: #2a2a2a;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: black;
    text-align: center;
`;

export const Button = styled.button`
  margin-right: 10px;
  border-radius: 5px;
  font-weight: 400;
  height: 40px;
  background-color: #4AD555; //#EA392A color rojo - #4AD555 color verde
  width: 80px;
  align-items: center;
  justify-content: center; 
  cursor: pointer;
`;