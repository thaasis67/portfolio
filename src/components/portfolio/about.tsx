"use client";

import { motion } from "framer-motion";
import { Quote, Target } from "lucide-react";
import { aboutParagraphs, focusAreas, profile } from "./data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
          description="What I'm studying, what I'm good at, and what I'm looking for next."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Bio paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Objective highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/30">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl"
              />

              <div className="relative flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Objective
                </span>
              </div>

              <Quote
                className="relative mt-4 h-8 w-8 text-primary/30"
                aria-hidden
              />
              <p className="relative mt-2 text-pretty text-base leading-relaxed text-foreground/90">
                {profile.objective}
              </p>

              <div className="relative mt-6 border-t border-border pt-5">
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium text-foreground">
                      {profile.location}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Focus</dt>
                    <dd className="font-medium text-foreground">
                      Full-Stack · Backend
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="inline-flex items-center gap-1.5 font-medium text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Open to internships
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
