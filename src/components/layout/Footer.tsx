import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="site-footer" id="footer-contact">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <Link href="/" className="brand footer-logo">
              <span className="brand-mark">U</span>

              <span className="brand-text">
                <strong>UN MOMENTO</strong>
                <small>EGIZIANO</small>
              </span>
            </Link>

            <p>{t("description")}</p>

            <div className="footer-socials">
              <a
                href="#footer-contact"
                aria-label="Instagram"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61593743773319"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>{t("explore")}</h3>

            <Link href="/">{t("home")}</Link>
            <Link href="#tours">{t("tours")}</Link>
            <Link href="#about">{t("about")}</Link>
          </div>

          <div className="footer-column">
            <h3>{t("contactTitle")}</h3>

            <span className="footer-location">
              <MapPin size={16} />
              {t("location")}
            </span>

            <a
              href="https://api.whatsapp.com/message/NI56GDT34NU4A1?autoload=1&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              {t("contactUs")}
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} UN MOMENTO EGIZIANO</span>
          <span>{t("rights")}</span>
        </div>

      </div>
    </footer>
  );
}