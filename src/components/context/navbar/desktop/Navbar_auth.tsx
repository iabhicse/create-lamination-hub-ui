"use client";
import React, { useState } from "react";
import AuthPage from "@/components/layouts/AuthPage";
import { Button } from "@/components/ui/shadcn/button";
import { Dialog, DialogTrigger } from "@/components/ui/shadcn/dialog";
import { DialogContentUserAuth } from "@/components/ui/custom/dialog";
import { SheetDescription, SheetTitle } from "@/components/ui/shadcn/sheet";

const Navbar_auth = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogTrigger asChild className="border-none cursor-pointer font">
        <Button variant="gradient">register</Button>
      </DialogTrigger>
      <DialogContentUserAuth className="w-fit ">
        {<AuthPage />}
      </DialogContentUserAuth>
      <SheetTitle className="hidden"></SheetTitle>
      <SheetDescription className="hidden"></SheetDescription>
    </Dialog>
  );
};

export default Navbar_auth;
