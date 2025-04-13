"use client";

import { useEffect, useRef } from "react";
import ProductGrid from "@/components/product-grid";
import { products } from "@/data";
import localFont from "next/font/local";
import BouncingImage from "@/components/bouncing-image";
import { Marquee } from "@/components/marquee";

const font2 = localFont({
  src: "../public/FKRasterGroteskCompact-Rounded.woff2",
  weight: "100",
});

const font3 = localFont({
  src: "../public/caryotype-bold.woff2",
  weight: "100",
});

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
    <div className="w-full min-h-screen overflow-hidden">
      {/* Noise Canvas in the background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      <div className="flex flex-col gap-5 md:gap-10 w-full h-full mx-auto text-neutral-100 uppercase px-1">
        <section className="relative w-full">
          <BouncingImage
            src="https://cnimmkaefpcfmcihwjhc.supabase.co/storage/v1/object/public/images//abstract-element-48.png"
            className="absolute w-[10vw] h-[10vw] left-[10vw] top-[5vw] md:left-[20vw] z-20"
            width={120}
            height={120}
          />
          <BouncingImage
            src="https://cnimmkaefpcfmcihwjhc.supabase.co/storage/v1/object/public/images//abstract-element-32.png"
            className="absolute w-[10vw] h-[10vw] right-[10vw] bottom-[5vw] md:right-[20vw] z-20"
            animate={{ y: [0, 15, 0] }}
            duration={5}
            width={100}
            height={100}
          />
          <div className="w-full mx-auto">
            <div className="flex flex-col w-full">
              <h1 className="font-thin tracking-tight leading-none">
                <span
                  className={`block w-full text-[11vw] md:text-[11vw] lg:text-[11vw] whitespace-nowrap overflow-hidden text-neutral-100 blur-[0.7px] md:blur-[1.5px] md:tracking-wide ${font2.className}`}
                >
                  <span className="-z-20">High</span> Quality Web3
                </span>
                <span
                  className={`block w-full text-[10vw] md:text-[10vw] lg:text-[10.3vw] whitespace-nowrap overflow-hidden`}
                >
                  <span
                    className={`${font2.className} blur-[0.7px] md:blur-[1.5px] md:tracking-wide`}
                  >
                    Clothing
                  </span>{" "}
                  <span className={`${font3.className} font-black text-[13vw]`}>
                    For high
                  </span>
                </span>
                <span
                  className={`flex w-full text-[10vw] whitespace-nowrap font-black ${font3.className}`}
                >
                  quality web3{" "}
                  <span className="flex ml-[1.5vw] md:ml-[1vw]">
                    <img
                      src="/b.svg"
                      className="w-[8vw] h-[10vw] -mr-1 md:-mr-[2vw]"
                    />
                    <span className="mr-2">uilders</span>
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </section>

        <Marquee />

        <section className="w-full px-1 md:px-0 max-w-7xl mx-auto mb-10">
          <ProductGrid products={products} />
        </section>
      </div>
    </div>
  );
}
