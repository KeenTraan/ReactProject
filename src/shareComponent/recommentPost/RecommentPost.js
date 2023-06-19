import "../recommentPost/recommentpost.scss";
export default function RecommentPost(props) {
  <div>
    {props.recommentPost.map(item => {
      return (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      )
    }
    )}
  </div>
}