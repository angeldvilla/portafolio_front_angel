import styles from "./buttons.module.css";
import Tooltip from "@mui/material/Tooltip";

export const ButtonGitHub = () => (
  <Tooltip title="GitHub" style={{ backgroundColor: "#000000d6" }}>
    <a
      href="https://github.com/angeldvilla"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      <img
        src="https://img.icons8.com/?size=512&id=3tC9EQumUAuq&format=png"
        alt="GitHub"
      />
    </a>
  </Tooltip>
);

export const ButtonLinkedIn = () => (
  <Tooltip title="Linkedin" style={{ backgroundColor: "#0e76a8" }}>
    <a
      href="https://www.linkedin.com/in/angel-david-villa-luj%C3%A1n-396634255/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      <img
        src="https://img.icons8.com/?size=512&id=8808&format=png"
        alt="LinkedIn"
      />
    </a>
  </Tooltip>
);

export const ButtonInstagram = () => (
  <Tooltip title="Linkedin" style={{ backgroundColor: "#a100a1" }}>
    <a
      href="https://www.instagram.com/_angeldvilla_/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      <img
        src="https://img.icons8.com/?size=512&id=32309&format=png"
        alt="Instagram"
      />
    </a>
  </Tooltip>
);
