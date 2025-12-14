"use client";

import React from "react";

export default function HeroIllustration() {
  return (
    <div className="absolute inset-0 right-0 w-1/2 h-full flex items-center justify-center pointer-events-none opacity-60">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[500px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
            @keyframes floatReverse {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(20px) rotate(-5deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.4; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.05); }
            }
            @keyframes draw {
              0% { stroke-dashoffset: 100; opacity: 0; }
              50% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 1; }
            }
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .float { animation: float 6s ease-in-out infinite; }
            .float-reverse { animation: floatReverse 8s ease-in-out infinite; }
            .pulse { animation: pulse 4s ease-in-out infinite; }
            .draw { 
              stroke-dasharray: 100;
              animation: draw 3s ease-out forwards;
            }
            .fade-in { animation: fadeIn 2s ease-out forwards; }
          `}
        </style>

        {/* Design grid background */}
        <g className="fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <rect x="50" y="50" width="80" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" className="float" />
          <rect x="270" y="120" width="80" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" className="float-reverse" />
        </g>

        {/* Code brackets */}
        <g className="fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
          <path
            d="M 100 150 L 80 150 L 80 200 L 100 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="float"
            style={{ color: "rgb(139 92 246 / 0.4)" }}
          />
          <path
            d="M 300 150 L 320 150 L 320 200 L 300 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="float-reverse"
            style={{ color: "rgb(139 92 246 / 0.4)" }}
          />
        </g>

        {/* Design elements - circles */}
        <g className="fade-in" style={{ animationDelay: "1.5s", opacity: 0 }}>
          <circle
            cx="150"
            cy="100"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pulse"
            style={{ color: "rgb(139 92 246 / 0.3)" }}
          />
          <circle
            cx="150"
            cy="100"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="pulse"
            style={{ animationDelay: "0.5s", color: "rgb(139 92 246 / 0.3)" }}
          />
          <circle
            cx="250"
            cy="250"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="float"
            style={{ color: "rgb(139 92 246 / 0.25)" }}
          />
        </g>

        {/* Connecting lines - representing collaboration */}
        <g className="fade-in" style={{ animationDelay: "2s", opacity: 0 }}>
          <line
            x1="150"
            y1="100"
            x2="200"
            y2="200"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            opacity="0.3"
            className="draw"
            style={{ color: "rgb(139 92 246 / 0.2)" }}
          />
          <line
            x1="200"
            y1="200"
            x2="250"
            y2="250"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            opacity="0.3"
            className="draw"
            style={{ animationDelay: "0.5s", color: "rgb(139 92 246 / 0.2)" }}
          />
        </g>

        {/* Design tool - pen/brush */}
        <g className="fade-in" style={{ animationDelay: "2.5s", opacity: 0 }}>
          <path
            d="M 200 80 L 220 100 L 210 110 L 190 90 Z"
            fill="currentColor"
            opacity="0.4"
            className="float"
            style={{ color: "rgb(139 92 246 / 0.5)" }}
          />
          <line
            x1="200"
            y1="80"
            x2="195"
            y2="75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
            style={{ color: "rgb(139 92 246 / 0.5)" }}
          />
        </g>

        {/* Development element - terminal/code */}
        <g className="fade-in" style={{ animationDelay: "3s", opacity: 0 }}>
          <rect
            x="120"
            y="280"
            width="160"
            height="80"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
            className="float-reverse"
            style={{ color: "rgb(139 92 246 / 0.3)" }}
          />
          <line
            x1="140"
            y1="300"
            x2="180"
            y2="300"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
            style={{ color: "rgb(139 92 246 / 0.4)" }}
          />
          <line
            x1="140"
            y1="320"
            x2="200"
            y2="320"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
            style={{ color: "rgb(139 92 246 / 0.3)" }}
          />
        </g>

        {/* Accent dot - focal point */}
        <circle
          cx="200"
          cy="200"
          r="4"
          fill="currentColor"
          className="pulse"
          style={{ color: "rgb(139 92 246 / 0.6)", animationDelay: "1s" }}
        />
      </svg>
    </div>
  );
}

