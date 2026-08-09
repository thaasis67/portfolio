"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-3 ${
        isCenter ? "items-center text-center" : "items-start"
      }`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <span className="h-px w-6 bg-primary/60" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
