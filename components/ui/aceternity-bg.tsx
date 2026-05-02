export function AceternityBackground({ children, dots = false }: { children?: React.ReactNode, dots?: boolean }) {
  const bgClass = dots 
    ? "dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
    : "dark:bg-grid-white/[0.05] bg-grid-black/[0.05]";
    
  return (
    <div className={`relative w-full h-full bg-background ${bgClass}`}>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
