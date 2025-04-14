"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextGlitchProps {
  children: ReactNode;
  className?: string;
  glitchProbability?: number; // 0-1, chance of glitch occurring in an interval
  minInterval?: number; // minimum ms between possible glitch checks
  maxInterval?: number; // maximum ms between possible glitch checks
  glitchDuration?: number; // how long the glitch lasts in ms
}

export default function TextGlitch({
  children,
  className,
  glitchProbability = 0.7,
  minInterval = 2000,
  maxInterval = 8000,
  glitchDuration = 450,
}: TextGlitchProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Function to randomly decide if we should glitch
    const tryGlitch = () => {
      if (Math.random() < glitchProbability) {
        setIsGlitching(true);

        // Reset glitch after duration
        setTimeout(() => {
          setIsGlitching(false);
        }, glitchDuration);
      }
    };

    // Set up random interval for glitch checks
    const scheduleNextGlitch = () => {
      const nextInterval =
        Math.floor(Math.random() * (maxInterval - minInterval)) + minInterval;

      return setTimeout(() => {
        tryGlitch();
        const timerId = scheduleNextGlitch();
        return () => clearTimeout(timerId);
      }, nextInterval);
    };

    const timerId = scheduleNextGlitch();
    return () => clearTimeout(timerId);
  }, [glitchProbability, minInterval, maxInterval, glitchDuration]);

  return (
    <span
      className={cn(className, isGlitching && "glitch-text")}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}
      {isGlitching && (
        <>
          <span
            className="glitch-clone glitch-clone-1"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: `translate(${Math.random() * 10 - 5}px, ${
                Math.random() * 5 - 2.5
              }px)`,
              opacity: 0.8,
              zIndex: 1,
            }}
          >
            {children}
          </span>
          <span
            className="glitch-clone glitch-clone-2"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
              transform: `translate(${Math.random() * 10 - 5}px, ${
                Math.random() * 5 - 2.5
              }px)`,
              opacity: 0.8,
              zIndex: 1,
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}
