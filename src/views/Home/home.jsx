import Atropos from "atropos/react";
import NavBar from "../../components/NavBar/navBar";
import miFoto from "../../assets/images/yo.jpg";

const home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavBar />
      </div>
      <Atropos
        className="my-atropos"
        style={{ marginTop: "4em", textAlign: "center" }}
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
    </>
  );
};

export default home;
