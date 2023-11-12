import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import javscriptImage from "../../assets/images/javascript.PNG";
import htmlImage from "../../assets/images/html.png";
import cssImage from "../../assets/images/css3.png";
import reactImage from "../../assets/images/react.png";
import reduxImage from "../../assets/images/redux.png";
import boostrapImage from "../../assets/images/bootstrap.png";
import tailwindImage from "../../assets/images/tailwind.png";
import materialImage from "../../assets/images/materialui.png";

const SliderComponent = () => {
  const technologies = [
    htmlImage,
    javscriptImage,
    cssImage,
    reactImage,
    reduxImage,
    boostrapImage,
    tailwindImage,
    materialImage,
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
