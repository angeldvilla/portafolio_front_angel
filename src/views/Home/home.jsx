import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSkills, getProjects } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/navBar";
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../About/aboutMe";
import Projects from "../Projects/projects";
import SocialButtons from "../../components/FloatingBar/FloatingBar";
import Footer from "../../components/Footer/Footer";
import AnimatedBackground from "../AnimatedBackground/Animatedbackground";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div>
      <div className={style.homeContainer}>
        <AnimatedBackground />
        <NavBar />
        <div id="inicio" className={style.landingPageContainer}>
          <LandingPage />
        </div>
      </div>
      <SocialButtons />

      <section id="sobre mi">
        {/* <Projects /> */}
        <AboutMe />
      </section>
      <section id="proyectos">
        <Projects />
      </section>
      <section id="contacto">
        {/* <Projects /> */}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
