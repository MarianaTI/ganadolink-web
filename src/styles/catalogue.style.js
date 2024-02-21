import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 30%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: calc(100% - 30px);
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 55%;
  right: 40px;
  transform: translateY(-50%);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border-top: 2px solid #666;
  border-bottom: 2px solid #666;
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
`;

const DownloadButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  color: #000;

  &:hover {
    color: #f27d16;
  }
`;

const DownloadPdfButton = styled.button`
  background-color: #f27d16;
  color: #fff;
  border: 2px solid #f27d16;
  border-radius: 5px;
  padding: 13px 20px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #ff6600;
  }
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Line = styled.hr`
  border: 0;
  border-top: 2px solid #000;
  width: 100%;
  margin-top: -18px;
  margin-bottom: 55px;
`;

const ContinueButton = styled.button`
  background-color: #f27d16;
  color: #fff;
  border: 2px solid #ff6600; /* Borde de tono naranja más fuerte */
  border-radius: 5px;
  padding: 10px 20px; /* Un poco más pequeños */
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  font-size: 16px; /* Tamaño de texto más pequeño */
  font-family: 'Salsa', cursive; /* Fuente de letra salsa */

  &:hover {
    background-color: #ff8c40;
    border-color: #ff8c40;
  }
`;

const CancelButton = styled.button`
  background-color: #888;
  color: #fff;
  border: 2px solid #888;
  border-radius: 5px;
  padding: 10px 20px; /* Un poco más pequeños */
  margin-left: 20px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  font-size: 16px; /* Tamaño de texto más pequeño */
  font-family: 'Salsa', cursive; /* Fuente de letra salsa */

  &:hover {
    background-color: #666;
    border-color: #666;
  }
`;

export { Container, Form, Input, InputContainer, SearchIcon, DownloadButton, DownloadPdfButton, Table, Th, Td, Title, Line, ContinueButton, CancelButton };