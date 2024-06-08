import CarrouselCertificates from "../../components/CertificatesCarrousel/certificatesCarrousel";
import { UseTheme } from "../../theme/ThemeContext";
import styles from "./certificates.module.css";

const Certificates = () => {
  const { darkMode } = UseTheme();
  return (
    <div
      className={`${
        darkMode
          ? styles.certificatesContainerDark
          : styles.certificatesContainer
      }`}
    >
      <div className={styles.titlesContainer}>
        <div className={styles.textColumn}>
          <div className={styles.sectionHeader} data-aos="zoom-in-up">
            <h2 className={styles.titleCertificated}>CERTIFICADOS</h2>
          </div>
          <div className={styles.textContent} data-aos="zoom-in-down">
            <CarrouselCertificates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
