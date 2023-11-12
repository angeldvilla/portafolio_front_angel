import CarrouselProjects from "../../components/Carrousel/carrousel";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.titlesContainer}>
        <div className={styles.textColumn}>
          <div className={styles.sectionHeader}>
            <h1>MIS PROYECTOS</h1>
          </div>
          <div className={styles.textContent}>
            <p>
              Explora algunos de los proyectos en los que he tenido el placer de
              trabajar. Cada proyecto representa un desafío único y una
              oportunidad de aprendizaje, cada uno con su propio conjunto de
              desafíos y soluciones innovadoras.
            </p>
            <p>
              Estos proyectos son testimonio de mi crecimiento y evolución como
              profesional en el campo de la Tecnología de la Información. Cada
              uno de ellos ha contribuido a moldear mi comprensión y habilidades
              técnicas, y me ha permitido aplicar y expandir mis conocimientos
              de manera práctica y significativa.
            </p>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <CarrouselProjects />
        </div>
      </div>
    </div>
  );
};

export default Projects;
