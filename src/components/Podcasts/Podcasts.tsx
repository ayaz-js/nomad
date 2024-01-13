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
      link: "",
    },
    {
      preview: "podcast-2.png",
      link: "",
    },
    {
      preview: "podcast-3.png",
      link: "",
    },
    {
      preview: "podcast-3.png",
      link: "",
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.podcasts}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={30}
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
                    <Play className={styles.play} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
