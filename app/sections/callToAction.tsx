import Link from "next/link";
import React from "react";
import Countdown from "./components/countdown";
import { ArrowUpRight } from "lucide-react";

// type Props = {}

const CallToAction = () =>
  // props: Props
  {
    return (
      <section id="pricing" style={{ fontFamily: "var(--font-noto-sans)" }} className="w-full text-white  md:px-20 px-4 py-10 md:py-16 pb-20 flex flex-col min-h-screen relative bg-black/90">
        <div className="flex  flex-col gap-4" style={{ fontFamily: "var(--font-noto-sans)" }}>
          <span className="text-white text-7xl font-semibold">
            Decide To <span className="font-bold text-red-700">Join</span> The
            Event.
          </span>
          <span className="text-lg leading-8">
            Prepare to experience the magic of love like never before! &apos;Ife&apos; is
            more than an event; it’s a celebration of connection, passion, and
            heartfelt moments. Join us as we journey through the beauty of love
            in all its forms. Mark your calendar and get ready to make memories
            that will linger forever. Let love lead the way!
          </span>
          <Link href={"#event-detail"} className="text-lg w-fit underline underline-offset-4">Scroll down to discover</Link>
        </div>
        <div className="h-full min-h-[600px]  relative mt-8 md:mt-10 flex-1 w-full bg-black" style={{ backgroundImage: "url(/images/dinner.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          {/* <img className="h-full w-full" src="/images/dinner.jpg" alt="" /> */}
          <div className="absolute flex  flex-col text-black gap-4 md:flex-row px-4 py-4 bg-stone-300 top-0 right-0">
            <div className="space-y-2">
              <span className="font-medium text-lg">Remaining Time</span>
              <Countdown targetDate="2025-02-15" />
            </div>
            <div className="space-y-2 flex flex-col">
              <span className="font-medium text-lg">Starting from</span>
              <span className="md:text-2xl text-lg font-bold">N30,000</span>
            </div>
          </div>
            <Link href={"https://tix.africa/ifebycheftee"} target="_blank" className="absolute bottom-0 left-0 bg-stone-300 p-4 text-black">
              <div className="md:text-xl text-lg font-semibold flex items-center gap-2 w-fit"><span>Attend the Event</span> <ArrowUpRight/></div>
            </Link>
        </div>
      </section>
    );
  };

export default CallToAction;


