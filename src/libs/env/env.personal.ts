import { z } from "zod";

// ✅ Schema uses the actual env var names (with NEXT_PUBLIC_ prefix)
const envPersonalInfoSchema = z.object({
  NEXT_PUBLIC_PERSONAL_MOBILE: z.string().default(""),
  NEXT_PUBLIC_PERSONAL_EMAIL: z.string().default(""),
});

// ✅ Validate process.env
const parsed = envPersonalInfoSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid personal environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`
  );
}

// ✅ Map validated vars to clean keys
export const envPersonalInfoConfig = Object.freeze({
  PERSONAL_MOBILE: parsed.data.NEXT_PUBLIC_PERSONAL_MOBILE,
  PERSONAL_EMAIL: parsed.data.NEXT_PUBLIC_PERSONAL_EMAIL,
});

// ✅ Optional: Type-safe config
export type EnvPersonalConfig = typeof envPersonalInfoConfig;
