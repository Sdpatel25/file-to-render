import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard({ icon: Icon, title, description, className, style }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "group relative p-6 glass rounded-xl border-glass-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1",
        className
      )}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}