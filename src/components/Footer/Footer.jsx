import advl from "../../assets/images/miLogo.png";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Email from "@mui/icons-material/Email";
import ComputerIcon from "@mui/icons-material/Computer";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import styles from "./footer.module.css";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { UseTheme } from "../../theme/ThemeContext";

export default function Footer() {
  const { darkMode } = UseTheme();
  return (
    <footer className={`${darkMode ? styles.footerDark : styles.footer}`}>
      <div className={styles.container}>
        <div>
          <a href="/">
            <img src={advl} alt="Mi Logo" className={styles.logo} />
          </a>
        </div>
        <div className={styles.info}>
          <div className={styles.address}>
            <p style={{ fontWeight: 100 }}>
              <LocationCityIcon /> Cartago, Valle del Cauca - Colombia.
            </p>
          </div>
          <div className={styles.contact}>
            <p style={{ fontWeight: 100 }}>
              <Email /> escarlata.2003@gmail.com
            </p>
            <p style={{ fontWeight: 100 }}>
              <PhoneAndroid /> +57 3015985993
            </p>
            <p style={{ fontWeight: 100 }}>
              <ComputerIcon /> Desarrollado por Angel Villa{" "}
            </p>
          </div>
          <div className={styles.social}>
            {/* <ButtonGitHub /> */}
            <Tooltip
              title="GitHub"
              style={{
                backgroundColor: darkMode ? "#4078c0" : "#969696d3",
                color: "white",
              }}
              arrow
              placement="bottom"
            >
              <IconButton
                href="https://github.com/angeldvilla"
                target="_blank"
                color="inherit"
                className={styles.button}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Linkedin"
              style={{ backgroundColor: "#0e76a8", color: "white" }}
              arrow
              placement="bottom"
            >
              <IconButton
                href="https://www.linkedin.com/in/angel-david-villa-luj%C3%A1n-396634255/"
                target="_blank"
                color="inherit"
                className={styles.button}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Instagram"
              style={{ backgroundColor: "#a100a1", color: "white" }}
              arrow
              placement="bottom"
            >
              <IconButton
                href="https://www.instagram.com/_angeldvilla_/"
                target="_blank"
                color="inherit"
                className={styles.button}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className={styles.copyright}>
          <hr style={{ borderBottom: "2px solid #333" }} />
          <p style={{ fontFamily: "cursive", fontWeight: 100 }}>
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
