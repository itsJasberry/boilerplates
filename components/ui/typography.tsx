// components/Typography.tsx
import React, { JSX, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TypographyContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
  variant?: "default" | "primary" | "secondary";
};

// Komponent container do artykułów i dłuższych tekstów
export function TypographyContainer({
  children,
  className,
  size = "base",
  variant = "default",
  ...props
}: TypographyContainerProps) {
  const sizeClasses = {
    sm: "prose-sm",
    base: "prose",
    lg: "prose-lg",
    xl: "prose-xl",
    "2xl": "prose-2xl",
  };

  const variantClasses = {
    default: "",
    primary: "prose-primary",
    secondary: "prose-secondary",
  };

  return (
    <div
      className={cn(
        "prose",
        sizeClasses[size],
        variantClasses[variant],
        "max-w-none", // usuwa max-width z prose
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Komponent dla pojedynczych elementów typograficznych
type TypographyProps = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "blockquote"
    | "inlinecode"
    | "lead"
    | "large"
    | "muted"
    | "small";
  children: ReactNode;
  className?: string;
};

export function Typography({
  variant,
  children,
  className,
  ...props
}: TypographyProps) {
  const variantClasses = {
    h1: "scroll-m-20 text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight",
    h2: "scroll-m-20 border-b pb-2 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold tracking-tight",
    h4: "scroll-m-20 text-[clamp(1.125rem,2vw,1.5rem)] font-semibold tracking-tight",
    p: "leading-7 text-[clamp(1rem,1.5vw,1.125rem)] [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 pl-6 italic text-[clamp(1rem,1.5vw,1.125rem)]",
    inlinecode:
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[clamp(0.8rem,1vw,0.9rem)] font-semibold",
    lead: "text-[clamp(1.125rem,2.5vw,1.5rem)] text-muted-foreground",
    large: "text-[clamp(1.05rem,1.8vw,1.25rem)] font-semibold",
    muted: "text-[clamp(0.9rem,1.2vw,1rem)] text-muted-foreground",
    small: "text-[clamp(0.8rem,0.9vw,0.875rem)] font-medium",
  };

  const Component =
    variant === "inlinecode"
      ? "code"
      : variant === "blockquote"
      ? "blockquote"
      : (variant as keyof JSX.IntrinsicElements);

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
