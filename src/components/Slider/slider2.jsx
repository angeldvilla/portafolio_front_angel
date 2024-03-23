import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import nodejsImage from "../../assets/images/nodo.png";
import expressImage from "../../assets/images/exp.png";
import expressDark from "../../assets/images/Expressjs.png";
import mysqlImage from "../../assets/images/msql.png";
import postgreImage from "../../assets/images/postsql.png";
import { UseTheme } from "../../theme/ThemeContext";

const SliderBack = () => {
  const { darkMode } = UseTheme();
  const technologies = [
    nodejsImage,
    darkMode ? expressDark : expressImage,
    mysqlImage,
    postgreImage,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {technologies.map((technology, index) => (
          <div key={index}>
            <img
              src={technology}
              alt={technologies[index]}
              style={{
                width: "45%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBack;
