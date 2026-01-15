import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  height: 648px;
`;

export const GridWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

export const Welcome = styled.div`
  width: 450px;
  margin: 115px 0px 0px 80px;
  font-family: Poppins;
  & h1 {
    color: #202020;
    font-size: 40px;
    & span {
      color: #f27d16;
    }
  }
  & p {
    color: #404040;
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 64px;
`;

export const ButtonStyled = styled.button`
  border: none;
  font-family: Poppins;
  background-color: #f27d16;
  border-radius: 15px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  &:active {
    background-color: #f59e50;
    box-shadow: rgba(232, 228, 225, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }
  &:hover {
    background-color: #f48d33;
    text-decoration: none;
    transition-duration: 0.1s;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  margin-left: 8px;
`;

export const ButtonText = styled.button`
  border: none;
  background: none;
  font-family: Poppins;
  text-decoration: underline;
  color: #404040;
  cursor: pointer;
`;

export const GridImage = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
  height: 100%;
`;

export const Background = styled.div`
  margin: 0px 0px 0px 32px;
  border-radius: 200px 0 0 200px;
  filter: drop-shadow(6px 8px 8px rgba(158, 158, 158, 0.4));
  background: #ffe5c5;
  height: 420px;
  width: 90%;
  position: absolute;
  bottom: 56px;
`;

export const ImgStyled = styled.img`
  z-index: 1000;
  position: absolute;
`;

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: rgba(255, 229, 197, 0.15);
  height: 648px;
`;

export const GridContainerCharacteristics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 150px;
`;

export const GridContainerAboutUs = styled(GridContainer)`
  height: 70%;
`;

export const Title = styled.div`
  padding: 48px 0;
  & span {
    font-family: Poppins;
    font-size: 28px;
    font-weight: 500;
  }
  .color {
    color: #f27d16;
  }
`;

export const Container = styled.div`
  height: 648px;
  padding: 32px;
`;

export const WhoWeAre = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 72px 0 20px 0;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px 80px;
  height: 100%;
  & span {
    font-family: Poppins;
    font-size: 16px;
    color: #2a2a2a;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const ImgStyledAboutUs = styled.img`
  width: 370px;
  height: 240px;
  object-fit: cover;
  border-radius: 35px;
  transform: rotate(-5deg);
  border-right: 18px solid #ffe5c5;
  border-bottom: 18px solid #ffe5c5;
  filter: drop-shadow(6px 8px 8px rgba(158, 158, 158, 0.25));
`;

export const TextRight = styled(WhoWeAre)`
  padding: 0px;
  text-align: right;
  align-items: start;
  justify-content: end;
  & span {
    width: 400px;
  }
`;

export const FAQ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Poppins;
  padding: 26px;
  gap: 8px;
  .first-child {
    color: #202020;
    font-weight: 500;
    font-size: 28px;
  }
  .last-child {
    color: #5f5f5f;
    font-size: 14px;
    width: 500px;
    text-align: center;
  }
`;

export const ContainerQuestion = styled.div`
  width: 750px;
  border-radius: 15px;
  border: ${({ isSelected }) => (isSelected ? "none" : "1px solid #DFDFDF")};
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(255, 229, 197, 0.5)" : "transparent"};
  filter: ${({ isSelected }) =>
    isSelected ? "drop-shadow(6px 8px 8px rgba(158, 158, 158, 0.25))" : "none"};
  & span {
    font-family: Poppins;
  }
`;

export const CollapsibleButton = styled.button`
  border: none;
  background: none;
  color: #2a2a2a;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  cursor: pointer;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  padding-top: 16px;
`;

export const ContactContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 24px;
  border-radius: 15px;
  background-color: rgba(255, 229, 197, 0.5);
  & span {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const CopyEmail = styled.button`
  border: none;
  border-radius: 5px;
  background: rgba(255, 252, 248, 0.7);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

export const IconCopy = styled(FontAwesomeIcon)`
  font-size: 12px;
  font-weight: 600;
  color: #2a2a2a;
  margin-left: 4px;
`;
