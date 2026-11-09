import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const tours = [
  {
    key: "west",
    image: "/images/west-bank.jpg",
    price: "60",
    duration: "Full experience",
  },
  {
    key: "east",
    image: "/images/east-bank.jpg",
    price: "60",
    duration: "Full experience",
  },
  {
    key: "full",
    image: "/images/full-day.jpg",
    price: "95",
    duration: "Full day",
  },
];

export default function FeaturedTours() {
  const t = useTranslations("Tours");

  return (
    <section className="tours-section section-padding" id="tours">

      <div className="container">

        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              {t("eyebrow")}
            </span>

            <h2>{t("heading")}</h2>

            <p>{t("description")}</p>
          </div>

          <span className="tour-count">
            03 EXPERIENCES
          </span>
        </div>

        <div className="tours-grid">

          {tours.map((tour, index) => (
            <article className="tour-card" key={tour.key}>

              <div
                className="tour-image"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to top,
                      rgba(15, 25, 30, 0.55),
                      transparent
                    ),
                    url('${tour.image}')
                  `,
                }}
              >
                <span className="tour-number">
                  0{index + 1}
                </span>
              </div>

              <div className="tour-card-content">

                <span className="tour-duration">
                  {t(`${tour.key}.subtitle`)}
                </span>

                <h3>{t(`${tour.key}.title`)}</h3>

                <p>{t(`${tour.key}.description`)}</p>

                <div className="tour-card-footer">

                  <div className="tour-price">
                    <small>{t("from")}</small>
                    <strong>€{tour.price}</strong>
                    <small>{t("perGroup")}</small>
                  </div>

                  <Link
                    href="#contact"
                    className="tour-link"
                    aria-label={`${t(`${tour.key}.title`)} - ${t("requestInfo")}`}
                  >
                    <ArrowUpRight size={20} />
                  </Link>

                </div>

              </div>
            </article>
          ))}

        </div>

        <p className="price-disclaimer">
          {t("priceDisclaimer")}
        </p>

      </div>
    </section>
  );
}