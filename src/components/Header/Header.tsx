"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import { Logo, Menu, Close } from "@/components/ui/icons";
import { useMediaQuery } from "@/hooks/useMeadiQuery";
import { ChangeEvent, FC, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface HeaderProps {
  menuItems: {
    text: string;
    link: string;
  }[];
}

export const Header: FC<HeaderProps> = ({ menuItems }) => {
  const { locale } = useParams();
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 576px)");
  const [open, setOpen] = useState(false);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.push(event.target.value);
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
        <select onChange={onChange} className={styles.select} value={locale}>
          <option value="kk">Қазақша</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
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
          <select onChange={onChange} className={styles.select} value={locale}>
            <option value="kk">Қазақша</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      )}
    </header>
  );
};
