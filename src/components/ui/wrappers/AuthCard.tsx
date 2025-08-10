"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/libs/utils/utils-shadcn";

export function AuthCard({
  title,
  subtitle,
  children,
  className,
}: PropsWithChildren<{
  title: string;
  subtitle?: string;
  className?: string;
}>) {
  return (
    <section className="mx-auto flex min-h-dvh max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto w-full max-w-xl rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200",
          className
        )}
      >
        <div className="px-8 py-10 sm:px-12">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight ">{title}</h1>
            {subtitle ? (
              <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
