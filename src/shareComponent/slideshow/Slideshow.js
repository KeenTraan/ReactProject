import { Swiper, SwiperSlide } from 'swiper/react';
import user1 from "../../assets/userAvata/avatar-img.png";
import user2 from "../../assets/userAvata/avatar-img1.png";
import user3 from "../../assets/userAvata/avatar-img2.png";
import user4 from "../../assets/userAvata/avatar-img3.png";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slidershow.scss'
import { Autoplay, Pagination, Navigation } from "swiper";

const userData = [
  {
    id: 1,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
  },
  {
    id: 2,
    name: "Unity Gaming",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user2,
  },
  {
    id: 3,
    name: "Daniel Brothers ",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user3,
  },
  {
    id: 4,
    name: "Amazing Channel ",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user4,
  },

  {
    id: 5,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
  },
  {
    id: 6,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
  }, {
    id: 7,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
  }, {
    id: 8,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
  }, {
    id: 9,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
  }, {
    id: 10,
    name: "Dash UI8",
    title: "Call of Duty",
    view: formatter(28000),
    avata: user1,
  },
];
function formatter(number) {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number
  );
}
const SliderShow = () => {
  return (
    <div className='slide-container'>
      <p>Trending Channels</p>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {userData.map(user => (
          <div key={user.id}>
            <SwiperSlide className='swiper' key={user.id}>
              <img src={user.avata} alt='#' />
              <div className="user-infor" >
                <p className="user-text name" >{user.name}</p>
                <p className="user-text title">{user.title}</p>
                <div className="footer-content">
                  <div className="dot"></div>
                  <p className="user-text view">{user.view} viewers</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderShow