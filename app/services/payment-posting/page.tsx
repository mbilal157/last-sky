import React from "react";
import PaymentPostingContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Posting & Reconciliation",
  description:
    "Every dollar earned, accurately tracked. We post payments, catch discrepancies, and keep your books clean.",
};
export default function PaymentPostingPage() {
  return <PaymentPostingContent />;
}
