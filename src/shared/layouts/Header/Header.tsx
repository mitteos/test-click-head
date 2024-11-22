"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";
import { useCartStore } from "@/modules/Cart/store/store";

export const Header: React.FC = () => {
  const { cart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} href="/">
          Some market
        </Link>
        <button
          className={`${styles.burgerBtn} ${isMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <Link
            className={`${styles.item} ${
              cart.length > 0 ? styles.hasItems : ""
            }`}
            href="/cart"
            onClick={handleLinkClick}>
            CART
          </Link>
          <Link
            className={styles.item}
            href="/profile"
            onClick={handleLinkClick}>
            PROFILE
          </Link>
        </nav>
      </div>
    </header>
  );
};
