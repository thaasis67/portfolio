"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks, profile } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(245,158,11,0.4),0_8px_20px_-6px_rgba(245,158,11,0.6)] transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="text-foreground">
            {profile.firstName}
            <span className="text-primary">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_8px_24px_-6px_rgba(245,158,11,0.5)]"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-border/60 bg-background/95 px-4 py-4 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
