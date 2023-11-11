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
        }}
      >
        <h1 style={{ borderBottom: "2px solid #333", paddingBottom: "0.5em" }}>
          MIS PROYECTOS
        </h1>
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2em",
        }}
      >
         <p>
            Explora algunos de los proyectos en los que he tenido el placer de
            trabajar.
          </p>
          <p>
            Cada proyecto representa un desafío único y una oportunidad de
            aprendizaje.
          </p>
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
