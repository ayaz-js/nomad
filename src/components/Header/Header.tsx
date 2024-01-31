"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import { Logo, Menu, Close } from "@/components/ui/icons";
import { useMediaQuery } from "@/hooks/useMeadiQuery";
import { ChangeEvent, FC, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Select from "react-dropdown-select";

interface HeaderProps {
  menuItems: {
    text: string;
    link: string;
  }[];
}

interface OptionsType {
  value: string;
  label: string;
}

export const Header: FC<HeaderProps> = ({ menuItems }) => {
  const { locale } = useParams();
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 576px)");
  const [open, setOpen] = useState(false);

  const options: OptionsType[] = [
    {
      value: "kk",
      label: "Қазақша",
    },
    {
      value: "ru",
      label: "Русский",
    },
    {
      value: "en",
      label: "English",
    },
  ];

  const onChange = (selectedOptions: OptionsType[]) => {
    return selectedOptions.map((selectedOption) => {
      router.push(selectedOption.value);
    });
  };

  const changePlaceholder = () => {
    const localeKk = locale === "kk";
    const localeRu = locale === "ru";
    const localeEn = locale === "en";

    if (localeKk) return "Қазақша";

    if (localeRu) return "Русский";

    if (localeEn) return "English";
  };

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return !matches ? (
    <header className={styles.block}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className={styles.list}>
            {menuItems.map((menu) => (
              <li key={menu.text}>
                <Link href={menu.link} className={styles.link}>
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.select}>
          <Select
            style={{ borderRadius: 8 }}
            options={options}
            values={[]}
            placeholder={changePlaceholder()}
            onChange={(options) => onChange(options)}
          />
        </div>
      </div>
    </header>
  ) : (
    <header className={styles.block}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Logo />
        </Link>
        <button onClick={openMenu} className={styles.menuButton}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className={styles.container}>
          <div className={styles.mobileHeader}>
            <Link href="/">
              <Logo />
            </Link>
            <button onClick={closeMenu} className={styles.close}>
              <Close />
            </button>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {menuItems.map((menu) => (
                <li key={menu.text}>
                  <Link href={menu.link} className={styles.link}>
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.select}>
            <Select
              style={{ borderRadius: 8 }}
              options={options}
              values={[]}
              placeholder={changePlaceholder()}
              onChange={(options) => onChange(options)}
            />
          </div>
        </div>
      )}
    </header>
  );
};
