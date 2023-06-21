/** @format */
import { ICONS } from '../constant/index'
import { NavLink } from "react-router-dom";
import "../components/style.scss";
const dataLink = [
  {
    id: 1,
    label: "New Feed",
    path: "/",
    icon: ICONS.ICON,
  },
  {
    id: 2,
    label: "Explore",
    path: "/explore",
    icon: ICONS.EXPLORE,
  },
  {
    id: 3,
    label: "Bookmark",
    path: "/bookmark",
    icon: ICONS.BOOKMARK,
  },
  {
    id: 4,
    label: "My Posts",
    path: "/posts",
    icon: ICONS.PENCIL,
  },
];
export default function Menu() {
  return (
    <div className="nav-bar">
      <div className="nav-header">
        <img alt="#" src={require("../assets/buncee-nom-nom-be-all-you-can-be.gif")} />
        <p className="text-header">TeamDolphins</p>
      </div>
      <div className="nav-navigate">
        {dataLink.map((link) => (
          <NavLink to={link.path} className="link" key={link.id}>
            <div className="icons">
              <img alt="#" src={link.icon} />
            </div>
            <div className="label">
              <p>{link.label}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="line"></div>
      <div style={{ marginTop: '59px' }} className="trending-tag">
        <div>Trending Tag</div>
        <div className="tag-link">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank"># JavaScript</a>
          <a href="https://nodejs.dev/en/learn/" target="blank"># Node JS</a>
          <a href="https://react.dev/" target="blank"># React JS</a>
          <a href="https://vuejs.org/" target="blank"># Vue JS</a>
        </div>
      </div>
    </div>
  );
}
