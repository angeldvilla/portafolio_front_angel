import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../views/Certificates/certificates.module.css";
import CertificateFullStack from "../../assets/Certificados/FullStack.png";

const CarrouselCertificates = () => {
  return (
    <div className={styles.carrouselContainer}>
      <a
        href="https://certificates.soyhenry.com/new-cert?id=df4b8b085f415b28799bc07bceab7ffac409cab6c477741a841e0de9926abdc7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={true}
          showIndicators={false}
          transitionTime={2000}
          interval={8000}
        >
          <img
            src={CertificateFullStack}
            alt="Certificado Full Stack - Henry"
            className={styles.imgCarrousel}
          />
        </Carousel>
      </a>
    </div>
  );
};

export default CarrouselCertificates;
