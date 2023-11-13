import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import javscriptimage from "../../assets/images/javascript.png";
import htmlimage from "../../assets/images/html.png";
import cssimage from "../../assets/images/css3.png";
import reactimage from "../../assets/images/react.png";
import reduximage from "../../assets/images/redux.png";
import boostrapimage from "../../assets/images/bootstrap.png";
import tailwindimage from "../../assets/images/tailwind.png";
import materialimage from "../../assets/images/materialui.png";

const SliderComponent = () => {
  const technologies = [
    htmlimage,
    javscriptimage,
    cssimage,
    reactimage,
    reduximage,
    boostrapimage,
    tailwindimage,
    materialimage,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
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
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
