import ButtonDropDown from "../button/ButtonDropDown";
import "../sidebar/style.scss";
const dataInput = [{
  id: 1,
  time: "1 Week",
  link: "#"
},
{
  id: 2,
  time: "1 Month",
  link: "#"
},
{
  id: 3,
  time: "3 Month",
  link: "#"
},
{
  id: 4,
  time: "6 Month",
  link: "#"
}
]
export default function SideBar(props) {
  return (<div>
    <h3>Top Trending Now</h3>
    <div className="sidebar">
      <ButtonDropDown data={dataInput} />
      {props.data.map((post) => (
        <div key={post.id}>
          {post.img && <img src={post.img} alt="#" />}
          <a href={post.link} className="title">{post.title}</a>
          <div className="author">{post.author}</div>
        </div>
      )
      )}
    </div>
  </div >)
}