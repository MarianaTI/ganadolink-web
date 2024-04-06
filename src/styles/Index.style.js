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
  height: 600px;
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

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding-top: 8px;
`;
