import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-16">
      <svg
        className="animate-spin"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Track Circle (thin, light) */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#E5E7EB" // Light gray
          strokeWidth="2"   // Thinner stroke
          opacity="0.4"
        />
        {/* Blue Arc path (thin, partial arc) */}
        <path
          d="M38 20a18 18 0 0 1-36 0"
          stroke="#3B82F6" // Blue color
          strokeWidth="2"  // Thin stroke
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
