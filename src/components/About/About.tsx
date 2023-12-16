import styles from "./About.module.css";
import { useTranslations } from "next-intl";

interface AboutProps {}

export const About = ({}: AboutProps) => {
  const t = useTranslations("services.cards");

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <h2></h2>
      </div>
    </div>
  );
};
