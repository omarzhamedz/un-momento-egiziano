import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  hasLocale,
  NextIntlClientProvider,
} from "next-intl";

import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "UN MOMENTO EGIZIANO | Private Tours in Egypt",
    template: "%s | UN MOMENTO EGIZIANO",
  },
  description:
    "Discover Luxor and ancient Egypt with private tours and an Italian-speaking guide.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}