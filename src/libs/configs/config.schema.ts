import { z } from "zod";

// 🔐 Shared password rules
export const passwordRules = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character")
  .refine((val) => !/\s/.test(val), {
    message: "Password must not contain spaces",
  })
  .describe("Secure password with mixed characters");

export const termsAndConditionsSchema = z.object({
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions to proceed.",
  }),
});

// 🧾 Registration schema
export const registrationSchema = z
  .object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.email("Invalid email format").min(5, "Email is required"),
    password: passwordRules,
    confirmPassword: passwordRules,
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions to proceed.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .describe("Registration form");

// 🔐 Login schema
export const loginSchema = z.object({
  email: z.email("Invalid email format").min(5, "Email is required"),
  password: passwordRules,
  remember: z.boolean().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.email("Invalid email format").min(5, "Email is required"),
  topic: z.string().min(5, "Topic is required"),
  message: z.string().min(5, "Message is required"),
  newsletter: z.boolean().optional(),
});