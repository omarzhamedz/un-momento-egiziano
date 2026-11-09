"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="language-switcher">
      <Link
        href={pathname}
        locale="it"
        className={locale === "it" ? "active" : ""}
      >
        IT
      </Link>

      <span className="language-divider">/</span>

      <Link
        href={pathname}
        locale="en"
        className={locale === "en" ? "active" : ""}
      >
        EN
      </Link>
    </div>
  );
}