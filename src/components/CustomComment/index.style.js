import styled from "@emotion/styled";
import css from "styled-jsx/css";

export const Container = styled.div`
  width: 500px;
  height: 325px;
  display: flex;
  background: rgba(255, 229, 197, 0.35);
  flex-direction: column;
  gap: 8px;
  padding: 56px;
  border-radius: 15px;
  justify-content: center;
  filter: drop-shadow(6px 8px 8px rgba(158, 158, 158, 0.5));
`;

export const Quotes = styled.span`
  font-size: 56px;
  vertical-align: middle;
  line-height: 0;
  padding-top: 16px;
`;

export const Opinion = styled.span`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  vertical-align: middle;
  line-height: 1.5;
`;

export const Dot = styled.div`
  background-color: #2a2a2a;
  height: 4px;
  width: 5px;
  border-radius: 100%;
  transition: transform 0.3s ease;
`;