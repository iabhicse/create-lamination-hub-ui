"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils/utils-shadcn";

interface ContactCardProps {
  details: {
    title: string;
    number: string;
    email: string;
    subtitle?: string;
  };
  children: React.ReactNode;
  className?: string;
}

const ContactCard = ({ details, children, className }: ContactCardProps) => {
  const { title, number, email } = details;
  return (
    <section className="mx-auto flex max-w-xl items-center px-4 py-10 sm:px-6 lg:px-8">
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
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold tracking-tight ">{title}</h1>
            <p>
              <a href={`tel:${number}`}>
                <strong>📞 Phone:</strong> <span>{number}</span>
              </a>
            </p>
            <p>
              <a href="mailto:{email}">
                <strong>📧 Email:</strong> <span>{email}</span>
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-4">{children}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCard;
