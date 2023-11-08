import Atropos from "atropos/react";
import miFoto from "../../assets/images/yo.jpg";
import {
  ButtonGitHub,
  ButtonInstagram,
  ButtonLinkedIn,
} from "../../components/Buttons/buttons";

const LandingPage = () => {
  return (
    <div>
      <Atropos
        className="my-atropos"
        style={{ marginTop: "3em", textAlign: "center" }}
      >
        <h1>BIENVENIDOS A MI PORTAFOLIO WEB</h1>
        <h3>SOY DESARROLLADOR FRONT-END & FULL STACK</h3>
        <img
          src={miFoto}
          className="w-1/2 rounded-md mx-auto my-4"
          style={{ width: "150px", height: "auto", borderRadius: "50%" }}
          alt="Mi Logo"
        />
      </Atropos>
      <p style={{ textAlign: "center" }}>Soy un desarrollador front-end y full-stack con 1 año de experiencia en Javascript, React, Redux, Node, Express, PostgreSQL y mySQL . Actualmente vivo en Cartago, Valle - Colombia.</p>
      
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2em" }}>
        <ButtonGitHub />
        <ButtonLinkedIn />
        <ButtonInstagram />

      </div>
    </div>
  );
};

export default LandingPage;
