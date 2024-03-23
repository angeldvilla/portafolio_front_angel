// AnimatedBackground.jsx
import { UseTheme } from "../../theme/ThemeContext";
import styles from "./animatedBackground.module.css";

const AnimatedBackground = () => {
  const { darkMode } = UseTheme();
  return (
    <div className={`${darkMode ? styles.areaDark : styles.area}`}>
      <ul className={`${darkMode ? styles.circlesDark : styles.circles}`}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default AnimatedBackground;
