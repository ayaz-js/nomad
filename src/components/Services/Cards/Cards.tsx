import styles from "./Cards.module.css";
import { useTranslations } from "next-intl";

interface CardsProps {}

export const Cards = ({}: CardsProps) => {
  const t = useTranslations("services.cards");

  const cards = [
    {
      title: t("card_1.title"),
      text: t("card_1.text"),
    },
    {
      title: t("card_2.title"),
      text: t("card_2.text"),
    },
    {
      title: t("card_3.title"),
      text: t("card_3.text"),
    },
    {
      title: t("card_4.title"),
      text: t("card_4.text"),
    },
    {
      title: t("card_5.title"),
      text: t("card_5.text"),
    },
    {
      title: t("card_6.title"),
      text: t("card_6.text"),
    },
  ];

  return (
    <div className={styles.block}>
      {cards.map((card) => (
        <article key={card.title} className={styles.card}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
