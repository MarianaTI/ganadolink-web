import styled from "@emotion/styled";

export const Container = styled.div`
  background: #fff;
  width: 450px;
  height: 170px;
  filter: drop-shadow(6px 8px 8px rgba(158, 158, 158, 0.25));
  display: flex;
  justify-content: center;
  padding: 32px 32px;
  border-radius: 15px;
  gap: 16px;
`;

export const ImageStyled = styled.img`
  width: 45px;
  height: 45px;
`;

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  .title{
    color: #2a2a2a;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
  }
  .text{
    color: #555;
    font-family: Poppins;
    font-size: 14px;
  }
`;
