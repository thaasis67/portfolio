"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MapPin, Sparkles } from "lucide-react";
import { profile, stats } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
    >
      {/* Decorative grid overlay — tuned for light cream background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(71,85,105,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,85,105,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for software engineering internships
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-primary">{profile.firstName}</span>
            <br />
            <span className="text-foreground">{profile.name.split(" ")[1]}</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-3 text-base font-medium text-muted-foreground sm:text-lg"
          >
            {profile.role}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_rgba(245,158,11,0.55)] transition-all hover:bg-primary/90 hover:shadow-[0_12px_32px_-6px_rgba(245,158,11,0.7)]"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-6 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
            >
              <Mail className="h-4 w-4 text-primary" />
              Get in touch
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              {profile.email}
            </a>
          </motion.div>
        </div>

        {/* Right: portrait/initials card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-black/40">
            {/* gradient glow */}
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/25 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl"
            />

            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-500 text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                {profile.initials}
              </div>
              <div>
                <p className="text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-background/50 p-3"
                >
                  <p className="text-xl font-bold text-primary">{s.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <p className="text-xs text-muted-foreground">
                Open to internship opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
