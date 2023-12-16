import styles from "./Lead.module.css";
import { useTranslations } from "next-intl";

interface LeadProps {}

export const Lead = ({}: LeadProps) => {
  const t = useTranslations("lead");

  return (
    <section className={styles.block}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
      </div>
      <div className={styles.textContainer}>
        <p className={`${styles.marqueeRight} ${styles.text_1}`}>
          PR Digital <span style={{ color: "#d3464f" }}>Marketing</span>{" "}
          Communication Strategy Event Branding Disign WebStudio Production
          Podcasting SMM Videoshooting Photoshooting
        </p>
        <p className={`${styles.marqueeLeft} ${styles.text_2}`}>
          <span style={{ color: "#3369f2" }}>PR</span> Digital Marketing
          Communication Strategy Event Branding Disign WebStudio Production
          Podcasting SMM Videoshooting Photoshooting
        </p>
        <p className={`${styles.marqueeLeft} ${styles.text_2}`}>
          Disign WebStudio Production Podcasting SMM{" "}
          <span style={{ color: "#dedc02", textTransform: "uppercase" }}>
            qazaqşa
          </span>{" "}
          Photoshooting
        </p>
        <p className={`${styles.marqueeRight} ${styles.text_3}`}>
          PR Digital Marketing Communication Strategy Event Branding{" "}
          <span style={{ color: "#c224bc" }}>Disign</span> WebStudio Production
          Podcasting SMM Videoshooting Photoshooting
        </p>
      </div>
    </section>
  );
};
