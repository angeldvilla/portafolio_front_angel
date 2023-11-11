import advl from "../../assets/images/miLogo.png";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Email from "@mui/icons-material/Email";
import ComputerIcon from "@mui/icons-material/Computer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <a href="/">
            <img src={advl} alt="Mi Logo" className={styles.logo} />
          </a>
        </div>
        <div className={styles.info}>
          <div className={styles.address}>
            <p>
              <LocationCityIcon /> Cartago, Valle del Cauca - Colombia.
            </p>
          </div>
          <div className={styles.contact}>
          <p>
              <Email /> escarlata.2003@gmail.com
            </p>
            <p>
              <LocalPhoneIcon /> +57 3015985993
            </p>
            <p>
              <ComputerIcon /> Desarrollado por Angel Villa{" "}
            </p>
          </div>
        </div>
        <div className={styles.copyright}>
        <hr style={{ borderBottom: "2px solid #333" }}/>
          <p>
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
