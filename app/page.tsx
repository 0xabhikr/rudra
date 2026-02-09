"use client"

import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";



const GOLD = "#dbad62";
const GOLD_LIGHT_BG = "#f6eddc";
const GOLD_HOVER = "#c89b55";

const mukhi = [
  { label: "Nirakar (0) Mukhi", href: "/rudraksha/0-mukhi" },
  { label: "1 Mukhi", href: "/rudraksha/1-mukhi" },
  { label: "2 Mukhi", href: "/rudraksha/2-mukhi" },
  { label: "3 Mukhi", href: "/rudraksha/3-mukhi" },
  { label: "4 Mukhi", href: "/rudraksha/4-mukhi" },
  { label: "5 Mukhi", href: "/rudraksha/5-mukhi" },
  { label: "6 Mukhi", href: "/rudraksha/6-mukhi" },
  { label: "7 Mukhi", href: "/rudraksha/7-mukhi" },
  { label: "8 Mukhi", href: "/rudraksha/8-mukhi" },
  { label: "9 Mukhi", href: "/rudraksha/9-mukhi" },
  { label: "10 Mukhi", href: "/rudraksha/10-mukhi" },
  { label: "11 Mukhi", href: "/rudraksha/11-mukhi" },
  { label: "12 Mukhi", href: "/rudraksha/12-mukhi" },
  { label: "13 Mukhi", href: "/rudraksha/13-mukhi" },
  { label: "14 Mukhi", href: "/rudraksha/14-mukhi" },
  { label: "15 Mukhi", href: "/rudraksha/15-mukhi" },
  { label: "16 Mukhi", href: "/rudraksha/16-mukhi" },
  { label: "17 Mukhi", href: "/rudraksha/17-mukhi" },
  { label: "18 Mukhi", href: "/rudraksha/18-mukhi" },
];

const faqs = [
  {
    q: "Are your Rudraksha authentic and natural?",
    a: "Yes — every bead is lab tested and X-ray certified to verify mukhi lines and internal structure.",
  },
  {
    q: "Where are the Rudraksha sourced from?",
    a: "Directly from the Arun Valley region of Nepal, known for premium Rudraksha.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, worldwide shipping with trusted courier partners.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-zinc-900 dark:text-zinc-100">
      <main style={{ backgroundColor: GOLD_LIGHT_BG }} className="dark:bg-black">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              A+ Grade • Lab + X-Ray Certified • Lifetime Authenticity Guarantee
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Buy Authentic
              Laxmi Rudrashya from Nepal
            </h1>

            <p className="max-w-prose text-zinc-700 dark:text-zinc-300">
              Explore the world’s largest collection of genuine
              Laxmi Rudrashya —
              curated, verified, and guided by tradition.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="text-black hover:text-black"
                style={{ backgroundColor: GOLD }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
              >
                <a href="/rudraksha">View All Collection</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="bg-white/40 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10"
                style={{ borderColor: GOLD, color: "#111" }}
                onClick={() =>
                  window.open(
                    "https://wa.me/919999999999?text=Hi%20I%20need%20a%20website",
                    "_blank"
                  )
                }
              >
                <a href="/consultation">Book a Consultation</a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-6 sm:grid-cols-4">
              {[
                ["Secure Payment", "Encrypted checkout"],
                ["ISO 9001", "Quality operation"],
                ["Certified", "Lab & X-ray tested"],
                ["Worldwide Shipping", "Fast delivery"],
              ].map(([t, s]) => (
                <div
                  key={t}
                  className="rounded-xl border border-black/10 bg-white/60 p-4 text-sm shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-medium">{t}</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_20%,#dbad62,transparent_55%)]" />
            <div className="relative p-8">
              <p className="text-sm font-medium">Featured Rudraksha</p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Replace this block with a Next/Image hero banner.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>


        <section className="mx-auto max-w-7xl px-4 pb-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Rudraksha</h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Explore by Mukhi count (0–18).
              </p>
            </div>

            <Button
              variant="outline"
              asChild
              className="bg-white/40 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10"
              style={{ borderColor: GOLD, color: "#111" }}
            >
              <a href="/rudraksha">View All</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {mukhi.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="group rounded-xl border border-black/10 bg-white/60 p-4 text-sm shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div
                  className="mb-3 h-10 w-10 rounded-full border border-black/10 bg-white/60 dark:border-white/10 dark:bg-white/5"
                />
                <div className="font-medium group-hover:underline">{c.label}</div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  View products →
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <h2 className="text-xl font-semibold">Featured In</h2>
            <p className="mt-2 max-w-prose text-sm text-zinc-700 dark:text-zinc-300">
              Add your real press logos/links here (cards or logo strip).
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["APN News", "Spiritual startup revolutionizing wellness."],
                ["The CEO Magazine", "A new chapter of faith and legacy."],
                ["Entrepreneur India", "Elevating spirituality globally."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {desc}
                  </p>

                  <Button
                    className="mt-4"
                    variant="outline"
                    style={{ borderColor: GOLD, color: "#111" }}
                  >
                    View story
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black p-8 text-white shadow-sm dark:border-white/10">
            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_20%,#dbad62,transparent_45%)]" />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Need Support? Get Consultation Now!</h3>
                <p className="mt-1 text-sm text-white/80">
                  Personalized guidance to choose the right Rudraksha combination.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  className="text-black hover:text-black"
                  style={{ backgroundColor: GOLD }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                >
                  <a href="/consultation">Get Support</a>
                </Button>

                <Button variant="default" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="/faq">Browse FAQ</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-semibold">{f.q}</p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

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
