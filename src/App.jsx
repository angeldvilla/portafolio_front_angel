import "./App.css";
import { Routes, Route } from "react-router-dom";

/* components */
import Home from "./views/Home/home";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/> } />
      </Routes>
  );
};

export default App;
