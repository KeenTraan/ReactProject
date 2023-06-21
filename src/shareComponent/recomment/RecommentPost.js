import "./recommentstyle.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
export default function RecommentPost(props) {
  return (
    <div className="layout">
      <span className="recomment-title">Recommended for you</span>
      <div className="recomment-container">
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          slidesPerView={2}
          modules={[Pagination]}
          className="my-swiper"
        >
          {props.recommentPost.map(item => (
            <SwiperSlide className='recomment-swiper' key={item.id} >
              <div className="recomment-content">
                <div className="recomment-avata">
                  <img src={item.img} alt="#" />
                </div>
                <div className="recomment-infro">
                  <div className="information">
                    <span className="name">{item.name}</span>
                  </div>
                  <div className="information">
                    <span className="follower">{item.followers}</span>
                    <span className="video">{item.video}</span>
                  </div>
                  <div className="recomment-tag">
                    {item.tags.map((tag, index) => (
                      <div className="tags" key={index}>
                        <label>{tag}</label>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: "center", marginTop: '15px' }}>
                    <button className="btn" onClick={() => handleFollow(item.id)}>Follow</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >
  )
}
function handleFollow(id) {
  console.log(id)
}