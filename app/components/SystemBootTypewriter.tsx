"use client";

import React, { useState, useEffect } from "react";

const SystemBootTypewriter = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [cursorBlinking, setCursorBlinking] = useState(true);
  const [phase, setPhase] = useState<"anticipation" | "typing" | "complete">("anticipation");

  const fullText = "Strategy. Design. Scale.";
  const words = ["Strategy.", "Design.", "Scale."];
  const pauses = [400, 400, 0]; // Pause after each word (last one doesn't matter)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (phase === "anticipation") {
      // Anticipation phase: cursor blinks for 800ms
      timeoutId = setTimeout(() => {
        setPhase("typing");
      }, 800);
    } else if (phase === "typing") {
      let currentWordIndex = 0;
      let currentCharIndex = 0;
      let currentWord = words[currentWordIndex];
      let accumulatedText = "";

      const typeNextChar = () => {
        if (currentWordIndex < words.length) {
          if (currentCharIndex < currentWord.length) {
            accumulatedText += currentWord[currentCharIndex];
            setDisplayText(accumulatedText);
            currentCharIndex++;
            timeoutId = setTimeout(typeNextChar, 50); // Typing speed
          } else {
            // Word complete, pause before next word
            currentWordIndex++;
            if (currentWordIndex < words.length) {
              accumulatedText += " "; // Add space between words
              setDisplayText(accumulatedText);
              currentCharIndex = 0;
              currentWord = words[currentWordIndex];
              timeoutId = setTimeout(typeNextChar, pauses[currentWordIndex - 1]);
            } else {
              // All words typed
              setPhase("complete");
            }
          }
        }
      };

      typeNextChar();
    } else if (phase === "complete") {
      // Stop blinking first
      setCursorBlinking(false);
      // Then fade out cursor after a brief moment
      timeoutId = setTimeout(() => {
        setShowCursor(false);
      }, 500); // Fade out duration
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phase]);

  // Render text with periods styled differently
  const renderText = () => {
    const parts: React.ReactNode[] = [];
    let charIndex = 0;

    for (let i = 0; i < displayText.length; i++) {
      const char = displayText[i];
      
      // Check if this is a period
      if (char === ".") {
        parts.push(
          <span key={i} className="text-gray-400 dark:text-gray-500">
            {char}
          </span>
        );
      } else {
        parts.push(
          <span key={i} className="text-zinc-900 dark:text-white">
            {char}
          </span>
        );
      }
    }

    return parts;
  };

  return (
    <div className="flex items-center gap-2">
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        {renderText()}
      </div>
      {showCursor && (
        <div
          className={`h-12 md:h-16 lg:h-20 w-3 bg-[#5dff9e] transition-opacity duration-500 ${
            cursorBlinking ? "animate-pulse" : ""
          }`}
          style={{ 
            opacity: cursorBlinking ? 1 : 0,
            minWidth: '0.5rem'
          }}
        />
      )}
    </div>
  );
};

export default SystemBootTypewriter;

