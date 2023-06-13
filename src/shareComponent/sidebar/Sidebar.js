import "../sidebar/style.scss";
export default function SideBar(props) {
  console.log('props: ', props);
  return (<div>
    <h3>Top Trending Now</h3>
    <div className="sidebar">
      {props.data.map((post) => {
        if (post.img) {
          return <>
            <div>
              <img src={post.img} alt="#" />
              <div className="title">{post.title}</div>
              <div className="author">{post.author}</div>
            </div>
          </>
        } else {
          return <>
            <div >
              <div className="title">{post.title}</div>
              <div className="author">{post.author}</div>
            </div>
          </>
        }
      }
      )}
    </div>
  </div>)
}