import styles from "./PodcastsLayout.module.css";
import { Podcasts } from "@/components/Podcasts";
import { useTranslations } from "next-intl";

interface PodcastsLayoutProps {}

export const PodcastsLayout = ({}: PodcastsLayoutProps) => {
  const t = useTranslations("podcasts");

  return (
    <section className={styles.block}>
      <Podcasts title={t("title")} />
    </section>
  );
};
