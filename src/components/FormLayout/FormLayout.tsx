import styles from "./FormLayout.module.css";
import { useTranslations } from "next-intl";
import { Form } from "@/components/Form";

interface FormLayoutProps {}

export const FormLayout = ({}: FormLayoutProps) => {
  const t = useTranslations("form");
  return (
    <section className={styles.block}>
      <Form
        title={t("title")}
        fullName={t("full_name")}
        company={t("company")}
        email={t("email")}
        phone={t("phone")}
        submitButton={t("submit")}
      />
    </section>
  );
};
