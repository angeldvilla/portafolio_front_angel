/* import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSkills, getProjects } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/navBar";
import AboutMe from "../About/aboutMe";
import Projects from "../Projects/projects";

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
      </div>

      <div id="sobre mi">
        <Projects />
        <AboutMe />
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

export default Home; */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
import { getSkills, getProjects } from "../../redux/actions/actions";
import Button from "@mui/material/Button";
import Atropos from "atropos/react";
import miFoto from "../../assets/images/yo.jpg";
/* import AboutMe from "../About/aboutMe"; */
import Projects from "../Projects/projects";
import {
  ButtonGitHub,
  ButtonInstagram,
  ButtonLinkedIn,
} from "../../components/Buttons/buttons";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CodeIcon from "@mui/icons-material/Code";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import styleButton from "../../components/Buttons/buttons.module.css";
import styles from "./home.module.css";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <>
      <div>
        {/* Contenido principal */}
        <div className={styles.content}>
          <Atropos
            className="my-atropos"
            style={{ marginTop: "3em", textAlign: "center" }}
          >
            <h1>BIENVENIDOS A MI PORTAFOLIO WEB</h1>
            <h3>SOY DESARROLLADOR FRONT-END & FULL STACK</h3>
            <img
              src={miFoto}
              className="w-1/2 rounded-md mx-auto my-4"
              style={{ width: "150px", height: "auto", borderRadius: "50%" }}
              alt="Mi Logo"
            />
          </Atropos>
          <p style={{ textAlign: "center" }}>
            Soy un desarrollador front-end y full-stack con 1 año de experiencia
            en Javascript, React, Redux, Node, Express, PostgreSQL y mySQL .
            Actualmente vivo en Cartago, Valle - Colombia.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
            }}
          >
            <ButtonGitHub />
            <ButtonLinkedIn />
            <ButtonInstagram />
          </div>
          <div id="sobre mi">
            <Projects />
            {/*   <AboutMe /> */}
          </div>
          <div id="proyectos">
            <Projects />
          </div>
          <div id="contacto">
            <Projects />
          </div>
        </div>

        {/* Barra lateral */}
        <div className={styles.sidebar}>
          <ul>
            <li>
              <Link
                to="sobre mi"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  style={{
                    my: 2,
                    color: "white",
                    display: "block",
                    gap: "10px",
                    backgroundColor: "#141518f4",
                  }}
                  className={styleButton.buttonsNav}
                >
                  Sobre Mi <PersonPinIcon />
                </Button>
              </Link>
            </li>

            <li>
              <Link
                to="proyectos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    gap: "10px",
                    backgroundColor: "#141518f4",
                  }}
                  className={styleButton.buttonsNav}
                >
                  Proyectos <CodeIcon />
                </Button>
              </Link>
            </li>

            <li>
              <Link
                to="contacto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    gap: "10px",
                    backgroundColor: "#141518f4",
                  }}
                  className={styleButton.buttonsNav}
                >
                  Contacto <MarkEmailReadIcon />
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
