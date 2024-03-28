import styled from "@emotion/styled";

export const ParallaxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  & h1 {
    position: relative;
    float: left;
    color: #2a2a2a;
    font-size: 40px;
    font-family: "Bitter", serif;
    font-weight: 500;
  }
  & h1 span {
    position: absolute;
    right: 0;
    width: 0;
    background: white;
    border-left: 1px solid #000;
    animation: escribir 10s steps(39) alternate infinite;
  }
  @keyframes escribir {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  height: 500px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridText = styled.div`
  height: 400px;
  margin-left: 56px;
  background-color: #857363;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px 0 0 25px;
  & span {
    width: 550px;
    font-size: 18px;
    color: #fff;
  }
`;

export const GridImage = styled.div`
  height: 400px;
  margin-right: 56px;
  background-color: #857363;
  display: flex;
  justify-content: start;
  padding-top: 48px;
  border-radius: 0 25px 25px 0;
  & img {
    position: absolute;
  }
  .img1{
    width: 550px;
    height: 300px;
  }
  .img2{
    width: 400px;
    height: 300px;
    padding: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    padding-right: 48px;
    padding-bottom: 36px;
  }
`;

export const CharacteristicsStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 56px 64px 110px 64px;
`;

export const SpanStyled = styled.span`
  display: flex;
  justify-content: center;
  margin: 32px 0;
  font-weight: 600;
  font-size: 20px;
  font-family: "Bitter", serif;
`;

export const DescriptionContainer = styled.div`
  background-color: #F2EBDF;
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 32px 0;
  padding: 16px;
  color: #2a2a2a;
  .title{
    font-size: 20px;
    font-weight: 600;
    font-family: "Bitter", serif;
    padding: 16px;
  }
  .children{
    text-align: center;
    width: 900px;
  }
`;

export const VideoText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px;
  .title{
    font-size: 42px;
    font-family: "Bitter", serif;
    font-weight: 500;
    width: 400px;
    padding-bottom: 16px;
  }
  .icon{
    font-size: 56px;
    
  }
  .comment{
    font-size: 20px;
  }
`;

export const VideoContainer = styled.div`
  .video{
    width: 100%;
  }
`;