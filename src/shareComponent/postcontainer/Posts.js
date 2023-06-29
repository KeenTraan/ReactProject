/** @format */
import '../postcontainer/poststyle.scss'
import Recomment from '../recomment/RecommentPost'
import { RECOMMENT, TAG } from '../../constant/index'
import TrendingTag from '../trendingTag/TrendingTag'
const recommentPost = [
  { id: 1, name: 'Vinh', img: RECOMMENT.AVATA, followers: 536, start: 23, video: 120, tags: ["Express JS", "Node Js", "Javascript",] },
  { id: 2, name: 'Duong', img: RECOMMENT.AVATA, followers: 536, start: 23, video: 120, tags: ["Express JS", "Node Js", "Javascript"] },
  { id: 3, name: 'Phong', img: RECOMMENT.AVATA, followers: 536, start: 23, video: 120, tags: ["Express JS", "Node Js", "Javascript"] },
]
const trendingtag = [
  { id: 1, title: "JavaScript", logo: TAG.LOGO, article: 2800, },
  { id: 2, title: "JavaScript", logo: TAG.LOGO, article: 2800, },
  { id: 3, title: "JavaScript", logo: TAG.LOGO, articletitle: 2800, },
]
export default function Post(props) {

  function calculatorTime(data) {
    const currentTime = new Date();
    const specifieTime = new Date(data.updatedAt);
    const minutes = Math.floor((currentTime - specifieTime) / (1000 * 60));
    if (minutes > 60) {
      const hours = Math.floor(minutes / 60);
      const showHours = `${hours} hours ago`
      return showHours;
    }
    if (minutes < 60) {
      const showMinutes = `${minutes} minutes ago`
      return showMinutes;
    }
    if (minutes > 1440) {
      const targetDate = new Date(currentTime.getTime() + minutes * 60000);
      const showDate = `${targetDate} days ago`
      console.log('showDate: ', showDate);
      return showDate;
    }
  }

  return (
    <div style={{ width: '100%' }}>
      {props.data.map((post, index) => (
        <div className='posts' key={post.id} >
          <div className="author">
            <img src={post.avatar} alt="#" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='author'>{post.author}Tran Manh Phong</span>
              <span className='time'>{calculatorTime(post)}</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className='post-content'>
              <div className='title'>
                {post.title}
              </div>
              <div className='content'>
                {post.content}
              </div>
              <div style={{ display: "flex", gap: "11px" }}>
                {post.tags.map(tag => (
                  <span className='hash-tag'>{tag.name}</span>
                ))}
              </div>
            </div>
            <div>
              {post.files.length ? <img className='post-image' src={post.files[0]} alt='#' /> : null}
            </div>
          </div>
          {index === 1 ?
            <Recomment recommentPost={recommentPost} /> : null
          }
          {index === 3 ? <TrendingTag data={trendingtag} /> : null}
        </div>
      ))}
    </div>
  )
}
