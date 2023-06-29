/** @format */

import "../home/home.scss";
import InputSearch from "../../shareComponent/inputSearch/InputSearch";
import SliderShow from "../../shareComponent/slideshow/Slideshow";
import Post from "../../shareComponent/postcontainer/Posts";
// import avata from "../../assets/Avatar.png";
import SideBar from "../../shareComponent/sidebar/Sidebar";
// import { POSTTOP, POST } from "../../constant/index";
import { POSTTOP } from "../../constant/index";
import { getPost } from "../../api";
import { useEffect, useState } from "react";

const postTopTrending = [
  {
    id: 1,
    img: POSTTOP.IMG,
    title: 'Why You Should Use Node.js for Ecommerce: Pros and Cons1',
    author: 'Grabriel Erickson1',
    link: "https://reactrouter.com/en/main/components/navigate"
  },
  {
    id: 2,
    title: 'Why You Should Use Node.js for Ecommerce: Pros and Cons2',
    author: 'Grabriel Erickson2',
    link: "#"
  }, {
    id: 3,
    img: POSTTOP.IMG,
    title: 'Why You Should Use Node.js for Ecommerce: Pros and Cons3',
    author: 'Grabriel Erickson3',
    link: "#"
  },
]



export default function Home() {
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    const data = await getPost()
    setPosts(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div style={{ display: "flex", flexDirection: "column", width: '80vw' }}>
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
        <Post data={posts} />
        <SideBar data={postTopTrending} />
      </div>
    </div>
  );
}
function handleClick() {
  console.log("click me");
}
