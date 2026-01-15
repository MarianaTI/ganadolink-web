import styled from "@emotion/styled";

export const AlertContainer = styled.div`
  width: 90%; 
  max-width: 600px; 
  height: 55px;
  padding: 1px;
  background-color: ${(props) => (props.bcStyled ? "#EA392A" : "#3B9742")};
  border-radius: 5px; 
  display: flex;
  align-items: center;
  z-index: 1000;
  position: fixed; 
  bottom: 40px; 
  right: 50px; 
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
  max-width: 40px;
  align-items: center;
  justify-content: center;
  padding-left: 15px; 
`;

export const Title = styled.h4`
    color: #2a2a2a;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    font-weight: bold;
    padding-left: 15px;
`;

export const Text = styled.p`
  color: #2a2a2a;
    font-size: 18px;
    font-weight: 400;
    color: black;
`;

export const Button = styled.button`
  margin-left: 145px;
  border: 5px ;
  font-weight: 400;
  height: 30px;
  font-weight: bold;
  background-color: #0000;
  width: 80px;
  transition: background-color 0.3s ease;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  cursor: pointer;
`;