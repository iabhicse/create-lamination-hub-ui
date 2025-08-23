"use client";
import { useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import LoginPage from "../context/auth/LoginPage";
import { AuthCard } from "../ui/wrappers/AuthCard";
import RegistrationPage from "../context/auth/RegistrationPage";

const AuthPage = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSwiper = (Index: number) => {
    swiperRef.current?.slideTo(Index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Swiper
        loop={true}
        className="max-w-[800px] scale-90"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <AuthCard
            title="Sign in"
            subtitle="Welcome back. We are glad to see you."
          >
            <LoginPage onSwitch={handleSwiper} />
          </AuthCard>
        </SwiperSlide>

        <SwiperSlide>
          <AuthCard
            title="Create account"
            subtitle="Join us and explore the experience."
          >
            <RegistrationPage onSwitch={handleSwiper} />
          </AuthCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AuthPage;
