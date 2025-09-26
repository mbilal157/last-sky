"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";

const RevenueCycleContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 bg-gray-200 py-16 text-gray-800">
        {/* Heading and Subheading */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Complete Revenue Cycle Management
          </h1>
          <p className="text-lg text-gray-600">
            From first visit to final payment — we manage it all. A single
            solution to simplify your financial operations and maximize revenue.
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
              Managing your full revenue cycle — eligibility, coding, billing,
              follow-up, and collections — can quickly drain your time and
              energy. At Shangrila, we provide complete Revenue Cycle Management
              (RCM) that integrates every part of your billing and reimbursement
              process. From verifying insurance before the appointment to
              posting payments and handling patient balances, we work as your
              extended team. Our goal is to reduce errors, speed up cash flow,
              and give you full control over your practice’s financial health.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/revenue1.jpg"
              alt="Revenue cycle"
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
              src="/images/services/revenue2.jpg"
              alt="Revenue cycle"
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
                "Insurance eligibility checks prior to appointments",
                "Expert coding and charge entry for accuracy and compliance",
                "Claim submission and tracking with real-time visibility",
                "Denial management and appeals to protect your revenue",
                "Payment posting and reconciliation for full financial clarity",
                "Patient billing and support to resolve remaining dues",
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
            src="/images/services/revenue2.jpg"
            alt="Revenue cycle"
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
              "Maximize reimbursements by optimizing every stage of the cycle",
              "Gain financial insight through custom reporting and dashboards",
              "Eliminate workflow gaps with a fully integrated solution",
              "Shorten your AR cycle and reduce bad debt",
              "Simplify operations by partnering with a single vendor",
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
                Verify Patient Insurance
              </h1>
              <p>We confirm active coverage before services are rendered.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Capture and Code Charges
              </h1>
              <p>Services are documented, coded, and entered. .</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Submit and Monitor Claims
              </h1>
              <p>Claims are sent to payers and tracked until resolution.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Handle Denials and Appeals
              </h1>
              <p>Rejected claims are analyzed, corrected, and resubmitted.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Post Payments and Bill Patients
              </h1>
              <p>
                Once payments are posted, remaining balances are billed to
                patients.
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default RevenueCycleContent;
