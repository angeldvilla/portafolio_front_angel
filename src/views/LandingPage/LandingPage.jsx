import { Link } from "react-scroll";
import Atropos from "atropos/react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import miFoto from "../../assets/images/yo.jpg";
import style from "../../components/Buttons/buttons.module.css";
import CV from "../../assets/PDF/CV Resume - Angel David Villa - Frontend Developer Jr -2023.pdf";

const LandingPage = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;

    const fileName = CV.split("/").pop();

    link.download = fileName;
    link.click();
  };

  return (
    <div style={{ marginTop: "10em", textAlign: "center" }}>
      <h1>BIENVENIDOS A MI PORTAFOLIO WEB</h1>
      <h3>MI NOMBRE ES ANGEL DAVID VILLA</h3>
      <Atropos className="my-atropos" style={{ marginTop: "3em" }}>
        <img
          src={miFoto}
          className="w-1/2 rounded-md mx-auto my-4"
          style={{ width: "150px", height: "auto", borderRadius: "50%" }}
          alt="Mi Logo"
        />
      </Atropos>
      <p style={{ marginTop: "2em", textAlign: "center" }}>
        Soy un desarrollador front-end y full-stack con 1 año de experiencia en
        Javascript, React, Redux, Node, Express, PostgreSQL y mySQL .
        Actualmente vivo en Cartago, Valle - Colombia.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="sobre mi" smooth={true} duration={800}>
          <Button
            className={style.viewMore}
            style={{
              display: "flex",
              color: "white",
              marginRight: "10px",
              justifyContent: "center",
              backgroundColor: "#811313",
              borderRadius: "10px",
            }}
          >
            Conóceme más <AssignmentIndIcon />
          </Button>
        </Link>
        <Button
          className={style.downloadCV}
          style={{
            display: "flex",
            color: "white",
            justifyContent: "center",
            backgroundColor: "#080079",
            borderRadius: "10px",
          }}
          onClick={handleDownloadCV}
        >
          Descarga mi CV <DownloadIcon />
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
