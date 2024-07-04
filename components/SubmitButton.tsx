"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SubmitButton = ({
  text,
  variant,
  className,
  status
}: {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
  status: string
}) => {
  return (
    <Button
      variant={variant}
      type="submit"
      disabled={status === 'executing'}
      className={cn("bg-transparent text-white", className)}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
