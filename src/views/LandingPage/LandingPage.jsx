import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PinDropIcon from "@mui/icons-material/PinDrop";
import miFoto from "../../assets/images/yo.jpg";
import style from "../../components/Buttons/buttons.module.css";
import landingStyles from "./landingpage.module.css";
import { UseTheme } from "../../theme/ThemeContext";

const LandingPage = () => {
  const { darkMode } = UseTheme();
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1LBk_5-QqP7rxNRG6hrhojdgLnbtQJjbB/view?usp=sharing"
    );
  };

  return (
    <div className={landingStyles.landingContainer}>
      <div className={landingStyles.landingContent}>
        <h1
          style={{
            color: darkMode ? "#ffff" : "#883434",
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
          }}
          className={landingStyles.landingSubtitle}
        >
          MI NOMBRE ES ANGEL DAVID VILLA
        </h3>
        <img
          src={miFoto}
          className={landingStyles.landingPhoto}
          alt="Mi Logo"
          data-aos="zoom-in-down"
        />
        <p
          className={landingStyles.landingText}
        >
          Soy un desarrollador Front-End y Full-Stack con 1 año de experiencia
        </p>
        <p
          className={landingStyles.landingText}
        >
          en HTML5, CSS3, Javascript, React, Redux, Bootstrap, TailwindCSS, MaterialUI, Node, Express, PostgreSQL y MySQL.
        </p>
        <p
          className={landingStyles.landingLocation}
        >
          Actualmente vivo en Cartago, Valle - Colombia.{" "}
          <PinDropIcon sx={{ marginLeft: "10px" }} />
        </p>

        <div
          className={landingStyles.landingButtons}
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <Link to="sobre mi" smooth={true} duration={800}>
            <Button
              className={style.viewMore}
              style={{
                backgroundColor: "#791c00",
                marginRight: "10px",
                color: "white",
                borderRadius: "8px",
                padding: "10px 20px",
                minWidth: "120px",
                maxWidth: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Conóceme más <AssignmentIndIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Link>
          <Button
            className={style.downloadCV}
            style={{
              backgroundColor: "#144372",
              color: "white",
              borderRadius: "8px",
              padding: "10px 20px",
              minWidth: "120px",
              maxWidth: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
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
