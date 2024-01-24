import styles from "./SliderLayout.module.css";
import { Slider } from "@/components/Slider";
import { useTranslations } from "next-intl";

interface SliderLayoutProps {
  logo?: string;
  banner?: string;
  title?: string;
  text?: string;
  list?: string[];
}

export const SliderLayout = ({}: SliderLayoutProps) => {
  const t = useTranslations("slider");

  const sliderItems: SliderLayoutProps[] = [
    {
      logo: t("naiza.logo"),
      banner: t("naiza.banner"),
      list: [
        t("naiza.list.text_1"),
        t("naiza.list.text_2"),
        t("naiza.list.text_3"),
        t("naiza.list.text_4"),
        t("naiza.list.text_5"),
      ],
    },
    {
      logo: t("nege_media.logo"),
      banner: t("nege_media.banner"),
      list: [
        t("nege_media.list.text_1"),
        t("nege_media.list.text_2"),
        t("nege_media.list.text_3"),
        t("nege_media.list.text_4"),
      ],
    },
    {
      logo: t("british_council.logo"),
      banner: t("naiza.banner"),
      list: [
        t("nege_media.list.text_1"),
        t("nege_media.list.text_2"),
        t("nege_media.list.text_3"),
        t("nege_media.list.text_4"),
      ],
    },
    {
      logo: t("daryndy_bala.logo"),
      banner: t("daryndy_bala.banner"),
      list: [
        t("daryndy_bala.list.text_1"),
        t("daryndy_bala.list.text_2"),
        t("daryndy_bala.list.text_3"),
        t("daryndy_bala.list.text_4"),
      ],
    },
    {
      banner: t("i_qobyz.banner"),
      title: t("i_qobyz.title"),
      list: [
        t("i_qobyz.list.text_1"),
        t("i_qobyz.list.text_2"),
        t("i_qobyz.list.text_3"),
        t("i_qobyz.list.text_4"),
      ],
    },
  ];

  return (
    <section className={styles.block}>
      <Slider sliderItems={sliderItems} />
    </section>
  );
};
