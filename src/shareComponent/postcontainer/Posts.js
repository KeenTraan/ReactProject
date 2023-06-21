/** @format */
import '../postcontainer/poststyle.scss'
import Recomment from '../recomment/RecommentPost'
import { RECOMMENT } from '../../constant/index'
const recommentPost = [
  { id: 1, name: 'Vinh', img: RECOMMENT.AVATA, followers: 536, start: 23, video: 120, tags: ["Express JS", "Node Js", "Javascript",] },
  { id: 2, name: 'Duong', img: RECOMMENT.AVATA, followers: 536, start: 23, video: 120, tags: ["Express JS", "Node Js", "Javascript"] },
  { id: 3, name: 'Phong', img: RECOMMENT.AVATA, followers: 536, start: 23, video: 120, tags: ["Express JS", "Node Js", "Javascript"] },
]
export default function Post(props) {
  return (
    <div style={{ width: '100%' }}>
      {props.data.map((post, index) => (
        <div className='posts' key={post.id} index={index}>
          <div className="author">
            <img src={post.avata} alt="#" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{post.author}</span>
              <span className='time'>{post.time} minutes ago</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className='post-content'>
              <div className='title'>
                {post.title}
              </div>
              <div className='content'>
                {post.content}
              </div>
            </div>
            <div>
              {post.img ? <img src={post.img} alt='#' /> : null}
            </div>
          </div>
          {index === 1 ?
            <Recomment recommentPost={recommentPost} /> : null
          }
        </div>
      ))}
    </div>
  )
}
