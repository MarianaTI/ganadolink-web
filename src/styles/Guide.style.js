import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const responsive = {
  ch: "400px",
  md: "768px",
  lg: "1440px",
  xl: "1920px",
};

export const Container = styled.div`
  background-color: #FFF6EE;
  padding: 40px 188px;
  @media (max-width: ${responsive.md}) {
    padding: 40px 40px;
  }
  @media (max-width: ${responsive.ch}) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

export const Description = styled.span`
  color: rgba(90, 90, 90, 0.8);
  font-size: 14px;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 32px 0;
  padding: 32px 124px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  @media (max-width: ${responsive.md}) {
    padding: 10px 40px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  margin: 40px 0;
  & div {
    width: 5px;
    height: 25px;
    background-color: #f27d16;
  }
  & span {
    font-size: 20px;
    font-weight: 500;
    color: #434242;
  }
`;

export const SectionName = styled.span`
  color: #434242;
  font-size: 20px;
  font-weight: 500;
  margin: 16px 0;
`;

export const CheckboxContainer = styled.div`
  gap: 72px;
  display: flex;
  margin: 8px 0 32px 0;
  @media (max-width: ${responsive.ch}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 180px;
  @media (max-width: ${responsive.md}) {
    gap: 32px;
  }
  @media (max-width: ${responsive.ch}) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 40px 0;
`;

export const AddButton = styled.button`
  height: 40px;
  border-radius: 15px;
  border: none;
  background-color: #dbe4f2;
  padding: 8px 16px;
  color: #0f4ca9;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  &:hover:after {
    animation: ripple_401 1s ease-out;
  }
  @keyframes ripple_401 {
    0% {
      width: 5px;
      height: 5px;
      opacity: 1;
    }
    100% {
      width: 200px;
      height: 200px;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 12px;
  color: #0f4ca9;
  padding-right: 8px;
`;

export const TableStyled = styled.table`
  width: 100%;
  margin: 64px 0px;
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;
  border-radius: 10px;
  overflow-x: auto; 
  overflow-y: hidden; 
  @media (max-width: 390px) {
    display: block; 
    max-width: 100%;
    overflow-x: auto; /* Activa el scroll horizontal */
    white-space: nowrap;
  }
  thead {
    background-color: #f4ece1;
  }
  th {
    border-bottom: 16px solid #fff;
  }
  th,
  td {
    color: #434343;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 10px;
  }
  tbody {
    background-color: #f4ece1;
    tr:last-child td {
      border-bottom: none;
    }
  }
  ::after {
    content: "";
    display: block;
    height: 1.5em;
    width: 100%;
    background: white;
  }
  td {
    vertical-align: middle;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #0f4ca9;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const SubmitButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 32px;
  margin-top: 64px;
`;

export const TooltipContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  margin: 8px 0;
`;

export const IconTooltip = styled(Icon)`
  font-size: 20px;
  cursor: pointer;
`;

// export const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 180px;
// `;