
"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "next-intl";
import { MessageCircle, Send } from "lucide-react";

type Tour = "west" | "east" | "full";

export default function BookingCTA() {
  const locale = useLocale();
  const isItalian = locale === "it";

  const [name, setName] = useState("");
  const [tour, setTour] = useState<Tour>("west");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const tourNames = {
      west: isItalian ? "Riva Ovest" : "West Bank",
      east: isItalian ? "Riva Est" : "East Bank",
      full: isItalian ? "Tour completo" : "Full Day Tour",
    };

    const whatsappMessage = isItalian
      ? `Buongiorno Tahany! Vorrei richiedere informazioni e disponibilità per un tour in Egitto.

Nome: ${name}
Tour: ${tourNames[tour]}
Data preferita: ${date}
Numero di persone: ${guests}
Messaggio aggiuntivo: ${message || "Nessuno"}

Grazie!`
      : `Hello Tahany! I would like to request information and availability for a tour in Egypt.

Name: ${name}
Tour: ${tourNames[tour]}
Preferred date: ${date}
Number of guests: ${guests}
Additional message: ${message || "None"}

Thank you!`;

    const phoneNumber = "201055491553";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="booking-section" id="footer-contact">
      <div className="booking-container">
        <div className="booking-intro">
          <span className="section-eyebrow">
            {isItalian ? "INIZIA IL TUO VIAGGIO" : "START YOUR JOURNEY"}
          </span>

          <h2>
            {isItalian ? (
              <>
                Creiamo insieme
                <br />
                <em>un momento egiziano.</em>
              </>
            ) : (
              <>
                Let&apos;s create
                <br />
                <em>your Egyptian moment.</em>
              </>
            )}
          </h2>

          <p>
            {isItalian
              ? "Raccontaci del tuo viaggio. Contatta Tahany direttamente su WhatsApp per organizzare la tua esperienza privata in Egitto."
              : "Tell us about your trip. Contact Tahany directly on WhatsApp to arrange your private experience in Egypt."}
          </p>

          <div className="booking-contact-note">
            <MessageCircle size={20} />
            <span>
              {isItalian
                ? "Confermeremo la disponibilità direttamente con te."
                : "We'll confirm availability with you directly."}
            </span>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <h3>
            {isItalian ? "Richiedi il tuo tour" : "Request your tour"}
          </h3>

          <div className="booking-field">
            <label htmlFor="booking-name">
              {isItalian ? "Nome completo" : "Full name"}
            </label>
            <input
              id="booking-name"
              type="text"
              placeholder={isItalian ? "Il tuo nome" : "Your name"}
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="booking-field">
            <label htmlFor="booking-tour">
              {isItalian ? "Scegli il tour" : "Choose your tour"}
            </label>
            <select
              id="booking-tour"
              value={tour}
              onChange={(event) => setTour(event.target.value as Tour)}
            >
              <option value="west">
                {isItalian ? "Riva Ovest — da €60" : "West Bank — from €60"}
              </option>
              <option value="east">
                {isItalian ? "Riva Est — da €60" : "East Bank — from €60"}
              </option>
              <option value="full">
                {isItalian ? "Tour completo — da €95" : "Full Day — from €95"}
              </option>
            </select>
          </div>

          <div className="booking-form-row">
            <div className="booking-field">
              <label htmlFor="booking-date">
                {isItalian ? "Data preferita" : "Preferred date"}
              </label>
              <input
                id="booking-date"
                type="date"
                min={today}
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>

            <div className="booking-field">
              <label htmlFor="booking-guests">
                {isItalian ? "Numero di persone" : "Guests"}
              </label>
              <input
                id="booking-guests"
                type="number"
                min="1"
                max="50"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="booking-field">
            <label htmlFor="booking-message">
              {isItalian
                ? "Richieste aggiuntive (opzionale)"
                : "Additional requests (optional)"}
            </label>
            <textarea
              id="booking-message"
              rows={3}
              placeholder={
                isItalian
                  ? "Raccontaci qualcosa in più sul tuo viaggio..."
                  : "Tell us a little more about your trip..."
              }
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <button type="submit" className="booking-submit">
            <MessageCircle size={19} />
            {isItalian
              ? "Invia la richiesta su WhatsApp"
              : "Send booking request on WhatsApp"}
            <Send size={17} />
          </button>

          <p className="booking-disclaimer">
            {isItalian
              ? "La richiesta non costituisce una prenotazione confermata. Tahany ti contatterà per confermare la disponibilità."
              : "Your request is not a confirmed booking. Tahany will contact you to confirm availability."}
          </p>
        </form>
      </div>
    </section>
  );
}
