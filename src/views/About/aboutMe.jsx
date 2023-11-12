import SliderComponent from "../../components/Slider/slider";
import styles from "./aboutMe.module.css"; // Asegúrate de tener tu archivo CSS module importado

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
              aprender y crecer en este campo.
            </p>
            <p>
              Soy una persona analítica, orientada a resultados, y
              sobre todo responsable, empática y solidaria en cuanto a grupos de
              trabajo.
            </p>
            <p>
              Mi objetivo es crear experiencias de usuario atractivas y
              funcionales.
            </p>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.sectionHeader}>
            <h1>TECNOLOGIAS</h1>
          </div>
          <SliderComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
