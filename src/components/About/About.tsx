import styles from "./About.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["900"], subsets: ["latin"] });

interface AboutProps {}

export const About = ({}: AboutProps) => {
  const t = useTranslations("about");

  const listItems = [
    {
      text: t("list.item_1"),
    },
    {
      text: t("list.item_2"),
    },
    {
      text: t("list.item_3"),
    },
    {
      text: t("list.item_4"),
    },
    {
      text: t("list.item_5"),
    },
    {
      text: t("list.item_6"),
    },
    {
      text: t("list.item_7"),
    },
    {
      text: t("list.item_8"),
    },
    {
      text: t("list.item_9"),
    },
    {
      text: t("list.item_10"),
    },
    {
      text: t("list.item_11"),
    },
    {
      text: t("list.item_12"),
    },
  ];

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="225"
            height="226"
            viewBox="0 0 225 226"
            fill="none"
            className={styles.circle_1}
          >
            <circle cx="112.503" cy="113.443" r="112.5" fill="#C224BC" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="178"
            height="179"
            viewBox="0 0 178 179"
            fill="none"
            className={styles.circle_2}
          >
            <circle cx="89.0029" cy="89.9427" r="89" fill="#3369F2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="179"
            height="179"
            viewBox="0 0 179 179"
            fill="none"
            className={styles.circle_3}
          >
            <circle
              cx="89.461"
              cy="89.5182"
              r="89"
              transform="rotate(-120 89.461 89.5182)"
              fill="#3369F2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="226"
            height="226"
            viewBox="0 0 226 226"
            fill="none"
            className={styles.circle_4}
          >
            <circle
              cx="113.178"
              cy="112.574"
              r="112.5"
              transform="rotate(-120 113.178 112.574)"
              fill="#C224BC"
            />
          </svg>
          <picture>
            <source srcSet="/images/portrait.png" media="(min-width: 786px)" />
            <source
              srcSet="/images/portrait-mobile.png"
              media="(max-width: 785px)"
            />
            <Image
              src="/images/portrait.png"
              width={1000}
              height={856}
              alt={t("name")}
              className={styles.portrait}
            />
          </picture>
        </div>
        <div className={styles.textContainer}>
          <p className={`${styles.subtitle} ${inter.className}`}>
            {t("hello")}
          </p>
          <h2 className={styles.name}>{t("name")}</h2>
          <Link
            className={styles.link}
            href="https://instagram.com/zarina_qayratqyzy"
          >
            @zarina_qayratqyzy
          </Link>
          <p className={styles.text}>{t("text_1")}</p>
          <p className={styles.text}>{t("text_2")}</p>
          <p className={styles.listTitle}>{t("skill")}</p>
          <ul className={styles.list}>
            {listItems.map((item) => (
              <li key={item.text} className={styles.listItems}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
