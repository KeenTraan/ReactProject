import ButtonDropDown from "../button/ButtonDropDown";
import "../sidebar/style.scss";
const dataInut = [{
  id: 1,
  time: "1 week"
},
{
  id: 2,
  time: "1 month"
},
{
  id: 3,
  time: "3 month"
},
{
  id: 4,
  time: "6 month"
}
]
export default function SideBar(props) {
  return (<div>
    <h3>Top Trending Now</h3>
    <div className="sidebar">
      <ButtonDropDown data={dataInut} />
      {props.data.map((post) => (
        <div key={post.id}>
          {post.img && <img src={post.img} alt="#" />}
          <div className="title">{post.title}</div>
          <div className="author">{post.author}</div>
        </div>
      )
      )}
    </div>
  </div >)
}