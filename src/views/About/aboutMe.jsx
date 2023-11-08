import SliderComponent from "../../components/Slider/slider";

const AboutMe = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20em",
          marginBottom: "2.5em",
        }}
      >
        <h1>Mis Habilidades</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.2em",
          marginBottom: "12em",
        }}
      >
        <SliderComponent />
      </div>
    </>
  );
};

export default AboutMe;

