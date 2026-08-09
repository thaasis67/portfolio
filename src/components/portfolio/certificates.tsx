"use client";

import { motion } from "framer-motion";
import { Award, Network, type LucideIcon, BadgeCheck } from "lucide-react";
import { certificates } from "./data";
import { SectionHeading } from "./section-heading";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Network,
};

export function Certificates() {
  return (
    <section
      id="certificates"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials I've earned"
          description="Foundational certifications in Java programming and networking fundamentals from industry-leading providers."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certificates.map((cert, i) => {
            const Icon = iconMap[cert.icon] ?? Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-black/30 sm:p-8"
              >
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {cert.year}
                  </span>
                </div>

                <h3 className="relative mt-5 text-lg font-bold leading-snug tracking-tight">
                  {cert.title}
                </h3>
                <p className="relative mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  {cert.issuer}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
