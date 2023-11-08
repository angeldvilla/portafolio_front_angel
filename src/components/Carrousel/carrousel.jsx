import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "../Cards/Cards";

const CarrouselProjects = () => {
  const projects = useSelector((state) => state?.projects);
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {projects &&
        projects.map((project) => (
          <Cards key={project.id} projects={project} />
        ))}
    </Carousel>
  );
};

export default CarrouselProjects;
