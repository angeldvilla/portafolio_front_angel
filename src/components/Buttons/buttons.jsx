import styles from "./buttons.module.css";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import Email from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const ButtonEmail = () => {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=escarlata.2003@gmail.com"
    );
  };

  return (
    <Tooltip
      title="Correo"
      style={{
        backgroundColor: "#e8b11ac0",
        color: "white",
        /* background: "linear-gradient(90deg, #1a73e8c0, #ff0000a0, #f0d8009d, #2f940090b7)" */
      }}
      arrow
      placement="right"
    >
      <IconButton
        onClick={handleEmailClick}
        target="_blank"
        color="inherit"
        className={styles.button}
      >
        <Email />
      </IconButton>
    </Tooltip>
  );
};

export const ButtonGitHub = ({ darkMode }) => (
  <Tooltip
    title="GitHub"
    style={{ backgroundColor: darkMode ? "#4078c0" : "#969696d3", color: "white" }}
    arrow
    placement="right"
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
);

export const ButtonLinkedIn = () => (
  <Tooltip
    title="Linkedin"
    style={{ backgroundColor: "#0e76a8", color: "white" }}
    arrow
    placement="right"
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
);

export const ButtonInstagram = () => (
  <Tooltip
    title="Instagram"
    style={{ backgroundColor: "#a100a1", color: "white" }}
    arrow
    placement="right"
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
);
