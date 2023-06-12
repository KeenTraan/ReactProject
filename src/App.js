/** @format */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home/Home";
import Explore from "./view/Explore";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <SideBar />
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
