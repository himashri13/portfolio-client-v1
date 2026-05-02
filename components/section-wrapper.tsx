"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  label: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
  clipPath?: "slant-top" | "slant-bottom" | "slant-both";
}

export function SectionWrapper({
  id,
  label,
  icon,
  children,
  className,
  alternate,
  clipPath,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28 overflow-hidden relative",
        alternate && "bg-muted/20 dark:bg-grid-white/[0.05] bg-grid-black/[0.05]",
        clipPath && `clip-path-${clipPath}`,
        className
      )}
    >
      {alternate && (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background/50 dark:bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-header flex flex-col items-start gap-2"
        >
          <div className="flex items-center gap-2 text-primary text-sm font-medium">
            {icon}
            <span className="uppercase tracking-widest text-xs">{label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
            {label}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
