import Atropos from "atropos/react";
import NavBar from "../../components/NavBar/navBar";
import Projects from "../Projects/projects";
import Skills from "../Skills/skills";
import miFoto from "../../assets/images/yo.jpg";

const Home = () => {
  return (
    <>
      <div id="sobre mi">
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
      <div id="proyectos">
        <Projects />
      </div>
      <div id="habilidades">
        <Skills />
      </div>
    </>
  );
};

export default Home;
