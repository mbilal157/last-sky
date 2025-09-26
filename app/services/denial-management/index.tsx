"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";

const DenialManagementContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 bg-gray-100 py-25 text-gray-800">
        {/* Heading and Subheading */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Denial Management & Appeals
          </h1>
          <p className="text-lg text-gray-600">
            Don’t let denials eat away your revenue. We identify, correct, and
            recover denied claims with expert appeal handling.
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
              Denied claims directly impact your revenue, disrupt your workflow,
              and cause unnecessary stress. At Shangrila, we treat every denial
              as a priority, not an afterthought. Our specialists carefully
              analyze each rejection, fix the root cause, and resubmit the claim
              with clean documentation — fast. Got a coding mismatch, missing
              modifier, eligibility error, or vague denial reason? We go after
              it with a structured plan. And we don’t just fix what went wrong —
              we help you prevent it in the future with insights and prevention
              strategies customized to your practice.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-70 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/denial1.jpg"
              alt="Denial management"
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
              src="/images/services/denial2.jpg"
              alt="Denial management"
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
                "Detailed denial analysis to identify the root cause of each rejection",
                "Customized appeal letters backed with correct codes and supporting documents",
                "Quick resubmissions for faster revenue recovery",
                "Payer communication managed professionally on your behalf",
                "Recurring denial reporting to improve long-term claim approval rates",
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
            src="/images/services/denial2.jpg"
            alt="Denial management"
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
              "Recover lost revenue by reworking and resubmitting denied claims",
              "Reduce future denials through analysis and process improvement",
              "Maintain steady cash flow despite payer pushbacks",
              "Ensure payer compliance with properly documented appeals",
              "Save time and staff effort by letting experts handle the complex appeal process",
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
                Collect Denied Claims
              </h1>
              <p>
                We identify and gather denied claims from your system or
                clearinghouse.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Analyze Rejection Reasons
              </h1>
              <p>
                Each denial is reviewed to pinpoint coding, eligibility, or
                documentation issues.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Correct Errors & Prepare Appeals
              </h1>
              <p>
                Claims are updated or supported with proper documentation and
                submitted with strong appeal letters.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Submit to Payers
              </h1>
              <p>
                Resubmissions or appeals are sent according to payer-specific
                formats and deadlines.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Monitor and Report
              </h1>
              <p>
                We track appeal outcomes and report trends for future
                improvement.
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default DenialManagementContent;
