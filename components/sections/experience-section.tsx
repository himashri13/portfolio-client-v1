"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SectionWrapper } from "@/components/section-wrapper";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  alternate?: boolean;
  clipPath?: "slant-top" | "slant-bottom" | "slant-both";
}

export function ExperienceSection({ alternate, clipPath }: Props) {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      icon={<Briefcase className="size-4" />}
      alternate={alternate}
      clipPath={clipPath}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <div
            key={exp.id}
            className="group relative pl-8 sm:pl-0 sm:grid sm:grid-cols-[1fr_3fr] gap-8 reveal-item"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Desktop Timeline */}
            <div className="hidden sm:flex flex-col items-end text-right pt-1">
              <span className="text-sm font-semibold text-foreground">{exp.period}</span>
              <span className="text-xs font-medium text-muted-foreground mt-1">{exp.company}</span>
              {exp.current && (
                <span className="mt-3 text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  Current
                </span>
              )}
            </div>

            {/* Mobile Timeline Line */}
            <div className="absolute left-0 top-2 bottom-[-2rem] w-px bg-border sm:hidden group-last:bottom-0" />
            <div className={cn(
              "absolute left-[-4px] top-2 size-2.5 rounded-full border-2 sm:hidden",
              exp.current ? "border-primary bg-background" : "border-muted-foreground bg-background"
            )} />

            {/* Content Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              {/* Mobile Header */}
              <div className="sm:hidden mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{exp.company}</span>
                  <span className="text-xs font-medium text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {exp.role}
                </h3>
              </div>

              {/* Desktop Header */}
              <h3 className="hidden sm:block text-xl font-heading font-semibold text-foreground mb-4">
                {exp.role}
              </h3>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed font-light relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/50">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
