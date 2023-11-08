import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSkills, getProjects } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/navBar";
import Projects from "../Projects/projects";
/* import Skills from "../Skills/skills"; */

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    dispatch(getProjects());
  }, [dispatch]);
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
      </div>
      <div id="habilidades">
        {/* <Skills /> */}
      </div>
      <div id="proyectos">
        <Projects />
      </div>
      <div id="contacto">
        <Projects />
      </div>
    </>
  );
};

export default Home;
