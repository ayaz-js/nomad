"use client";
import styles from "./WeAreTrusted.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { breakpoints } from "./props";

interface WeAreTrustedProps {
  logos?: {
    src?: string;
    link?: string;
  }[];
}

export const WeAreTrusted = ({ logos }: WeAreTrustedProps) => {
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          breakpoints={breakpoints}
        >
          {logos?.map((logo) => (
            <SwiperSlide key={logo.src} className={styles.slide}>
              <Link
                href={logo.link || ""}
                target="_blank"
                className={styles.link}
              >
                <Image
                  src={`/images/${logo.src}`}
                  width={130}
                  height={130}
                  alt=""
                  className={styles.image}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
