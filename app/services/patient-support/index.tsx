"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";
const PatientSupportContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto bg-gray-100 px-4 py-25 text-gray-800">
        {/* Heading and Subheading */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Patient Statements & Support
          </h1>
          <p className="text-lg text-gray-600">
            Clear billing = faster payments and happier patients. We simplify
            patient bills and provide respectful, reliable support.
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
              Confusing or inaccurate patient bills cause delays, complaints,
              and even lost trust. At Shangrila, we generate clear,
              easy-to-understand statements and make sure your patients have the
              help they need to resolve their balances without stress. We verify
              every patient balance before sending bills, include detailed
              breakdowns of charges, and support patients through email, calls,
              or chat. The result? Faster payments, fewer billing issues, and a
              smoother experience for everyone.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/psupport1.jpg"
              alt="Patient Support"
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
              src="/images/services/psupport2.jpg"
              alt="Patient support"
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
                "Branded, professional statements tailored to your practice",
                "Balance validation before issuing any patient responsibility",
                "Multiple delivery options (print, email, or portal-based)",
                "Patient support team available for queries and clarification",
                "Friendly reminders sent to encourage timely payments",
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
            src="/images/services/psupport2.jpg"
            alt="Patient Support"
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
              "Improve patient trust with clear, accurate, and polite billing",
              "Speed up collections by avoiding billing confusion",
              "Lower admin stress by outsourcing billing communication",
              "Protect your reputation with respectful, professional communication",
              "Provide a better patient experience that reflects your standard of care",
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
                Validate Balances
              </h1>
              <p>
                Bills include itemized charges, payments, and final amounts
                owed.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Generate Statements
              </h1>
              <p>
                Bills include itemized charges, payments, and final amounts
                owed.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Deliver Statements
              </h1>
              <p>
                Sent via email, post, or secure portal based on your preference.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Provide Support
              </h1>
              <p>
                Our team responds to patient billing questions with clarity and
                care.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Send Follow-Ups
              </h1>
              <p>Gentle reminders help close remaining balances.</p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default PatientSupportContent;
