import { Header } from "@/components/Header";
import { useTranslations } from "next-intl";

interface HeaderLayoutProps {}

interface NavMenuProps {
  text: string;
  link: string;
}

export const HeaderLayout = ({}: HeaderLayoutProps) => {
  const t = useTranslations("menu");

  const menuItems: NavMenuProps[] = [
    {
      text: t("founder"),
      link: "",
    },
    {
      text: t("our_cases"),
      link: "",
    },
    {
      text: t("partners"),
      link: "",
    },
    {
      text: t("contact_us"),
      link: "",
    },
  ];
  return <Header menuItems={menuItems} />;
};
