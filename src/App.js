import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import SuikerBekkieBosImageGallery from "./components/SuikerBekkieBosImageGallery";
import SuikerBekkieWoonstel from "./components/SuikerBekkieWoonstel";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route exact path="/annieswebsite" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/annieswebsite/bosimg"
          element={<SuikerBekkieBosImageGallery />}
        />
        <Route
          path="/suikerbekkiewoonstel"
          element={<SuikerBekkieWoonstel />}
        />
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
