import { useState, useEffect } from "react";
import { UseTheme } from "../../theme/ThemeContext";
import {
  ButtonEmail,
  ButtonGitHub,
  ButtonInstagram,
  ButtonLinkedIn,
} from "../Buttons/buttons";
import style from "./floatingbar.module.css";

const SocialButtons = () => {
  const { darkMode } = UseTheme();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);

      setIsAtBottom(scrollTop + windowHeight >= documentHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${style.socialButtonsContainer} ${
        isAtBottom ? style.atBottom : ""
      }`}
      style={{
        backgroundColor: darkMode ? "#2b2b2bf4" : "#ecd9d9",
      }}
    >
      <ButtonEmail />
      <ButtonGitHub darkMode={darkMode} />
      <ButtonLinkedIn />
      <ButtonInstagram />
    </div>
  );
};

export default SocialButtons;
