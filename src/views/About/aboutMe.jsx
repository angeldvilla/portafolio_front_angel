import SliderComponent from "../../components/Slider/slider";
import SliderBack from "../../components/Slider/slider2";
import styles from "./aboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.titlesContainer}>
        <div className={styles.textColumn}>
          <div className={styles.sectionHeader}>
            <h1>MIS HABILIDADES</h1>
          </div>
          <div className={styles.textContent}>
            <p>
              Soy un joven apasionado por el mundo TI, tengo un fuerte deseo de
              aprender y crecer en este campo continuamente.
            </p>
            <p>
              Como profesional, me considero una persona analítica y orientada a
              resultados. Tengo la habilidad de desglosar problemas complejos y
              encontrar soluciones efectivas. Mi enfoque metódico y detallista
              me permite entregar resultados de alta calidad que cumplen con los
              objetivos establecidos.
            </p>
            <p>
              Además de mi habilidad para trabajar de manera independiente,
              valoro enormemente el trabajo en equipo. Soy responsable,
              empático, solidario, respetuoso y siempre me esfuerzo por fomentar
              estas cualidades en los grupos de trabajo en los que participo.
            </p>
            <p>
              En cuanto a mis objetivos, estoy comprometido con la creación de
              experiencias de usuario atractivas y funcionales. Me esfuerzo por
              desarrollar soluciones que sean no sólo técnicamente sólidas, sino
              también intuitivas y agradables para el usuario.
            </p>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.sectionHeader}>
            <h1>FRONT-END</h1>
          </div>
          <SliderComponent />
          <div className={styles.sectionHeader}>
            <h1>BACK-END</h1>
          </div>
          <SliderBack />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
