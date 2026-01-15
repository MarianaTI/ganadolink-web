import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFileInput = styled.input`
  width: 100%;
  padding: 5px;
  margin: 4px 0px 8px 0px;
  border: 1px dashed #a2a2a2;
  border-radius: 5px;
  &::file-selector-button {
    height: 35px;
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
    :hover {
      background-color: #e1e9f4;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 12px;
  color: #0f4ca9;
  padding-right: 8px;
`;
