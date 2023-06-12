/** @format */

import "../home/home.scss";
import InputSearch from "../../common/inpusearch/InputSearch";
import SliderShow from "../../common/sliderShow/SliderShow";
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="hearder">
        <InputSearch />
        <div className="avata">
          <img
            className="notifycations"
            src={require("../../assets/Path_425.png")}
            onClick={handleClick}
          />
          <img
            src={require("../../assets/Avatar.png")}
            className="img-user"
            onClick={handleClick}
          />
        </div>
      </div>
      <SliderShow />
    </div>
  );
}
function handleClick() {
  console.log("click me");
}
