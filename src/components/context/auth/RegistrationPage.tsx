"use client";

import { z } from "zod";
import { cn } from "@/libs/utils/utils-shadcn";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { registrationSchema } from "@/libs/configs/config.schema";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useSession } from "@/libs/store/useSession";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { PasswordInput } from "@/components/ui/custom/input";

export type RegistrationFormInputs = z.infer<typeof registrationSchema>;

interface RegistrationPageProps {
  onSwitch?: (index: number) => void;
}

const RegistrationPage = ({ onSwitch }: RegistrationPageProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormInputs>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const { signupUser } = useSession();

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async (data) => {
    signupUser(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      aria-describedby="auth-status"
    >
      <div className="grid gap-6">
        {/* Name */}
        <div className="grid gap-2">
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            id="fullname"
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

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="registration-email">E-mail</Label>
          <Input
            id="registration-email"
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

        {/* Password */}
        <div className="grid gap-2">
          <Label htmlFor="registration-password">Password</Label>
          <PasswordInput
            id="registration-password"
            placeholder="Create a password"
            autoComplete="new-password"
            {...register("password")}
            className={cn(
              "h-11 rounded-none border-0 border-b border-neutral-300 px-2 text-base shadow-none focus:ring-0 focus-visible:ring-0 focus:border-rose-500",
              errors.password && "border-red-300"
            )}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          <AnimatePresence>
            {errors.password && (
              <motion.p
                id="password-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600"
              >
                {errors.password.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Confirm Password */}
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <PasswordInput
            id="registeration-confirmPassword"
            placeholder="Repeat your password"
            autoComplete="new-password"
            {...register("confirmPassword")}
            className={cn(
              "h-11 rounded-none border-0 border-b border-neutral-300 px-2 text-base shadow-none focus:ring-0 focus-visible:ring-0 focus:border-rose-500",
              errors.confirmPassword && "border-red-300"
            )}
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={
              errors.confirmPassword ? "confirmPassword-error" : undefined
            }
          />
          <AnimatePresence>
            {errors.confirmPassword && (
              <motion.p
                id="confirmPassword-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs text-red-600"
              >
                {errors.confirmPassword.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Terms & Login Link */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Controller
            name="terms"
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
              errors.terms && "text-destructive"
            )}
          >
            {errors.terms
              ? errors.terms.message
              : "I agree to the terms and conditions"}
          </label>
        </div>

        <Button
          variant="empty"
          onClick={(e) => {
            e.preventDefault();
            onSwitch?.(0);
          }}
          className="text-sm font-medium hover:underline"
        >
          Already have an account?
        </Button>
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
            "bg-rose-600 hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed",
            "cursor-pointer"
          )}
        >
          {isSubmitting ? "Creating account..." : "Sign up"}
        </button>
      </div>
    </form>
  );
};

export default RegistrationPage;
