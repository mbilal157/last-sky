"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";

const MedicalAuditContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl bg-gray-100 mx-auto px-4 py-25 text-gray-800">
        {/* Heading and Subheading */}

        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Medical Audit Services
          </h1>
          <p className="text-lg text-gray-600">
            Uncover errors before they cost you. We audit your coding,
            documentation, and billing processes for full compliance and revenue
            recovery.
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
              Even the most expert medical practices can have silent revenue
              leaks or compliance gaps. At Shangrila, our medical audit service
              helps uncover them before they turn into lost income or penalties.
              If you need to prepare for an external audit or simply assess
              internal performance, our process is thorough, fair, and
              actionable. We review your past claims, medical records, and codes
              to detect issues like undercoding, overcoding, missed
              documentation, or improper billing. Our reports help you fix
              problems now and strengthen your processes for the future.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/audit1.jpg"
              alt="Medical audit"
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
              src="/images/services/audit2.jpg"
              alt="Medical audit"
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
                "Sample-based or full audits depending on your needs",
                "Coding accuracy checks aligned with current payer standards",
                "Documentation-to-code matching to prevent claim disputes",
                "Compliance risk assessment with CMS and private insurers",
                "Detailed audit reports with improvement strategies",
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
            src="/images/services/audit2.jpg"
            alt="Medical Audit"
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
              "Avoid penalties and clawbacks by proactively identifying risks",
              "Recover missed revenue from underbilled services",
              "Improve coding habits and provider documentation",
              "Gain peace of mind before external audits",
              "Boost compliance confidence across your staff",
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
                Gather Past Claims and Charts
              </h1>
              <p>We review a sample or full batch of billing records.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Audit for Accuracy
              </h1>
              <p>Codes, notes, and claims are compared for consistency.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Evaluate Compliance Risks
              </h1>
              <p>We flag any regulatory or documentation concerns.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Prepare Detailed Report
              </h1>
              <p>
                You receive a summary of issues, risks, and recommendations.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Support Implementation
              </h1>
              <p>
                We guide you on applying fixes and improving documentation..
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default MedicalAuditContent;
