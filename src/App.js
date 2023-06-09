/** @format */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Explore from "./components/Explore";
import SideBar from "./common/SideBar";
function App() {
  return (
    <>
      <div style={{ display: "flex"}}>
        <div style={{ marginRight: '20px' }}>
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
