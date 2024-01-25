"use client";
import styles from "./Podcasts.module.css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoints, podcastsItems } from "./props";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

interface PodcastsProps {
  title: string;
}

export const Podcasts = ({ title }: PodcastsProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.podcasts}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={breakpoints}
        >
          {podcastsItems.map((podcast) => (
            <SwiperSlide key={podcast.preview}>
              <div className={styles.podcast}>
                <Link href={podcast.link || ""}>
                  <Image
                    src={`/images/${podcast.preview}`}
                    width={330}
                    height={185}
                    alt=""
                    className={styles.image}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
