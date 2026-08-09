"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { education } from "./data";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-y border-border/60 bg-card/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Where I'm studying"
          description="Bachelor of Science in Computer Science at Tribhuvan University, with coursework spanning algorithms, databases, networks, and web tech."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/30 sm:p-8"
        >
          <div
            aria-hidden
            className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/15 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </span>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {education.degree}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {education.period}
                </span>
              </div>

              <p className="mt-2 text-base font-medium text-primary">
                {education.institution}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {education.location}
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Relevant coursework
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {education.coursework.map((c) => (
                    <li
                      key={c}
                      className="inline-flex items-center rounded-md border border-border bg-background/60 px-2.5 py-1 text-sm font-medium text-foreground/90"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
