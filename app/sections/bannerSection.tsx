import React from "react";

// type Props = {}

const BannerSection = () =>
  // props: Props
  {
    return (
      <section
        className="w-full text-white  flex min-h-screen relative "
        style={{
          backgroundImage: "url(/images/bannerImage.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full absolute  top-0 left-0 bg-black opacity-70" />
        <div className="absolute top-0 left-0 py-10 w-full px-4 md:px-20 h-full text-center flex flex-col gap-4">
          <div className="flex flex-col gap-7 basis-2/3 h-full  items-center justify-center">
            <span className="text-white md:text-8xl text-6xl font-bold font-[Delius]">
              Chef Tees Pot
            </span>
            <span
              className="text-white md:text-4xl text-2xl font-bold "
              style={{ fontFamily: "var(--font-noto-sans)" }}
            >
              Join us for our next culinary adventure:{" "}
              <span className="whitespace-nowrap">
                &quot;Ife&quot;
              </span>{" "}
            </span>
          </div>
          <div className="z-90 w-full h-full flex basis-1/3 items-end justify-center text-white">
            <span>
              Enjoy Curated Experiences at Chef Tee&apos;s Pot
            </span>
          </div>
        </div>
      </section>
    );
  };

export default BannerSection;
