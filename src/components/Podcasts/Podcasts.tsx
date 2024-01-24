"use client";
import styles from "./Podcasts.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { Play } from "@/components/ui/icons/Play";

interface PodcastsProps {
  title: string;
}

export const Podcasts = ({ title }: PodcastsProps) => {
  const t = useTranslations("podcasts");
  const podcastsItems = [
    {
      preview: "podcast-1.png",
      link: "https://www.youtube.com/watch?v=aPD017T54WY&ab_channel=7010PODCAST",
    },
    {
      preview: "podcast-2.png",
      link: "https://www.youtube.com/watch?v=vIz3jtdLkEM&ab_channel=7010PODCAST",
    },
    {
      preview: "podcast-3.png",
      link: "https://www.youtube.com/watch?v=ucGvM1NqUbY&ab_channel=7010PODCAST",
    },
    {
      preview: "podcast-4.png",
      link: "https://www.youtube.com/watch?v=ucGvM1NqUbY&ab_channel=7010PODCAST",
    },
  ];

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
          // slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            2560: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {podcastsItems.map((podcast) => (
            <SwiperSlide key={podcast.preview}>
              <div className={styles.podcast}>
                <Link href={podcast.link}>
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
