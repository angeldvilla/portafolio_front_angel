import Atropos from "atropos/react";
import NavBar from "../../components/NavBar/navBar";

const home = () => {
  return (
    <div id="app">
        <NavBar/>
      <Atropos className="my-atropos" style={{marginTop: "2em"}}>
        <h1>BIENVENIDOS!! SOY ANGEL VILLA</h1>
        <h3>DESARROLLADOR FRONT-END & FULL STACK</h3>
      </Atropos>
    </div>
  );
};

export default home;
