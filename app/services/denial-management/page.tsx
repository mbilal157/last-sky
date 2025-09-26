import React from "react";
import DenialManagementContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denial Management & Appeals",
  description:
    "Don’t let denials eat away your revenue. We identify, correct, and recover denied claims with expert appeal handling.",
};

export default function DenialManagementPage() {
  return <DenialManagementContent />;
}
