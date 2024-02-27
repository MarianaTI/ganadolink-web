import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 30%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: calc(100% - 30px);
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 55%;
  right: 40px;
  transform: translateY(-50%);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 10px;
  border-top: 2px solid #666;
  border-bottom: 2px solid #666;
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  color: #000;

  &:hover {
    color: #f27d16;
  }
`;

export const CancelButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  background: #fff;
  font-family: Poppins;
  color: #bababa;
  font-size: 18px;
  font-weight: 500;
  border: 2px solid #bababa; 
  padding: 10px 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  svg { 
    margin-left: 5px;
  }
  margin-top: 24px;
`;

export const DownloadPdfButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  background: #fff;
  font-family: Poppins;
  color: #bababa;
  font-size: 18px;
  font-weight: 500;
  border: 2px solid #bababa; 
  padding: 10px 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  svg { 
    margin-left: 5px;
  }
  &:hover {
    background-color: #f27d16;
    color: white;
    border-color: #f27d16;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Line = styled.hr`
  border: 0;
  border-top: 2px solid #000;
  width: 100%;
  margin-top: -18px;
  margin-bottom: 55px;
`;

