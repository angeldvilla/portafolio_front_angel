import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSkills, getProjects } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/navBar";
import LandingPage from "../LandingPage/LandingPage";
/* import AboutMe from "../About/aboutMe"; */
import Projects from "../Projects/projects";
import SocialButtons from "../../components/FloatingBar/FloatingBar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    dispatch(getProjects());
  }, [dispatch]);

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
        <div id="inicio">
          <LandingPage />
        </div>
      </div>

      <div id="sobre mi">
        <Projects />
        {/* <AboutMe /> */}
      </div>
      <div id="proyectos">
        <Projects />
      </div>
      <div id="contacto">
        <Projects />
      </div>
      <SocialButtons />
    </>
  );
};

export default Home;
