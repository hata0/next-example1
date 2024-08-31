"use client";
import { getQueryClient } from "@/lib/tanstack-query/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import type * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
