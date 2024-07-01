import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import nodejsImage from "../../assets/images/nodo.png";
import phpImage from "../../assets/images/PHP.png";
import expressImage from "../../assets/images/exp.png";
import expressDark from "../../assets/images/Expressjs.png";
import mysqlImage from "../../assets/images/msql.png";
import postgreImage from "../../assets/images/postsql.png";
import { UseTheme } from "../../theme/ThemeContext";
import { Tooltip } from "@mui/material";

const SliderBack = () => {
  const { darkMode } = UseTheme();
  const technologies = [
    { image: nodejsImage, name: "NodeJS" },
    { image: phpImage, name: "PHP" },
    { image: darkMode ? expressDark : expressImage, name: "Express" },
    { image: mysqlImage, name: "MySQL" },
    { image: postgreImage, name: "PostgreSQL" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className={styles.sliderContainerB} data-aos="fade-right">
      <Slider {...settings}>
        {technologies.map((technology, index) => (
          <div key={index}>
            <Tooltip title={technology?.name}>
              <img
                src={technology?.image}
                alt={technologies[index]}
                style={{
                  width: "80%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(243, 175, 175, 0.1)",
                }}
              />
            </Tooltip>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBack;
