/** @format */

import "../home/home.scss";
import InputSearch from "../../shareComponent/inputSearch/InputSearch";
import SliderShow from "../../shareComponent/sliderShow/SliderShow";
import Post from "../../shareComponent/postcontainer/Posts";
import avata from "../../assets/Avatar.png";

const dataPost = [
  {
    id: 1,
    avata: avata,
    author: "Đặng Tuấn Phong",
    title: "Why You Should Use Node.js for Ecommerce: Pros and Cons",
    content:
      "Node.js is a JavaScript runtime environment which developers use to build scalable network applications. You can use it in various software, including ecommerce platforms.To deliver high performance …",
  },
  {
    id: 2,
    avata: avata,
    author: "Đặng Tuấn Phong",
    title: "Why You Should Use Node.js for Ecommerce: Pros and Cons",
    content:
      "Node.js is a JavaScript runtime environment which developers use to build scalable network applications. You can use it in various software, including ecommerce platforms.To deliver high performance …",
  },
  {
    id: 3,
    avata: avata,
    author: "Đặng Tuấn Phong",
    title: "Why You Should Use Node.js for Ecommerce: Pros and Cons",
    content:
      "Node.js is a JavaScript runtime environment which developers use to build scalable network applications. You can use it in various software, including ecommerce platforms.To deliver high performance …",
  }, 
]
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <div className="hearder">
        <InputSearch />
        <div className="avata">
          <img
            alt="#"
            className="notifycations"
            src={require("../../assets/Path_425.png")}
            onClick={handleClick}
          />
          <img
            alt="#"
            src={require("../../assets/Avatar.png")}
            className="img-user"
            onClick={handleClick}
          />
        </div>
      </div>
      <SliderShow />
      <div className="content">
        <Post data={dataPost} />
      </div>
    </div>
  );
}
function handleClick() {
  console.log("click me");
}
