import { portfolioData } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
        <p>
          © {year}{" "}
          <span className="font-semibold text-foreground">{portfolioData.name}</span>
        </p>
        <p className="tracking-widest uppercase text-[10px]">
          Designed & Built with Next.js
        </p>
      </div>
    </footer>
  );
}
