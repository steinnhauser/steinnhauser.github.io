import styled from "styled-components";
import "./App.css";
import useElementOnScreen from "./hooks/UseElementOnScreen";
import TopNav from "./TopNav";

// Image assets
import selfImg from "./assets/bio_img.jpg";
import FRImg from "./assets/fricon_fill.png";
import SINTEFIimg from "./assets/sintef_logo.jpg";
import UIOImg from "./assets/uio_logo.png";
import SENECImg from "./assets/senec_logo.png";

// SVG assets
import { Curves1, Curves2, Curves3, Triangle } from "./animations/SvgCurves";
import config from "./components/Config";
import { ProfessionalExpBox, AcademicItem } from "./components/HomeContainers";

const primaryColor = config["primaryColor"];
const secondaryColor = config["secondaryColor"];
// NextJS = React FE + NodeJS BE

const Body = styled.div`
  background-color: ${primaryColor};
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
`;

const MPSection = styled.div`
  display: grid;
  align-content: center;
  min-height: 100vh;
  position: relative;
`;

const SelfImage = styled.img`
  max-width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const MPFooter = styled.div`
  background: transparent;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function App() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const professionalExpMap = [
    {
      title: "Software Developer",
      imageRef: SENECImg,
    },
    {
      title: "Senior Data Scientist",
      imageRef: FRImg,
    },
    {
      title: "Junior Software Developer",
      imageRef: SINTEFIimg,
    },
    {
      title: "Cluster Engineer",
      imageRef: UIOImg,
    },
  ];
  const academicExpMap = [
    {
      text: `Publication record: Hagen, Espen, et al. "Brain signal predictions from multi-scale networks using a linearized framework." PLOS Computational Biology 18.8 (2022): e1010353.`,
    },
    {
      text: "MSc. in Computational Science: Physics. Specialization in Computational Neuroscience.",
    },
    {
      text: "BS. in Physics and Astronomy. Specialization in Mathematics, Statistics and Computer Sciences.",
    },
  ];

  const [containerRef0, isVisible0] = useElementOnScreen(options);
  const [containerRef1, isVisible1] = useElementOnScreen(options);
  const [containerRef2, isVisible2] = useElementOnScreen(options);

  return (
    <Body>
      <TopNav />
      <MPSection
        ref={containerRef0}
        className={isVisible0 ? "scroll-shown" : "scroll-hidden"}
      >
        {/* Separate div for background image overlay */}
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {isVisible0 ? (
            <Curves1 pathClassName={"draw"} strokeColor={secondaryColor} />
          ) : (
            <Curves1 pathClassName={"fade-out"} strokeColor={secondaryColor} />
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
            transition: "gap 1s ease",
          }}
          className={isVisible0 ? "flex-faded-in" : "flex-faded-out"}
        >
          <div
            style={{
              maxWidth: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SelfImage src={selfImg} alt="" />
          </div>
          <div
            style={{
              maxWidth: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>Welcome.</h1>
            <p>
              I'm Steinn - a passionate professional in data science and machine
              learning. I'm a capable software engineer and backend developer,
              and I've recently spent a lot of my free time learning frontend
              development tools like React and Typescript. This webpage
              highlights my professional experiences and academic
              accomplishments within my fields. Feel free to contact me using
              the information in the "About Me" me section.
            </p>
          </div>
        </div>
      </MPSection>

      <MPSection
        ref={containerRef1}
        style={{ position: "relative", backgroundColor: secondaryColor + "33" }} // add some opacity to end of secondary color
      >
        <Triangle color={primaryColor} />
        <div
          style={{
            minHeight: "inherit",
            display: "grid",
            alignContent: "center",
            position: "relative",
          }}
          className={isVisible1 ? "scroll-shown" : "scroll-hidden"}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {isVisible1 ? (
              <Curves2 pathClassName={"draw"} strokeColor={secondaryColor} />
            ) : (
              <Curves2
                pathClassName={"fade-out"}
                strokeColor={secondaryColor}
              />
            )}
          </div>

          <div style={{ zIndex: 2 }}>
            <h1 style={{ textAlign: "center" }}>My Professional Experience</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2vw",
              }}
            >
              {professionalExpMap.map((v, i) => (
                <ProfessionalExpBox
                  title={v.title}
                  imageRef={v.imageRef}
                  key={v.title}
                  animationDelayMS={1100 - 100 * i}
                  transformation={
                    isVisible1
                      ? "translateX(0px)"
                      : `translateX(${-14 - 2 * i}px)`
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </MPSection>

      <MPSection
        ref={containerRef2}
        style={{ position: "relative", backgroundColor: primaryColor }} // add some opacity to end of secondary color
      >
        <Triangle color={secondaryColor + "33"} />
        <div
          style={{
            minHeight: "inherit",
            display: "grid",
            alignContent: "center",
            position: "relative",
          }}
          className={isVisible2 ? "scroll-shown" : "scroll-hidden"}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {isVisible2 ? (
              <Curves3 pathClassName={"draw"} strokeColor={secondaryColor} />
            ) : (
              <Curves3
                pathClassName={"fade-out"}
                strokeColor={secondaryColor}
              />
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", minWidth: "20%" }}
            >
              <h1>
                My Academic <br /> Background
              </h1>
            </div>
            <div
              style={{
                minWidth: "20%",
                maxWidth: "30%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {academicExpMap.map((v, i) => (
                <AcademicItem
                  text={v.text}
                  key={v.text}
                  animationDelayMS={300 + 300 * i}
                  transformation={
                    isVisible2 ? "translateX(0px)" : `translateX(15px)`
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </MPSection>

      <MPFooter>
        Made using Vite+React+TS+SWC.
        <br /> Steinn Magnússon 2023.
      </MPFooter>
    </Body>
  );
}

export default App;
