"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SectionWrapper } from "@/components/section-wrapper";
import { User, MapPin, Mail, Phone, Globe } from "lucide-react";

export function AboutSection() {
  const details = [
    { label: "Location", value: portfolioData.location, icon: MapPin },
    { label: "Email", value: portfolioData.email, icon: Mail },
    { label: "Phone", value: portfolioData.phone, icon: Phone },
    { label: "Domain", value: "EdTech & Public Sector", icon: Globe },
  ];

  return (
    <SectionWrapper id="about" label="About Me" icon={<User className="size-4" />}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-heading font-semibold text-foreground tracking-tight">
            Professional Summary
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed font-light">
            {portfolioData.summary}
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col gap-6">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Quick Details
          </h4>
          <div className="flex flex-col gap-4">
            {details.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon className="size-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
