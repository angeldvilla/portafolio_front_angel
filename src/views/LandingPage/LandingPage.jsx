import { Link } from "react-scroll";
import Atropos from "atropos/react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PinDropIcon from "@mui/icons-material/PinDrop";
import miFoto from "../../assets/images/yo.jpg";
import style from "../../components/Buttons/buttons.module.css";
import landingStyles from "./landingpage.module.css";
import { UseTheme } from "../../theme/ThemeContext";
/* import CV from "../../assets/PDF/CV Resume - Angel David Villa - Frontend Developer Jr -2023.pdf"; */

const LandingPage = () => {
  const { darkMode } = UseTheme();
  const handleDownloadCV = () => {
    //Ver en drive
    window.open(
      "https://drive.google.com/file/d/1LBk_5-QqP7rxNRG6hrhojdgLnbtQJjbB/view?usp=sharing"
    );

    //Descargar en local
    /* const link = document.createElement("a");
    link.href = CV;

    const fileName = CV.split("/").pop();

    link.download = fileName;
    link.click(); */
  };

  return (
    <div>
      <div style={{ marginTop: "6em", textAlign: "center" }}>
        <Atropos
          className="my-atropos"
          shadow={false}
          style={{
            marginBottom: "2.5em",
          }}
        >
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              color: darkMode ? "#ffff" : "#883434",
              justifyContent: "center",
              fontSize: 40,
            }}
            className={landingStyles.landingTitle}
          >
            BIENVENIDOS A MI PORTAFOLIO WEB{" "}
            <BusinessCenterIcon sx={{ fontSize: 50, marginLeft: "5px" }} />
          </h1>
          <h3
            style={{
              color: darkMode ? "#ffff" : "#883434",
              fontFamily: "fantasy",
            }}
            className={landingStyles.landingTitle}
          >
            MI NOMBRE ES ANGEL DAVID VILLA
          </h3>
          <img
            src={miFoto}
            style={{
              width: "165px",
              height: "auto",
              borderRadius: "50%",
            }}
            className={landingStyles.landingPhoto}
            alt="Mi Logo"
            data-aos="zoom-in-down"
          />
        </Atropos>
        <p
          style={{ textAlign: "center", fontSize: 17.5, fontFamily: "cursive" }}
          className={landingStyles.landingSlide}
        >
          Soy un desarrollador Front-End y Full-Stack con 1 año de experiencia
        </p>
        <p
          style={{ textAlign: "center", fontSize: 17.5, fontFamily: "cursive" }}
          className={landingStyles.landingSlide}
        >
          en Javascript, React, Redux, Node, Express, PostgreSQL y mySQL .
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "cursive",
            fontSize: 17.5,
          }}
          className={landingStyles.landingSlide3}
        >
          Actualmente vivo en Cartago, Valle - Colombia.{" "}
          <PinDropIcon sx={{ marginLeft: "10px" }} />
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3em",
            marginBottom: "10em",
          }}
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <Link to="sobre mi" smooth={true} duration={800}>
            <Button
              className={style.viewMore}
              style={{
                display: "flex",
                backgroundColor: /* "#811313" */ "#791c00",
                marginRight: "10px",
                color: "white",
                borderRadius: "8px",
                padding: "10px 20px",
                minwidth: "120px",
                maxWidth: "200px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontFamily: "cursive",
              }}
            >
              Conóceme más <AssignmentIndIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Link>
          <Button
            className={style.downloadCV}
            style={{
              display: "flex",
              backgroundColor: "#001E3C",
              color: "white",
              borderRadius: "8px",
              padding: "10px 20px",
              minwidth: "120px",
              maxWidth: "200px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "cursive",
            }}
            onClick={handleDownloadCV}
          >
            Descarga mi CV <DownloadIcon sx={{ marginLeft: "8px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
