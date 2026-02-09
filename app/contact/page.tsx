"use client";

import { Button } from "@/components/ui/button";

const GOLD = "#dbad62";
const GOLD_LIGHT_BG = "#f6eddc";
const GOLD_HOVER = "#c89b55";

export default function Contact() {
  return (
    <div className="min-h-screen font-sans text-zinc-900 dark:text-zinc-100">
      <main style={{ backgroundColor: GOLD_LIGHT_BG }} className="dark:bg-black">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-4 pt-10 md:pt-14">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5 md:p-10">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Contact Us
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-zinc-700 dark:text-zinc-300 md:text-base">
              We&apos;d love to hear from you. Reach out for product questions, certification
              details, shipping support, or anything else.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                className="text-zinc-900"
                style={{ backgroundColor: GOLD }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                asChild
              >
                <a href="mailto:support@laxmirudrakshya.com">Email Support</a>
              </Button>

              <Button
                variant="outline"
                className="border-black/20 bg-white/60 text-zinc-900 hover:bg-white/80 dark:border-white/20 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                asChild
              >
                <a href="tel:+9779843227939">Call Us</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Reach us through */}
            <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold">Reach us through</p>

              <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Address</p>
                  <p>Pinglasthan, Kathmandu, Nepal</p>
                </div>

                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Phone</p>
                  <a className="hover:underline" href="tel:+9779843227939">
                    +977 984-3227939
                  </a>
                </div>

                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Email</p>
                  <a
                    className="hover:underline break-all"
                    href="mailto:laxmirudrakshyabhandarnepal@gmail.com"
                  >
                    laxmirudrakshyabhandarnepal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Sales */}
            <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold">Sales Inquiries</p>

              <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Email</p>
                  <a className="hover:underline" href="mailto:sales@laxmirudrakshya.com">
                    sales@laxmirudrakshya.com
                  </a>
                </div>

                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Phone</p>
                  <a className="hover:underline" href="tel:+9779843227939">
                    +977 984-3227939
                  </a>
                </div>

                <div className="pt-2">
                  <Button
                    className="w-full text-zinc-900"
                    style={{ backgroundColor: GOLD }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                    asChild
                  >
                    <a href="mailto:sales@laxmirudrakshya.com?subject=Sales%20Inquiry">
                      Contact Sales
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold">Customer Support</p>

              <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Email</p>
                  <a className="hover:underline" href="mailto:support@laxmirudrakshya.com">
                    support@laxmirudrakshya.com
                  </a>
                </div>

                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">Phone</p>
                  <a className="hover:underline" href="tel:+9779843227940">
                    +977 984-3227940
                  </a>
                </div>

                <div className="pt-2">
                  <Button
                    className="w-full text-zinc-900"
                    style={{ backgroundColor: GOLD }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                    asChild
                  >
                    <a href="mailto:support@laxmirudrakshya.com?subject=Support%20Request">
                      Get Support
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">Social Media</p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Follow us for new arrivals, certification insights, and updates.
                </p>
              </div>

              <div className="mt-3 flex flex-wrap gap-3 md:mt-0">
                <a
                  className="rounded-full border border-black/15 bg-white/60 px-4 py-2 text-sm text-zinc-800 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                  href="https://facebook.com/LaxmiRudrakshya"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="rounded-full border border-black/15 bg-white/60 px-4 py-2 text-sm text-zinc-800 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                  href="https://instagram.com/LaxmiRudrakshya"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="rounded-full border border-black/15 bg-white/60 px-4 py-2 text-sm text-zinc-800 hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                  href="https://linkedin.com/company/LaxmiRudrakshya"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer (your original) */}
        <footer className="border-t border-black/10 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
            <div>
              <p className="text-sm font-semibold">Nepa Rudraksha</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Authentic
                Laxmi Rudrashya • Certified • Worldwide shipping
              </p>
            </div>

            {[
              ["Exclusive Services", ["Refund policy", "Privacy Policy", "Terms of Service"]],
              ["Help", ["Help & Contact", "Track Order", "Shipping", "Payment"]],
              ["Brand", ["Why Nepa Rudraksha?", "Certification", "Write a Review"]],
            ].map(([title, items]) => (
              <div key={title as string}>
                <p className="text-sm font-semibold">{title as string}</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {(items as string[]).map((i) => (
                    <li key={i}>
                      <a className="hover:underline" href="#">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-black/10 py-6 text-center text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400">
            © {new Date().getFullYear()} Nepa Rudraksha. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
