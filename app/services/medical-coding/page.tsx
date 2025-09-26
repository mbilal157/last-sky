import React from "react";
import MedicalCodingContent from ".";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Medical Billing & Coding (CPT, ICD-10, HCPCS)",
  description:
    "Get paid accurately, faster, and without delays. We translate your care into clean, compliant medical claims ready for reimbursement.",
};

export default function MedicalCodingPage() {
  return <MedicalCodingContent />;
}
