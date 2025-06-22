
"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn("w-full border rounded-md px-3 py-2 text-sm", className)}
      {...props}
    />
  );
}

export { Input };
