"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "./data";
import { SectionHeading } from "./section-heading";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Database,
  Wrench,
  Cloud,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-border/60 bg-card/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="What I work with"
          description="Languages, frameworks, databases, and tooling I reach for when shipping software end-to-end."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-black/30"
              >
                {/* hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold">{cat.title}</h3>
                </div>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s}
                      className="inline-flex items-center rounded-md border border-border bg-background/60 px-2.5 py-1 text-sm font-medium text-foreground/90 transition-colors hover:border-primary/40 hover:bg-background"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Closing accent card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-6"
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/25 blur-2xl"
            />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Always learning
                </p>
                <p className="mt-3 text-pretty text-base leading-relaxed text-foreground">
                  Currently exploring production-grade Spring Boot patterns,
                  Docker workflows, and ML model deployment.
                </p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Open to internship opportunities — let&apos;s build.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
