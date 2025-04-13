import localFont from "next/font/local";

const font = localFont({
  src: "../public/aipointe.woff2",
});

export const Marquee = () => {
  return (
    <section
      className={`w-full mx-auto border-t border-b overflow-hidden border-neutral-100 ${font.className} tracking-widest blur-[1px]`}
    >
      <div className="relative flex overflow-x-hidden">
        <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap flex items-center">
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA-STORE
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x METAMASK
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x GAIA
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA-STORE
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x METAMASK
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x GAIA
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA-STORE
          </span>
        </div>
        <div className="absolute top-0 animate-[marquee2_25s_linear_infinite] whitespace-nowrap flex items-center">
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA-STORE
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x METAMASK
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x GAIA
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA-STORE
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x METAMASK
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA x GAIA
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
          <span className="text-3xl md:text-4xl mx-1 -mb-1 text-red-100/30">
            BALUGA-STORE
          </span>
          <div className="h-8 md:h-10 w-[1px] bg-red-500 mx-2"></div>
        </div>
      </div>
    </section>
  );
};
