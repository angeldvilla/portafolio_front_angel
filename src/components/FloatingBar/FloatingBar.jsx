import { useState, useEffect } from "react";
import {
  ButtonEmail,
  ButtonGitHub,
  ButtonInstagram,
  ButtonLinkedIn,
} from "../Buttons/buttons";

const SocialButtons = () => {
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
      style={{
        position: "absolute",
        zIndex: 1,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "18px",
        backgroundColor: isAtBottom ? "transparent" : "#2b2b2bf4",
        transition: "background-color 0.3s ease-in-out",
        borderRadius: "8px",
      }}
    >
      <ButtonEmail placement="right"/>
      <ButtonGitHub />
      <ButtonLinkedIn />
      <ButtonInstagram />
    </div>
  );
};

export default SocialButtons;
