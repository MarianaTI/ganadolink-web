import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0 16px 0;
  gap: 16px;
`;

export const Finished = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #00b200;
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;
export const Active = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #f27d16;
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;
export const Disable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: rgba(90, 90, 90, 0.5);
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

export const Line = styled.div`
    width: 20px;
    height: 1px;
    background-color: black;
`;