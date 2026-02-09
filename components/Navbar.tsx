"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, User } from "lucide-react";



const GOLD = "#dbad62";
const GOLD_HOVER = "#c89b55";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "Shop", href: "/shop" },
    { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/70">

            <div className="border-b border-black/10 bg-[#f6eddc] dark:border-white/10 dark:bg-zinc-950">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-zinc-800 dark:text-zinc-200">
                    <p className="truncate">
                        Maha Shivaratri Event • Authentic A+ Grade
                        Laxmi Rudrashya • X-Ray Certified
                    </p>
                    <div className="hidden gap-3 sm:flex">
                        <Link className="hover:underline" href="/track-order">
                            Track Order
                        </Link>
                        <Link className="hover:underline" href="/support">
                            Support
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <div
                        className="grid h-9 w-9 place-items-center rounded-full text-black font-semibold"
                        style={{ backgroundColor: GOLD }}
                    >
                        LR
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            Laxmi Rudrashya
                        </p>
                        <p className="text-xs text-zinc-500">Since 1994</p>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-sm text-zinc-700 hover:text-black dark:text-zinc-200 dark:hover:text-white"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" aria-label="Search">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Account">
                        <User className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Cart">
                        <ShoppingCart className="h-5 w-5" />
                    </Button>

                    {/* GOLD CTA (desktop) */}
                    <div className="hidden md:block">
                        <Button
                            asChild
                            className="ml-2 text-black hover:text-black"
                            style={{ backgroundColor: GOLD }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                        >
                            <Link href="/consultation">Consult</Link>
                        </Button>
                    </div>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    aria-label="Open menu"
                                    style={{ borderColor: GOLD }}
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-[320px]">
                                {/* ✅ Required for accessibility (hidden) */}
                                <SheetHeader className="sr-only">
                                    <SheetTitle>Navigation Menu</SheetTitle>
                                </SheetHeader>

                                <div className="mt-6 flex flex-col gap-3">
                                    {navLinks.map((l) => (
                                        <Link
                                            key={l.href}
                                            href={l.href}
                                            className="rounded-lg px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
                                        >
                                            {l.label}
                                        </Link>
                                    ))}

                                    <div className="mt-3 border-t pt-3">
                                        <Button
                                            asChild
                                            className="w-full text-black hover:text-black"
                                            style={{ backgroundColor: GOLD }}
                                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
                                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                                        >
                                            <Link href="/consultation">Get Consultation</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>

                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
