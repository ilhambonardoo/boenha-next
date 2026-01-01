import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperSlideProps } from "../../types";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const SwiperSlider: React.FC<SwiperSlideProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full max-w-4xl h-96"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
