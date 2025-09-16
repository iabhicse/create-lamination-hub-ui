import z from "zod";
import { emailRules, fullnameRules } from "@/libs/configs/config.schema";

export const fullnameSchema = z.object({
  fullname: fullnameRules,
});

export const emailSchema = z.object({
  email: emailRules,
});

export const addressSchema = z.object({
  address: z.string().trim().min(5, "Address is required"),
});

export const phoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});
