import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import javscriptimage from "../../assets/images/js.png";
import htmlimage from "../../assets/images/hypertext.png";
import cssimage from "../../assets/images/css3.png";
import reactimage from "../../assets/images/rct.png";
import reduximage from "../../assets/images/rdx.png";
import boostrapimage from "../../assets/images/btp.png";
import tailwindimage from "../../assets/images/twl.png";
import materialimage from "../../assets/images/mtui.png";

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
    <div className={styles.sliderContainer} data-aos="fade-left">
      <Slider {...settings}>
        {technologies.map((technology, index) => (
          <div key={index}>
            <img
              src={technology}
              alt={technologies[index]}
              className={styles.sliderImage}
              style={{
                width: "50%",
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

export default SliderComponent;
