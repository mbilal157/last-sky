"use client";

import Image from "next/image";
import { useState } from "react";

interface CardProps {
  src: string;
  type: "h" | "v";
  className?: string;
  onPreview: () => void;
}

const Card = ({ src, type, className, onPreview }: CardProps) => (
  <div
    className={`relative overflow-hidden rounded-2xl shadow-md min-w-0 w-full h-full group cursor-pointer ${className}`}
    onClick={onPreview}
  >
    <Image
      src={src}
      alt="Grid Image"
      width={type === "h" ? 1200 : 800}
      height={type === "h" ? 800 : 1200}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-center pb-6">
      {/* Preview Button */}
      <button className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-[#0098ff] bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        Preview
      </button>
    </div>
  </div>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={imageSrc}
            alt="Preview Image"
            width={1200}
            height={800}
            unoptimized
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Click outside to close */}
        <div className="absolute inset-0 -z-10" onClick={onClose} />
      </div>
    </div>
  );
};

export default function CinematicGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlePreview = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-4 md:p-6 pt-14 max-w-7xl mx-auto w-full">
        {/* 1️⃣ Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          <Card
            src="/images/portfolio/photos/v1.jpg"
            type="v"
            onPreview={() => handlePreview("/images/portfolio/photos/v1.jpg")}
          />
          <Card
            src="/images/portfolio/photos/v2.jpg"
            type="v"
            onPreview={() => handlePreview("/images/portfolio/photos/v2.jpg")}
          />
          <div className="flex flex-col gap-4 h-full min-w-0">
            <Card
              src="/images/portfolio/photos/h2.jpg"
              type="h"
              className="h-48 md:h-1/2"
              onPreview={() => handlePreview("/images/portfolio/photos/h2.jpg")}
            />
            <Card
              src="/images/portfolio/photos/h1.jpg"
              type="h"
              className="h-48 md:h-1/2"
              onPreview={() => handlePreview("/images/portfolio/photos/h1.jpg")}
            />
          </div>
        </div>

        {/* 2️⃣ Row 2 */}
        <div className="h-64 md:h-auto">
          <Card
            src="/images/portfolio/photos/h4.jpg"
            type="h"
            className="w-full h-full"
            onPreview={() => handlePreview("/images/portfolio/photos/h4.jpg")}
          />
        </div>

        {/* 3️⃣ Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          <Card
            src="/images/portfolio/photos/v3.jpg"
            type="v"
            onPreview={() => handlePreview("/images/portfolio/photos/v3.jpg")}
          />
          <div className="flex flex-col gap-4 h-full min-w-0">
            <Card
              src="/images/portfolio/photos/h3.jpg"
              type="h"
              className="h-48 md:h-1/2"
              onPreview={() => handlePreview("/images/portfolio/photos/h3.jpg")}
            />
            <Card
              src="/images/portfolio/photos/h5.jpg"
              type="h"
              className="h-48 md:h-1/2"
              onPreview={() => handlePreview("/images/portfolio/photos/h5.jpg")}
            />
          </div>
          <Card
            src="/images/portfolio/photos/v4.jpg"
            type="v"
            onPreview={() => handlePreview("/images/portfolio/photos/v4.jpg")}
          />
        </div>

        {/* 4️⃣ Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-4 h-auto">
          <Card
            src="/images/portfolio/photos/v5.jpg"
            type="v"
            className="h-64 md:h-full"
            onPreview={() => handlePreview("/images/portfolio/photos/v5.jpg")}
          />
          <Card
            src="/images/portfolio/photos/v6.jpg"
            type="v"
            className="h-64 md:h-full"
            onPreview={() => handlePreview("/images/portfolio/photos/v6.jpg")}
          />
        </div>

        {/* 5️⃣ Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-4 h-auto">
          <Card
            src="/images/portfolio/photos/h6.jpg"
            type="h"
            className="h-64 md:h-full"
            onPreview={() => handlePreview("/images/portfolio/photos/h6.jpg")}
          />
          <Card
            src="/images/portfolio/photos/h7.jpg"
            type="h"
            className="h-64 md:h-full"
            onPreview={() => handlePreview("/images/portfolio/photos/h7.jpg")}
          />
        </div>

        {/* 6️⃣ Row 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          <Card
            src="/images/portfolio/photos/v7.jpg"
            type="v"
            onPreview={() => handlePreview("/images/portfolio/photos/v7.jpg")}
          />
          <Card
            src="/images/portfolio/photos/v8.jpg"
            type="v"
            onPreview={() => handlePreview("/images/portfolio/photos/v8.jpg")}
          />
          <div className="flex flex-col gap-4 h-full min-w-0">
            <Card
              src="/images/portfolio/photos/h8.jpg"
              type="h"
              className="h-48 md:h-1/2"
              onPreview={() => handlePreview("/images/portfolio/photos/h8.jpg")}
            />
            <Card
              src="/images/portfolio/photos/h9.jpg"
              type="h"
              className="h-48 md:h-1/2"
              onPreview={() => handlePreview("/images/portfolio/photos/h9.jpg")}
            />
          </div>
        </div>

        {/* 7️⃣ Row 7 */}
        <div className="h-64 md:h-auto">
          <Card
            src="/images/portfolio/photos/h10.jpg"
            type="h"
            className="w-full h-full"
            onPreview={() => handlePreview("/images/portfolio/photos/h10.jpg")}
          />
        </div>
      </div>

      {/* Image Preview Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
        imageSrc={selectedImage || ""}
      />
    </>
  );
}
