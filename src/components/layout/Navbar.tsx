
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container">

        {/* Brand */}
        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">U</span>

          <span className="brand-text">
            <strong>UN MOMENTO</strong>
            <small>EGIZIANO</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-navigation">
          <Link href="/">
            {t("home")}
          </Link>

          <a href="#tours">
            {t("tours")}
          </a>

          <a href="#about">
            {t("about")}
          </a>

          <a href="#footer-contact">
            {t("contact")}
          </a>
        </div>

        {/* Navbar Actions */}
        <div className="navbar-actions">
          <LanguageSwitcher />

          {/* Book Now Button */}
          <a
            href="#footer-contact"
            className="nav-cta"
          >
            <MessageCircle size={16} />
            <span>{t("book")}</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-navigation">

          <Link href="/" onClick={closeMenu}>
            {t("home")}
          </Link>

          <a href="#tours" onClick={closeMenu}>
            {t("tours")}
          </a>

          <a href="#about" onClick={closeMenu}>
            {t("about")}
          </a>

          <a href="#footer-contact" onClick={closeMenu}>
            {t("contact")}
          </a>

          {/* Mobile Book Now */}
          <a
            href="#footer-contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            <MessageCircle size={16} />
            <span>{t("book")}</span>
            <ArrowUpRight size={15} />
          </a>

          <div className="mobile-language">
            <LanguageSwitcher />
          </div>

        </div>
      )}
    </header>
  );
}
