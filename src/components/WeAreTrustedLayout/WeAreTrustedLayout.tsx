import styles from "./WeAreTrustedLayout.module.css";
import { WeAreTrusted } from "@/components/WeAreTrusted";
import { useTranslations } from "next-intl";

interface WeAreTrustedLayoutProps {
  src?: string;
  link?: string;
}

export const WeAreTrustedLayout = ({}: WeAreTrustedLayoutProps) => {
  const t = useTranslations("we_are_trusted");

  const logos: WeAreTrustedLayoutProps[] = [
    {
      src: "naiza-logo_slider.png",
      link: "https://naiza.tv/",
    },
    {
      src: "nege-logo_slider.png",
      link: "https://nege.kz/",
    },
    {
      src: "daryndy_ana-logo.png",
      link: "https://daryndybala.kz/",
    },
    {
      src: "british_council-logo-slider.png",
      link: "https://kazakhstan.britishcouncil.org/",
    },
  ];

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>{t("title")}</h2>
      <WeAreTrusted logos={logos} />
    </section>
  );
};
