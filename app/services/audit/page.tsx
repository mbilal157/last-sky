import React from "react";
import MedicalAuditContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Medical Audit Services",
  description:
    "Uncover errors before they cost you. We audit your coding, documentation, and billing processes for full compliance and revenue recovery.",
};

export default function Audit() {
  return <MedicalAuditContent />;
}
