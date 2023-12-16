import styles from "./Services.module.css";
import { useTranslations } from "next-intl";
import { Cards } from "@/components/Services/Cards";

interface ServicesProps {}

export const Services = ({}: ServicesProps) => {
  const t = useTranslations("services");

  return (
    <section className={styles.block}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{t("title")}</h2>
        <Cards />
      </div>
    </section>
  );
};
