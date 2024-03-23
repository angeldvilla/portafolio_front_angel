import { Link } from "react-scroll";
import Atropos from "atropos/react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PinDropIcon from "@mui/icons-material/PinDrop";
import miFoto from "../../assets/images/yo.jpg";
import style from "../../components/Buttons/buttons.module.css";
import { UseTheme } from "../../theme/ThemeContext";
/* import CV from "../../assets/PDF/CV Resume - Angel David Villa - Frontend Developer Jr -2023.pdf"; */

const LandingPage = () => {
  const { darkMode } = UseTheme();
  const handleDownloadCV = () => {
    //Ver en drive
    window.open(
      "https://drive.google.com/file/d/1QNzFKAGN9vE_NW7OjvSaUf5B9DUAv4wc/view?usp=sharing"
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
      <div style={{ marginTop: "8em", textAlign: "center" }}>
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
              justifyContent: "center",
              color: darkMode ? "#ffff" : "#883434",
            }}
          >
            BIENVENIDOS A MI PORTAFOLIO WEB{" "}
            <BusinessCenterIcon sx={{ fontSize: 50, marginLeft: "5px" }} />
          </h1>
          <h3
            style={{
              color: darkMode ? "#ffff" : "#883434",
            }}
          >
            MI NOMBRE ES ANGEL DAVID VILLA
          </h3>
          <img
            src={miFoto}
            style={{
              width: "150px",
              height: "auto",
              borderRadius: "50%",
            }}
            alt="Mi Logo"
          />
        </Atropos>
        <p style={{ textAlign: "center" }}>
          Soy un desarrollador Front-End y Full-Stack con 1 año de experiencia
        </p>
        <p style={{ textAlign: "center" }}>
          en Javascript, React, Redux, Node, Express, PostgreSQL y mySQL .
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
