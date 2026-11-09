import { useTranslations } from "next-intl";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function BookingCTA() {
  const t = useTranslations("Booking");

  return (
    <section className="booking-section" id="contact">

      <div className="container booking-content">

        <span className="section-eyebrow">
          {t("eyebrow")}
        </span>

        <h2>{t("heading")}</h2>

        <p>{t("description")}</p>

        <a
          href="https://api.whatsapp.com/message/NI56GDT34NU4A1?autoload=1&app_absent=0"
          className="button-primary"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          {t("button")}
          <ArrowUpRight size={18} />
        </a>

        <span className="booking-note">
          {t("note")}
        </span>

      </div>
    </section>
  );
}