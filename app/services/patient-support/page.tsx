import React from "react";
import type { Metadata } from "next";
import PatientSupportContent from ".";
export const metadata: Metadata = {
  title: "Patient Statements & Support",
  description:
    "Clear billing = faster payments and happier patients. We simplify patient bills and provide respectful, reliable support.",
};

export default function PatientSupportPage() {
  return <PatientSupportContent />;
}
