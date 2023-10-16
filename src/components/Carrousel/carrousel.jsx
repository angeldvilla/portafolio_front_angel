import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "../Cards/Cards";
import { getProjects } from "../../redux/actions/actions";

const CarrouselProjects = () => {
  const projects = useSelector((state) => state?.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
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
