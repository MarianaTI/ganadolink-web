import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  border-radius: 5px;
  border: 1px solid #000;
  width: 200px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 150px;
`;
