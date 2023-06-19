/** @format */
import user1 from "../../assets/userAvata/avatar-img.png";
import user2 from "../../assets/userAvata/avatar-img1.png";
import user3 from "../../assets/userAvata/avatar-img2.png";
import user4 from "../../assets/userAvata/avatar-img3.png";
import "../sliderShow/style.scss";
const userData = [
  {
    id: 1,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
    // background: "#FFA2C0"
  },
  {
    id: 2,
    name: "Unity Gaming",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user2,
    // background: "#FFA2C0"
  },
  {
    id: 3,
    name: "Daniel Brothers ",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user3,
    // background: "#FFA2C0"
  },
  {
    id: 4,
    name: "Amazing Channel ",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user4,
    // background: "#FFA2C0"
  },

  {
    id: 5,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
    // background: "#FFA2C0"
  },
];
function formatter(number) {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number
  );
}
export default function SliderShow() {
  return (
    <div className="slider-show">
      <div style={{ display: "flex" }}>
        <p>Trending Channels</p>
        <div className="slider-arow">
          <div className="arow" onClick={handlePreve}>
            <img src={require("../../assets/Path.png")} alt="#" className="first-arow" />
          </div>
          <div className="arow" onClick={handleNext}>
            <img src={require("../../assets/Path.png")} alt="#" />
          </div>
        </div>
      </div>
      <div className="user-containt">
        {userData.map((user) => (
          <div className="content" key={user.id}>
            <img alt="#" src={user.avata} className="user-avatar" />

            <div className="user-infor">
              <p className="user-text name">{user.name}</p>
              <p className="user-text title">{user.title}</p>
              <div className="footer-content">
                <div className="dot"></div>
                <p className="user-text view">{user.view} viewers</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function handleNext() {
  console.log("onclick")
}
function handlePreve() {
  console.log("onclick")

}
