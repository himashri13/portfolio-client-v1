"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SectionWrapper } from "@/components/section-wrapper";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

interface Props {
  alternate?: boolean;
  clipPath?: "slant-top" | "slant-bottom" | "slant-both";
}

export function EducationSection({ alternate, clipPath }: Props) {
  return (
    <SectionWrapper
      id="education"
      label="Education & Certifications"
      icon={<GraduationCap className="size-4" />}
      alternate={alternate}
      clipPath={clipPath}
    >
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-xl font-heading font-semibold text-foreground flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary"><GraduationCap className="size-5" /></div>
            Education
          </h3>
          <div className="space-y-4">
            {portfolioData.education.map((edu) => (
              <div
                key={edu.degree}
                className="glass-card p-6 rounded-2xl space-y-2"
              >
                <p className="text-base font-bold text-foreground tracking-tight">{edu.degree}</p>
                <p className="text-sm font-medium text-muted-foreground">{edu.institution}</p>
                <div className="inline-block mt-2 px-3 py-1 rounded bg-secondary text-xs font-semibold text-secondary-foreground">
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-xl font-heading font-semibold text-foreground flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary"><Award className="size-5" /></div>
            Certifications
          </h3>
          <div className="space-y-4">
            {portfolioData.certifications.map((cert, i) => {
              const [title, issuer] = cert.split(" – ");
              return (
                <div
                  key={i}
                  className="glass-card flex items-start gap-4 p-5 rounded-2xl group"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground leading-snug">{title}</p>
                    {issuer && (
                      <p className="text-xs font-medium text-muted-foreground mt-2 flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-primary/50" />
                        {issuer}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="size-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
