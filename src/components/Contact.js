"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiCopy, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";

// FormSubmit reenvía el formulario al correo. La primera vez envía un email de activación que hay que confirmar.
const FORM_ENDPOINT = (email) => `https://formsubmit.co/ajax/${email}`;

function ContactForm({ f, email }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return; // bots
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT(email), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `${f.subject}: ${data.name}`, _replyto: data.email, _template: "table", _captcha: "false" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-[1rem] text-ink placeholder:text-muted outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" aria-labelledby="form-title">
      <h3 id="form-title" className="font-display text-[1.5rem] font-bold tracking-[-0.02em] text-ink">
        {f.title}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          {f.name}
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          {f.email}
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink">
        {f.message}
        <textarea name="message" required rows={5} placeholder={f.messagePlaceholder} className={`${field} resize-y`} />
      </label>
      {/* Campo trampa para bots: invisible para personas */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[0.98rem] font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          <FiSend aria-hidden="true" className="size-4" />
          {status === "sending" ? f.sending : f.send}
        </button>
        <p aria-live="polite" className="text-sm">
          {status === "sent" && <span className="text-live">{f.sent}</span>}
          {status === "error" && (
            <span className="text-ink-2">
              {f.error}{" "}
              <a href={`mailto:${email}`} className="font-medium text-accent underline underline-offset-4">
                {email}
              </a>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}

export default function Contact({ t, person, cv }) {
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const secondary =
    "inline-flex h-12 items-center gap-2.5 rounded-full border border-line-strong px-5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-surface-2";

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="py-20 sm:py-32">
      <div className="container-page">
        <h2 id="contacto-title" className="font-display text-[3rem] font-bold leading-[0.95] tracking-[-0.045em] text-ink sm:text-[5rem] lg:text-[6.5rem]">
          {c.title}
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="max-w-xl text-[1.1rem] leading-relaxed text-ink-2">{c.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${person.email}`}
                className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-accent px-6 py-3 text-on-accent shadow-[0_10px_30px_-10px_var(--glow)] transition-transform hover:-translate-y-0.5"
              >
                <FiMail aria-hidden="true" className="size-5 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-[0.8rem] opacity-80">{c.email}</span>
                  <span className="block truncate text-[1.02rem] font-medium">{person.email}</span>
                </span>
              </a>
              <button type="button" onClick={copyEmail} className={secondary}>
                {copied ? <FiCheck aria-hidden="true" className="size-4 text-live" /> : <FiCopy aria-hidden="true" className="size-4" />}
                <span aria-live="polite">{copied ? c.copied : c.copyEmail}</span>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
                <FiLinkedin aria-hidden="true" className="size-4" /> LinkedIn
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className={secondary}>
                <FiGithub aria-hidden="true" className="size-4" /> GitHub
              </a>
              <a href={person.whatsapp} target="_blank" rel="noopener noreferrer" className={secondary}>
                <FaWhatsapp aria-hidden="true" className="size-4" /> {c.whatsapp}
              </a>
              <a href={person.phoneHref} className={secondary}>
                <FiPhone aria-hidden="true" className="size-4" /> {person.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:gap-8">
              <a href={cv.es} download className="inline-flex items-center gap-2 py-2 font-medium text-ink underline decoration-line-strong underline-offset-[6px] hover:decoration-accent">
                <FiDownload aria-hidden="true" className="size-4" /> {c.cvEs}
              </a>
              <a href={cv.en} download className="inline-flex items-center gap-2 py-2 font-medium text-ink underline decoration-line-strong underline-offset-[6px] hover:decoration-accent">
                <FiDownload aria-hidden="true" className="size-4" /> {c.cvEn}
              </a>
            </div>
          </div>

          <ContactForm f={c.form} email={person.email} />
        </div>
      </div>
    </section>
  );
}
