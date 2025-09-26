"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/NavBar";

const CredentialityContent = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 bg-gray-100 py-25 text-gray-800">
        {/* Heading and Subheading */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#22512D] mb-4">
            Credentialing with Insurance Panels
          </h1>
          <p className="text-lg text-gray-600">
            Get enrolled. Stay enrolled. Expand your revenue. We handle every
            credentialing step so you can treat more patients — and get paid for
            it.
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
              Credentialing is one of the biggest barriers to seeing insured
              patients — and it’s also one of the most time-consuming. At
              Shangrila, we take over the entire process, from gathering
              documentation to following up with payers, so you can focus on
              your practice without administrative delays. No matter if
              you&aposre applying for the first time or going through
              re-credentialing, our experts ensure all applications are
              accurate, timely, and fully compliant. We also manage your CAQH,
              track expiration dates, and help avoidrevenue loss due to lapses
              in network participation.
            </p>
          </div>

          {/* Image 1 */}
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/credentiality1.jpg"
              alt="credentiality"
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
              src="/images/services/credentiality2.jpg"
              alt="credentiality"
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
                "New and renewal credentialing for all major insurance payers",
                "CAQH management including updates and attestation",
                "Application preparation and submission on your behalf",
                "Payer follow-up and correspondence until approval is confirmed",
                "Ongoing credential tracking to prevent gaps in participation",
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
            src="/images/services/credentiality2.jpg"
            alt="credentiality"
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
              "Start billing faster by reducing credentialing delays",
              "Access more patients by getting enrolled in key payer networks",
              "Avoid revenue gaps caused by missed renewals or application errors",
              "Ensure documentation accuracy for faster approvals",
              "Stay stress-free by letting us handle all payer communications",
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
                Gather Provider Info
              </h1>
              <p> We collect all necessary licenses, IDs, and documentation.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Prepare and Submit Applications
              </h1>
              <p>
                Forms are filled accurately and submitted to selected insurance
                panels.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Manage CAQH & NPPES
              </h1>
              <p>Profiles are maintained and synced with applications.</p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Track Approval Status
              </h1>
              <p>
                We follow up with payers and resolve any documentation requests.
              </p>
            </li>
            <li>
              <h1 className="text-lg font-semibold text-[#22512D]">
                Notify on Renewals
              </h1>
              <p>We alert you well before any re-credentialing deadlines.</p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default CredentialityContent;
