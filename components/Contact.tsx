"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Missing EmailJS environment variables. See README for setup instructions."
      );
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <h2 className="mb-4 font-display text-4xl text-ink md:text-5xl">Contact</h2>
          <p className="mb-8 max-w-[42ch] font-body text-base text-muted">
           I’m currently open to opportunities and looking for a role where I can contribute, learn, and build meaningful things. Feel free to reach out.

          </p>
          <div className="space-y-2 font-body text-sm text-ink">
            <p>
              <a href="mailto:mananbhardwaj2705@gmail.com" className="underline underline-offset-4 hover:text-blue-700">
                mananbhardwaj2705@gmail.com
              </a>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/https-manan"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-blue-700">
                GitHub
              </a>
            </p>
            <br />
            <p>
              <a href="#" className="underline underline-offset-4 hover:text-blue-700">
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block font-body text-sm text-ink">
              Name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              required
              className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm text-ink outline-none focus:border-ink"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-body text-sm text-ink">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm text-ink outline-none focus:border-ink"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-body text-sm text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none border border-line bg-transparent px-4 py-3 font-body text-sm text-ink outline-none focus:border-ink"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full border border-ink px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="font-body text-sm text-ink">
              Message sent — thanks for reaching out, I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-body text-sm text-ink">
              Something went wrong sending that. Feel free to email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
