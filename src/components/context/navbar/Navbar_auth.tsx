"use client";
import React, { useState } from "react";
import AuthPage from "@/components/layouts/AuthPage";
import { Button } from "@/components/ui/shadcn/button";
import { SheetTitle } from "@/components/ui/shadcn/sheet";
import { Dialog, DialogTrigger } from "@/components/ui/shadcn/dialog";
import { DialogContentUserAuth } from "@/components/ui/custom/dialog";

const Navbar_auth = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogTrigger asChild className="border-none cursor-pointer font">
        <Button variant="gradient">register</Button>
      </DialogTrigger>
      <DialogContentUserAuth>{<AuthPage />}</DialogContentUserAuth>
      <SheetTitle className="hidden"></SheetTitle>
    </Dialog>
  );
};

export default Navbar_auth;
