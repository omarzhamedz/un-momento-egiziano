import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

export default function AboutGuide() {
  const t = useTranslations("About");

  return (
    <section className="about-section section-padding" id="about">

      <div className="container about-grid">

        <div className="about-image-wrapper">
          <div
            className="about-image"
            role="img"
            aria-label={t("imageAlt")}
          />

          <div className="about-image-label">
            <span>{t("imageLabel")}</span>
            <strong>TAHANY</strong>
          </div>
        </div>

        <div className="about-content">

          <span className="section-eyebrow">
            {t("eyebrow")}
          </span>

          <h2>{t("heading")}</h2>

          <p className="about-intro">
            {t("intro")}
          </p>

          <p>{t("description")}</p>

          <div className="about-signature">
            <span>{t("signature")}</span>
            <strong>Tahany</strong>
          </div>

          <a href="#contact" className="text-link">
            {t("button")}
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}