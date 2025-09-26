import React from "react";
import ClaimSubmissionContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Claim Submission & Follow-Up",
  description:
    "Submit cleaner claims, get paid faster, and reduce rejections. We handle your entire claim cycle — from first click to final payment.",
};

export default function ClaimSubmission() {
  return <ClaimSubmissionContent />;
}
