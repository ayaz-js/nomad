import styles from "./WeAreTrustedLayout.module.css";
import { WeAreTrusted } from "@/components/WeAreTrusted";
import { useTranslations } from "next-intl";
import { logos } from "./props";

export const WeAreTrustedLayout = () => {
  const t = useTranslations("we_are_trusted");

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>{t("title")}</h2>
      <WeAreTrusted logos={logos} />
    </section>
  );
};
