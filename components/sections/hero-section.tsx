"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Briefcase, FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { AceternityBackground } from "@/components/ui/aceternity-bg";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full">
        <AceternityBackground dots={true} />
      </div>
      
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Profile Picture Container */}
          <div className="relative mb-6">
            <div className="size-40 rounded-full border-2 border-border/50 p-1.5 overflow-hidden bg-background/50 backdrop-blur-sm shadow-2xl">
              <img 
                src="/HSN_profile_pic.JPG" 
                alt="Himasri Nandam" 
                className="w-full h-full object-cover rounded-full object-center"
              />
            </div>
            {/* Subtle glow effect behind picture */}
            <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl rounded-full scale-110" />
          </div>

          <Badge
            variant="outline"
            className="text-xs font-medium tracking-wide px-4 py-1.5 rounded-full border-border/80 bg-background/50 backdrop-blur-md"
          >
            <Briefcase className="size-3 mr-2" />
            Open to Opportunities
          </Badge>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6 max-w-4xl"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-foreground leading-[1.1]">
            Himasri Nandam
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-muted-foreground tracking-tight">
            Business Analyst & Project Coordinator
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg text-muted-foreground/80 leading-relaxed font-light"
        >
          {portfolioData.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <a href="#experience">
            <Button size="lg" className="btn-hover rounded-full px-8 h-12 text-base gap-2 shadow-lg shadow-primary/20">
              View Experience
              <ArrowDown className="size-4" />
            </Button>
          </a>
          <a href="/Himasri_Nandam_BA_Resume.pdf" download="Himasri_Nandam_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="btn-hover rounded-full px-8 h-12 text-base gap-2 border-border/50"
            >
              <FileText className="size-4" />
              Download Resume
            </Button>
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="btn-hover rounded-full px-8 h-12 text-base gap-2 border-border/50"
            >
              <ExternalLink className="size-4" />
              LinkedIn
            </Button>
          </a>
        </motion.div>

        {/* Minimalist Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border/40"
        >
          {portfolioData.stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center justify-center space-y-2">
              <span className="text-4xl font-heading font-bold text-foreground">{stat.value}</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
