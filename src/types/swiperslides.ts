export interface Slide {
  url: string;
  alt?: string;
}

export interface SwiperSlideProps {
  slides: Slide[];
}
