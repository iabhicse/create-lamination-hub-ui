"use client";

import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/libs/utils/utils-shadcn";
import { contactAPI } from "@/libs/api/api.auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { contactSchema } from "@/libs/configs/config.schema";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Textarea } from "@/components/ui/shadcn/textarea";

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      topic: "",
      message: "",
      fullname: "",
      newsletter: false,
    },
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const response = await contactAPI(data);

      if (response?.status === "success") {
        // Optionally send a toaster message
        toast.success(response.message);
      }
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Unexpected error occurred";
      console.error("❌ API error:", errMsg);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      aria-describedby="auth-status"
    >
      <div className="grid gap-6">
        {/* Name */}
        <div className="grid gap-2">
          <Label htmlFor="name">Fullname</Label>
          <Input
            id="contact-fullname"
            type="text"
            placeholder="Your full name"
            autoComplete="fullname"
            {...register("fullname")}
            className={cn(
              "h-11 rounded-none border-0 border-b border-neutral-300 px-2 text-base shadow-none focus:ring-0 focus-visible:ring-0 focus:border-rose-500",
              errors.fullname && "border-red-300"
            )}
            aria-invalid={!!errors.fullname}
            aria-describedby={errors.fullname ? "name-error" : undefined}
          />
          <AnimatePresence>
            {errors.fullname && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600"
              >
                {errors.fullname.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Field */}
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...register("email")}
            className={cn(
              "h-11 rounded-none border-0 border-b border-neutral-300 px-2 text-base shadow-none focus:ring-0 focus-visible:ring-0 focus:border-rose-500",
              errors.email && "border-red-300"
            )}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            placeholder="Tell us a bit about your project..."
            rows={6}
            {...register("message", {
              required: "Message is required",
            })}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                id="message-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600"
              >
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Terms & Login Link */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Controller
            name="newsletter"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="registration-terms"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <label
            htmlFor="registration-terms"
            className={cn(
              "cursor-pointer select-none text-sm text-muted-foreground",
              errors.newsletter && "text-destructive"
            )}
          >
            {errors.newsletter
              ? errors.newsletter.message
              : "Please sign me up for the newsletter"}
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between gap-4">
        <div id="auth-status" aria-live="polite" className="min-h-6 text-sm">
          {/* You can add animated status messages here */}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors",
            "bg-rose-600 hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
