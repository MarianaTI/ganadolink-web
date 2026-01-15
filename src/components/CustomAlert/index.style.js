
import styled from "@emotion/styled";

export const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;
  height: 300px;
  max-width: 350px;
  overflow-y: auto;
  top: 50%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, -50%);
  background-color: #f4f4f4;
  box-shadow: 24;
  padding: 24px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  & h1 {
    color: #2a2a2a;
    font-size: 18px;
    font-weight: 500;
    margin-top: 24px;
  }
  & span {
    color: #414141;
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding: 24px;
  }
`;

export const Image = styled.img`
  max-width: 90px;
  max-height: 80px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
color: #414141;
text-align: center;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;