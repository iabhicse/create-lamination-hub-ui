import clsx from "clsx";
import React from "react";
import BackgroundEffect_v4 from "../ui/backgrounds/BackgroundEffect_v4";

type BackgroundVariants = "gradient" | "image_effect" | "fade_Effect";

interface BackgroundProps {
  gradient?: string;
  className?: string;
  video?: {
    src: string;
    poster?: string;
    isLazy?: boolean;
    type?: string;
  };
  children: React.ReactNode;
  variants: BackgroundVariants;
}
const BackgroundProvider = ({
  gradient,
  children,
  variants,
  className,
}: BackgroundProps) => {
  const cssGradient =
    gradient || "linear-gradient(135deg, var(--primary), var(--secondary))";

  switch (variants) {
    case "gradient":
      return (
        <div
          className={clsx("min-h-screen w-full", className)}
          style={{ backgroundImage: cssGradient }}
        >
          {children}
        </div>
      );

    case "fade_Effect":
      return (
        <BackgroundEffect_v4 className={className} timer={20}>
          {children}
        </BackgroundEffect_v4>
      );

    default:
      return (
        <div className={clsx("bg-background text-foreground", className)}>
          {children}
        </div>
      );
  }
};

export default BackgroundProvider;
