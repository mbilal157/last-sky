import React from "react";
import CredentialityContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credentialing with Insurance Panels",
  description:
    "Get enrolled. Stay enrolled. Expand your revenue. We handle every credentialing step so you can treat more patients — and get paid for it.",
};

export default function CredentialityPage() {
  return <CredentialityContent />;
}
