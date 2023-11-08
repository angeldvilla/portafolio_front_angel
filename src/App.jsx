import { Routes, Route } from "react-router-dom";

/* components */
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
