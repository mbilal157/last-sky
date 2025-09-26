"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";

const PaymentPostingContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 bg-gray-100 py-25 text-gray-800">
        {/* Heading and Subheading */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Payment Posting & Reconciliation
          </h1>
          <p className="text-lg text-gray-600">
            Every dollar earned, accurately tracked. We post payments, catch
            discrepancies, and keep your books clean.
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
              Knowing what’s paid, what’s pending, and what’s missing is
              essential to financial clarity. At Shangrila, our payment posting
              and reconciliation service ensures every dollar that enters your
              system is properly recorded and matched to the correct patient
              account. We handle ERAs, EOBs, and manual payments — verifying
              adjustments, identifying underpayments, and flagging discrepancies
              immediately. Our goal is complete financial accuracy that supports
              decision-making and avoids audit risks.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/payment1.jpg"
              alt="Payment Posting"
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
              src="/images/services/payment2.jpg"
              alt="Payment Processing"
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
                "ERA and manual posting for all major insurance carriers",
                "Accurate claim-to-payment matching for full transparency",
                "Adjustment and write-off verification to prevent revenue leakage",
                "Underpayment alerts for timely recovery follow-up",
                "Daily reconciliation reports for clear financial snapshots",
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
            src="/images/services/payment2.jpg"
            alt="Payment Processing"
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
              "Eliminate payment errors with expert reconciliation processes",
              "Identify missed income through underpayment detection",
              "Stay audit-ready with clean financial records",
              "Understand revenue flow through daily summaries and balance reports",
              "Boost financial control without overwhelming your in-house team",
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
                Receive Remittance Info
              </h1>
              <p>We gather ERA, EOB, and manual payment data securely.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Post Payments to Accounts
              </h1>
              <p>
                Payments are matched against billed claims and posted
                accurately.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Apply Adjustments
              </h1>
              <p>
                Write-offs, patient responsibility, and payer reductions are
                recorded.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Identify Issues
              </h1>
              <p>
                Underpayments or mismatches are flagged for immediate attention.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Send Reconciliation Report
              </h1>
              <p>
                You receive a daily or weekly report of all payment activity.
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default PaymentPostingContent;
