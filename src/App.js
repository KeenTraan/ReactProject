/** @format */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home/Home";
import Explore from "./view/Explore";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Menu />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
