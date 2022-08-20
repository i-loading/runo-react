import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Autoplay, Parallax, Pagination, Mousewheel } from "swiper";

import s from "../../components/header/Header.module.scss";
import "swiper/css";
import "swiper/css/pagination";

import bgOne from "../../assets/img/bg-one.png";
import bgTwo from "../../assets/img/bg-three.png";
import bgThree from "../../assets/img/bg-four.png";
const lastPosts = [
  {
    id: Math.random().toString(),
    title: "Richird Norton photorealistic rendering as real photos",
    date: "08.08.2021",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data",
    category: "Adventure",
    image: bgOne,
  },
  {
    id: Math.random().toString(),
    title: "Richird Norton photorealistic rendering as real photos",
    date: "08.08.2021",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data",
    category: "Travel",
    image: bgTwo,
  },
  {
    id: Math.random().toString(),
    title: "Richird Norton photorealistic rendering as real photos",
    date: "08.08.2021",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data",
    category: "Fashion",
    image: bgThree,
  },
];

const Slider = () => {
  return (
    <section
      className={`${s.slider} wow animate__animated animate__fadeInDown`}
    >
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        parallax={true}
        lazy={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Lazy, Autoplay, Parallax, Pagination, Mousewheel]}
        className="mySwiper"
      >
        {lastPosts.map((post) => (
          <SwiperSlide
            key={post.id}
            style={{
              background: `url(${post.image}) no-repeat center center / cover`,
            }}
            className="swiper-lazy swiper-lazy-preloader"
          >
            <div className={`${s.slide} container`}>
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              <div className={s.date} data-swiper-parallax="-100">
                <span>{post.date}</span>
                <div className={s.line}></div>
                <p>{post.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
