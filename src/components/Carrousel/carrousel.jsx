import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "../Cards/Cards";
import styles from "../../views/Projects/projects.module.css";

const CarrouselProjects = () => {
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
        transitionTime={1000}
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
