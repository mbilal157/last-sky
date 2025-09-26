import React from "react";
import RevenueCycleContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Complete Revenue Cycle Management",
  description:
    "From first visit to final payment — we manage it all. A single solution to simplify your financial operations and maximize revenue.",
};

export default function RevenueCycle() {
  return <RevenueCycleContent />;
}
