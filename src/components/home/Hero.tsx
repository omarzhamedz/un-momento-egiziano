import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero">

      <div className="hero-overlay" />

      <div className="hero-content container">

        <div className="hero-eyebrow">
          <MapPin size={15} />
          <span>{t("location")}</span>
        </div>

        <h1>
          {t("title")}
          <span>{t("highlight")}</span>
        </h1>

        <p className="hero-description">
          {t("description")}
        </p>

        <div className="hero-buttons">
          <Link href="#tours" className="button-primary">
            {t("primaryButton")}
            <ArrowUpRight size={18} />
          </Link>

          <Link href="#about" className="button-secondary">
            {t("secondaryButton")}
          </Link>
        </div>

        <div className="hero-bottom">
          <span>{t("bottomText")}</span>

          <a href="#tours" aria-label="Explore tours">
            <ArrowDown size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}