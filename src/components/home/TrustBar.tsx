import { useTranslations } from "next-intl";
import {
  CarFront,
  Ticket,
  Languages,
  UserRound,
} from "lucide-react";

const services = [
  { key: "privateCar", icon: CarFront },
  { key: "tickets", icon: Ticket },
  { key: "italianGuide", icon: Languages },
  { key: "personalized", icon: UserRound },
] as const;

export default function TrustBar() {
  const t = useTranslations("Trust");

  return (
    <section className="trust-section">
      <div className="container trust-grid">

        {services.map(({ key, icon: Icon }) => (
          <div className="trust-item" key={key}>
            <div className="trust-icon">
              <Icon size={24} strokeWidth={1.5} />
            </div>

            <div>
              <h3>{t(`${key}.title`)}</h3>
              <p>{t(`${key}.description`)}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}