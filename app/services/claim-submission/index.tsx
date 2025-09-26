"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";

const ClaimSubmissionContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto bg-gray-100 px-4 py-25 text-gray-800">
        {/* Heading and Subheading */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Electronic Claim Submission & Follow-Up
          </h1>
          <p className="text-lg text-gray-600">
            Submit cleaner claims, get paid faster, and reduce rejections. We
            handle your entire claim cycle — from first click to final payment.
          </p>
        </section>

        {/* Introduction Section with Image 1 */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Introduction Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-[#22512D] mb-4">
              Introduction
            </h2>
            <p className="text-gray-700">
              Claim submission isn’t hitting “send.” It’s accuracy, compliance,
              and constant follow-up. One small error or missed detail can delay
              your payments by weeks or even months. At Shangrila Medical
              Billing, we ensure that every claim submitted is thoroughly
              reviewed, properly formatted, and sent using payer-preferred
              methods — electronic or manual. But we don’t stop at submission.
              We actively track each claim post-submission, monitor payer
              responses, and initiate follow-ups to resolve pending or ignored
              claims. With our follow-through, you get quicker reimbursements,
              fewer denials, and no revenue left hanging.Our system ensures
              every claim moves swiftly — and correctly — through the pipeline.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/claim1.jpg"
              alt="Claim Submission"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Image 2 and Key Features */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Image 2 - Hidden on mobile (shown below) */}
          <div className="hidden md:block md:w-1/2 relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/claim2.jpg"
              alt="Claim Submission"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Key Features */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-[#22512D] mb-6">
              Key Features
            </h2>
            <ul className="space-y-4">
              {[
                "Clean Claim Scrubbing before submission to catch missing info or errors",
                "Electronic or manual claim filing based on payer-specific formats and preferences",
                "Real-time claim tracking for full visibility on status and progress",
                "Automated alerts and reminders for aging or stalled claims",
                "Dedicated follow-up team that chases pending payments on your behalf",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-700 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image 2 - Mobile only */}
        <div className="md:hidden relative h-64 w-full rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/services/claim2.jpg"
            alt="Claim Submission"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#22512D] mb-6">
            Benefits
          </h2>
          <ul className="space-y-4">
            {[
              "Faster reimbursements due to prompt and accurate claim filing",
              "Minimized claim denials through pre-submission checks",
              "Increased cash flow by accelerating the revenue cycle",
              "Increased cash flow by accelerating the revenue cycle",
              "Better payer relationships through consistent communication and clean documentation",
              "Transparency and control with claim status tracking and reports",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-700 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-[#22512D] mb-6">
            How It Works
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Receive Billing Data
              </h1>
              <p>
                We securely collect patient info, procedure codes, and charges
                from your system.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Verify and Format Claims
              </h1>
              <p>
                Each claim is reviewed and converted into the correct format
                (837P, CMS-1500, etc.).
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Submit to Payers
              </h1>
              <p>
                Claims are sent through secure electronic channels or mailed,
                depending on payer rules.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Track and Monitor
              </h1>
              <p>
                We continuously track submitted claims and flag any issues or
                delays.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Follow Up on Delays
              </h1>
              <p>
                Our team contacts payers for any unpaid or pending claims and
                ensures resolution.
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default ClaimSubmissionContent;
