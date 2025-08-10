import { useRef } from "react";
import LoginPage from "../context/auth/LoginPage";
import { AuthCard } from "../ui/wrappers/AuthCard";
import RegistrationPage from "../context/auth/RegistrationPage";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";

const AuthPage = () => {
  const carouselRef = useRef<CarouselApi | null>(null);

  const handleSwitch = (index: number) => {
    carouselRef.current?.scrollTo(index);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Carousel
        className="w-fit"
        opts={{ loop: true, align: "center" }}
        setApi={(api) => (carouselRef.current = api)}
      >
        <CarouselContent>
          <CarouselItem className="px-2">
            <AuthCard
              title="Sign in"
              subtitle="Welcome back. We are glad to see you."
            >
              <LoginPage onSwitch={handleSwitch} />
            </AuthCard>
          </CarouselItem>

          <CarouselItem className="px-2">
            <AuthCard
              title="Create account"
              subtitle="Join us and explore the experience."
            >
              <RegistrationPage onSwitch={handleSwitch} />
            </AuthCard>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AuthPage;
