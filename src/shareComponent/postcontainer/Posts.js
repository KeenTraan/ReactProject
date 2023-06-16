/** @format */
import '../postcontainer/style.scss'
import RecommentPost from '../recommentPost/RecommentPost'
const recommentPost = [
  { id: 1, title: 'recommentPost' },
  { id: 2, title: 'recommentPost' },
  { id: 3, title: 'recommentPost' }

]
export default function Post(props) {
  return (
    <div style={{ width: '100%' }} className='test'>
      {props.data.map(post => (
        <div className='posts' key={post.id}>
          <div className="author">
            <img src={post.avata} alt="#" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{post.author}</span>
              <span className='time'>{post.time} minutes ago</span>
            </div>
          </div>
          <div className='title'>
            {post.title}
          </div>
          <div className='content'>
            {post.content}
          </div>
        </div>
      ))}
      <RecommentPost recommentPost={recommentPost} />
    </div>
  )
}
