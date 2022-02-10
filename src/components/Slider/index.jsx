// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Slider = ({ children }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      loop
      pagination={{ clickable: true }}
    >
      {children?.map((item) => (
        <SwiperSlide>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
