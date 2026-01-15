import styled from "@emotion/styled";

export const ParallaxBackground = styled.section`
  position: relative;
  height: 650px;
  overflow: hidden;
  ${({ imageUrl }) => `background: #fff url(${imageUrl}) fixed no-repeat 50% 50%;`}
  background-size: cover;
`;

export const ParallaxContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
  color: white;
  z-index: 1;
 .title{
    font-size: 50px;
    color: white;
    font-weight: 500;
    font-family: "Bitter", serif;
  }
  @media (max-width: 450px) {
    width: auto;
  }
`;