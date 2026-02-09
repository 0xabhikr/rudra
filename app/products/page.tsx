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

export default function products() {
  return (
    <div className="min-h-screen font-sans text-zinc-900 dark:text-zinc-100">
      <main style={{ backgroundColor: GOLD_LIGHT_BG }} className="dark:bg-black">
       

        <footer className="border-t border-black/10 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
            <div>
              <p className="text-sm font-semibold">Nepa Rudraksha</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Authentic Nepali Rudraksha • Certified • Worldwide shipping
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
