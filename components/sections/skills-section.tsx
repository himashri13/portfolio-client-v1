"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" label="Core Competencies" icon={<Zap className="size-4" />}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {Object.entries(portfolioData.skills).map(([category, items], index) => (
          <div
            key={category}
            className="glass-card p-8 rounded-2xl reveal-item flex flex-col gap-4"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <h3 className="text-base font-heading font-semibold text-foreground tracking-tight">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border-none"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
