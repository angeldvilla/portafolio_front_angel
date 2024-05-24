import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "../Cards/Cards";
import styles from "../../views/Projects/projects.module.css";
import { UseTheme } from "../../theme/ThemeContext";

const CarrouselProjects = () => {
  const { darkMode } = UseTheme();
  const projects = useSelector((state) => state?.projects);
  return (
    <div className={styles.carrouselContainer}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showIndicators={false}
        transitionTime={2000}
        interval={8000}
      >
        {projects &&
          projects.map((project) => (
            <div key={project.id} className={styles.cardContainer}>
              <Cards key={project.id} projects={project} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CarrouselProjects;
