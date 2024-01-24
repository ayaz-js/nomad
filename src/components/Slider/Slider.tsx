"use client";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

interface SliderProps {
  sliderItems?: {
    logo?: string;
    banner?: string;
    title?: string;
    text?: string;
    list?: string[];
  }[];
}

export const Slider = ({ sliderItems }: SliderProps) => {
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {sliderItems?.map((slide, index) => (
            <SwiperSlide key={index.toString()}>
              <div className={styles.slideContainer}>
                <div className={styles.textContainer}>
                  {slide.logo && (
                    <Image
                      src={`/images/${slide.logo}`}
                      width={178}
                      height={178}
                      alt=""
                      className={styles.logo}
                    />
                  )}
                  <ul className={styles.list}>
                    {slide?.list?.map((item, index) => (
                      <li key={index.toString()} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {slide.banner && (
                  <Image
                    src={`/images/${slide.banner}`}
                    width={780}
                    height={488}
                    alt=""
                    className={styles.banner}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
