import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSkills, getProjects } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/navBar";
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../About/aboutMe";
import Projects from "../Projects/projects";
import Contact from "../Contact/Contact";
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
        <section id="inicio" className={style.landingPageContainer}>
          <LandingPage />
        </section>
      </div>
      <SocialButtons />

      <section id="sobre mi">
        {/* <Projects /> */}
        <AboutMe />
      </section>
      <section id="proyectos" data-aos="fade-left">
        <Projects />
      </section>
      <div className={style.homeContainer}>
        <AnimatedBackground />
        <section
          id="contacto"
          className={style.landingPageContainer}
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
