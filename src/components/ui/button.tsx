import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/90 hover:shadow-medium",
        outline:
          "border border-glass-border bg-glass text-foreground shadow-soft hover:bg-muted/20 hover:border-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/80 hover:shadow-medium hover:scale-[1.02]",
        ghost: 
          "hover:bg-muted/20 hover:text-foreground transition-colors",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        hero: 
          "bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold shadow-glow hover:shadow-glow-lg hover:scale-[1.05] active:scale-[0.95] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        glass:
          "glass text-foreground hover:bg-muted/10 border-glass-border/50 hover:border-primary/30 hover:shadow-glow-sm",
        success:
          "bg-accent text-accent-foreground shadow-soft hover:bg-accent/90 hover:shadow-medium hover:scale-[1.02]",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };