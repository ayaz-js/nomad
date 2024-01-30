interface IPodcasts {
  preview?: string;
  link?: string;
}

export const podcastsItems: IPodcasts[] = [
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
  {
    preview: "podcast-5.png",
    link: "https://www.youtube.com/watch?v=MdmmplR2GLs&ab_channel=7010PODCAST",
  },
];

export const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  425: {
    slidesPerView: 1,
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
};
