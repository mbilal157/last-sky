"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";

const MedicalCodingContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-25 bg-gray-100 text-gray-800">
        {/* Heading and Subheading */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Medical Billing & Coding (CPT, ICD-10, HCPCS)
          </h1>
          <p className="text-lg text-gray-600">
            Get paid accurately, faster, and without delays. We translate your
            care into clean, compliant medical claims ready for reimbursement.
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
              decision-making and avoids audit risks.Medical billing and coding
              are the foundation of your revenue cycle. Without precise coding
              and clear billing processes, even the best clinical care can go
              unpaid. At Shangrila Medical Billing, we take the weight off your
              shoulders by handling your CPT, ICD-10, and HCPCS coding with the
              care and precision it deserves. Our expert team understands how
              complex payer rules and coding guidelines can be. That’s why we
              stay up to date with the latest changes in medical coding
              standards, insurance policies, and compliance regulations. By
              outsourcing your medical billing and coding to Shangrila, you’re
              protecting your revenue and gaining a partner that treats your
              financial success as seriously as you treat your patient&apos
              health.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/medcod1.jpg"
              alt="Medical coding"
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
              src="/images/services/medcod2.jpg"
              alt="Medical coding"
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
                "Certified Professional Coders experienced in CPT, ICD-10, and HCPCS.",
                "Specialty-focused coding customized for primary care, surgical, and diagnostic practices",
                "Thorough documentation reviews to ensure coding accuracy and reduce audit risk",
                "Built-in compliance checks aligned with payer-specific requirements and modifiers",
                "Audit-prepared documentation to withstand payer scrutiny or government audits",
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
            src="/images/services/medcod2.jpg"
            alt="Medical coding"
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
              "Fewer claim denials due to clean, correct, and complete coding",
              "Faster payments as properly coded claims are processed more quickly by payers",
              "Increased revenue by ensuring no services go undocumented or underbilled",
              "Full legal compliance with HIPAA, CMS, and private payer requirements",
              "Time and cost savings by eliminating in-house coding errors and training overhead",
              "Reduced administrative stress so your team can focus on what matters: patient care",
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
                Submit Clinical Documentation
              </h1>
              <p>
                We receive your patient notes, encounter forms, or EHR access
                securely.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Assign Medical Codes
              </h1>
              <p>
                Our coders review and assign accurate CPT, ICD-10, and HCPCS
                codes based on documentation.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Verify Compliance & Accuracy
              </h1>
              <p>
                A quality assurance team checks every code for medical necessity
                and payer compliance.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Prepare Claims for Billing
              </h1>
              <p>
                Finalized codes are integrated into billing software for claim
                submission.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Provide Feedback
              </h1>
              <p>
                We send back coding improvement suggestions to help boost future
                documentation and income.
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default MedicalCodingContent;
