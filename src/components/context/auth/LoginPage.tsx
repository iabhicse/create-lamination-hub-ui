"use client";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/libs/utils/utils-shadcn";
import { loginAPI } from "@/libs/api/api.auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthStore } from "@/libs/store/useAuthStore";
import { loginSchema } from "@/libs/configs/config.schema";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { PasswordInput } from "@/components/ui/custom/input";

type LoginFormInputs = z.infer<typeof loginSchema>;

interface LoginPageProps {
  onSwitch?: (index: number) => void;
}

const LoginPage = ({ onSwitch }: LoginPageProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await loginAPI(data);
      if (response?.status === "success") {
        // Optionally redirect to login page and send a toaster message
        if (response?.data) {
          useAuthStore.getState().login(response?.data);
          router.push("/");
        }
        toast.success(response.message);
      }
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : "Unexpected error occurred";
      console.error("❌ API error:", errMsg);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      aria-describedby="auth-status"
    >
      <div className="grid gap-6">
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

        {/* Password Field */}
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            id="login-password"
            placeholder="Your password"
            autoComplete="current-password"
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
      </div>

      {/* Remember Me + Signup Link */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Controller
            name="remember"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="login-remember"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <label
            htmlFor="remember"
            className="cursor-pointer select-none text-sm text-muted-foreground"
          >
            Remember me
          </label>
        </div>
        <Button
          variant={"empty"}
          onClick={(e) => {
            e.preventDefault();
            onSwitch?.(1);
          }}
          className="text-sm font-medium hover:underline"
        >
          Create account
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
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
