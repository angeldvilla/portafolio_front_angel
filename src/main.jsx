import React, { useEffect } from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "./theme/ThemeContext";
import store from "./redux/store/store.js";
import "./index.css";
import "atropos/css";
import AOS from "aos";
import "aos/dist/aos.css";

const MainComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <ThemeProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<MainComponent />);

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
); */
