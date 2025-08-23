"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "../shadcn/button";

const Button_Toast = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => toast.success("Button clicked")}
      className="cursor-pointer"
    >
      CLick me
    </Button>
  );
};

export default Button_Toast;
