"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Calendar } from "lucide-react";
import { projects } from "./data";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="A selection of recent work — from MERN e-commerce to real-time ML-based intrusion detection. Each project taught me something I now reach for instinctively."
        />

        <div className="mt-12 space-y-6 lg:space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Accent gradient banner */}
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent}`}
              />
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-60 blur-3xl`}
              />

              <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
                {/* Left: summary + meta */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {p.period}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Project {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Tech stack
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <li
                          key={tech}
                          className="inline-flex items-center rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/90"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: highlights + CTA */}
                <div className="flex flex-col justify-between gap-6 rounded-xl border border-border bg-background/40 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Key highlights
                    </p>
                    <ul className="mt-3 space-y-3">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={p.href}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
