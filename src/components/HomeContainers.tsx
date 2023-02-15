// import { secondaryColor } from "../main";
import styled from "styled-components";
import config from "./Config";
const secondaryColor = config["secondaryColor"];
const primaryColor = config["primaryColor"];

const ClickableImgDiv = styled.div`
  height: 15vh;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  outline: 2px solid ${secondaryColor};

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  // mostly for scale operation
  transition: all 400ms ease;
`;

const BannerContainer = styled.div`
  outline: 2px solid ${secondaryColor};
  margin: 8px 10px;
  padding: 8px 16px;
  border-radius: 4px;
  min-width: 20%;
  background: ${primaryColor};
`;

function AcademicItem({
  text,
  animationDelayMS,
  transformation,
}: {
  text: string;
  animationDelayMS: number;
  transformation: string;
}) {
  return (
    <BannerContainer
      style={{
        transform: transformation,
        transition: `all ${animationDelayMS}ms ease-in-out`,
      }}
    >
      <h3>{text}</h3>
    </BannerContainer>
  );
}

function ProfessionalExpBox({
  title,
  imageRef,
  animationDelayMS,
  transformation,
}: {
  title: string;
  imageRef: any;
  animationDelayMS: number;
  transformation: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5vh",
        transform: transformation,
        transition: `transform ${animationDelayMS}ms ease-in-out, opacity 0.05s ease-in-out`,
      }}
    >
      <ClickableImgDiv>
        <img
          src={imageRef}
          style={{
            position: "absolute",
            width: "100%",
            aspectRatio: 1,
            objectFit: "cover",
            opacity: 0.75,
          }}
        />
      </ClickableImgDiv>
      <small style={{ textAlign: "center" }}>{title}</small>
    </div>
  );
}

export { ProfessionalExpBox, AcademicItem };
