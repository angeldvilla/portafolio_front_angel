import CarrouselProjects from "../../components/Carrousel/carrousel";

const Projects = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20em",
          marginBottom: "2.5em",
        }}
      >
        <h1>Mis Proyectos</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.2em",
          marginBottom: "12em",
        }}
      >
        <CarrouselProjects />
      </div>
    </>
  );
};

export default Projects;
