/** @format */
import explore from "../assets/Discovery.png";
import icon from "../assets/icon.png";
import bookmark from "../assets/Vector.png";
import pencil from "../assets/PencilSimpleLine.png";
import { NavLink } from "react-router-dom";
import "./styles/sidebar.scss";
const dataLink = [
  {
    id: 1,
    label: "New Feed",
    path: "/",
    icon: icon,
  },
  {
    id: 2,
    label: "Explore",
    path: "/explore",
    icon: explore,
  },
  {
    id: 3,
    label: "Bookmark",
    path: "/bookmark",
    icon: bookmark,
  },
  {
    id: 4,
    label: "My Posts",
    path: "/posts",
    icon: pencil,
  },
];
export default function SideBar() {
  return (
    <div className="nav-bar">
      <div className="nav-header">
        <img src={require("../assets/dolphin1.png")} />
        <p className="text-header">TeamDolphins</p>
      </div>
      <div className="nav-navigate">
        {dataLink.map((link) => (
          <NavLink to={link.path} className="link" key={link.id}>
            <img src={link.icon} />
            <p>{link.label}</p>
          </NavLink>
        ))}
      </div>
      <div className="line"></div>
    </div>
  );
}
