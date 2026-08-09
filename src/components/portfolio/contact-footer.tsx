"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Globe, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "./data";
import { SectionHeading } from "./section-heading";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
    icon: Github,
  },
  {
    label: "Portfolio",
    value: profile.portfolio,
    href: profile.portfolioUrl,
    icon: Globe,
  },
];

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-border/60 bg-card/40 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="I'm actively looking for a software engineering internship. Whether you have a role, a project, or just want to chat about Java, MERN, or ML security — my inbox is open."
          align="center"
        />

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-8 text-center"
        >
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl"
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Available now
          </p>
          <h3 className="relative mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Looking for a software engineering intern?
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Drop me a line — I respond within a day or two and I&apos;m happy
            to share code samples or jump on a quick call.
          </p>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_rgba(245,158,11,0.55)] transition-all hover:bg-primary/90 hover:shadow-[0_12px_32px_-6px_rgba(245,158,11,0.7)]"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-card"
            >
              <Github className="h-4 w-4" />
              See my code
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-black/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
            <span>
              <span className="font-medium text-foreground">
                {profile.name}
              </span>{" "}
              · {profile.role}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{profile.location}</span>
          </div>
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &
            Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
