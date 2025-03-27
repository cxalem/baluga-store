"use client";

import { useEffect, useRef } from "react";

export default function NoisePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth || 1;
      canvas.height = window.innerHeight || 1;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create noise animation
    let animationFrameId: number;

    const generateNoise = () => {
      if (!canvas.width || !canvas.height) {
        animationFrameId = requestAnimationFrame(generateNoise);
        return;
      }

      try {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          // Generate random noise value
          const value = Math.floor(Math.random() * 50);

          data[i] = value; // R
          data[i + 1] = value; // G
          data[i + 2] = value; // B
          data[i + 3] = 70; // Alpha
        }

        ctx.putImageData(imageData, 0, 0);
      } catch (error) {
        console.error("Error generating noise:", error);
      }

      // Continue animation loop
      animationFrameId = requestAnimationFrame(generateNoise);
    };

    generateNoise();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Noise Canvas in the background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      {/* Centered content container */}
      <div className="relative flex flex-col gap-5 md:gap-10 w-full h-full mx-auto text-neutral-100 uppercase px-1">
        <section className="w-full">
          <div className="w-full mx-auto">
            <div className="flex flex-col w-full">
              <h1 className="font-thin tracking-tight leading-none">
                <span className="block w-full text-[11vw] md:text-[11vw] lg:text-[11vw] whitespace-nowrap overflow-hidden">
                  High Quality Web3
                </span>
                <span className="block w-full text-[10vw] md:text-[10vw] lg:text-[10.5vw] whitespace-nowrap overflow-hidden">
                  Clothing <span className="font-black">For high</span>
                </span>
                <span className="flex w-full text-[8vw] md:text-[8vw] lg:text-[8vw] whitespace-nowrap font-black">
                  quality web3{" "}
                  <span className="flex ml-[1vw]">
                    <img
                      src="/b.svg"
                      className="w-[8vw] h-[8vw] -mr-1 md:-mr-[2vw]"
                    />
                    <span className="mr-2">uilders</span>
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full max-w-7xl mx-auto border-t border-b overflow-hidden border-neutral-100/80">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap flex items-center">
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA-STORE
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x METAMASK
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x GAIA
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA-STORE
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x METAMASK
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x GAIA
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA-STORE
              </span>
            </div>
            <div className="absolute top-0 animate-[marquee2_25s_linear_infinite] whitespace-nowrap flex items-center">
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA-STORE
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x METAMASK
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x GAIA
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA-STORE
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x METAMASK
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA x GAIA
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
              <span className="text-3xl md:text-4xl mx-2 text-neutral-100/20">
                BALUGA-STORE
              </span>
              <div className="h-10 w-[1px] bg-red-500 mx-2"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
