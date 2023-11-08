import Atropos from "atropos/react";
import miFoto from "../../assets/images/yo.jpg";

const LandingPage = () => {
  return (
    <div>
      <Atropos
        className="my-atropos"
        style={{ marginTop: "8em", textAlign: "center" }}
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
    </div>
  );
};

export default LandingPage;
