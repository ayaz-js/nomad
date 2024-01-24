import styles from "./ContactUs.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

interface ContactUsProps {}

export const ContactUs = ({}: ContactUsProps) => {
  const t = useTranslations("contact_us");

  return (
    <section className={styles.block}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.links}>
          <Link href="https://t.me/zarina_qairat">
            <Image src="/images/telegram.png" width={76} height={76} alt="" />
          </Link>
          <Link href="https://wa.me/+77029410056">
            <Image src="/images/watsapp.png" width={76} height={76} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};
