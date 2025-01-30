import React from "react";
import { format } from "date-fns";
import { Calendar, Clock, MapPin } from "lucide-react";
// type Props = {}

const EventDetail = () => {
  const date = new Date("2025-02-15T17:00:00");
  return (
    <section
      id="event-detail"
      style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full  text-white  md:px-20 px-4 py-10 md:py-16 pb-20 flex flex-col justify-center items-center relative bg-black"
    >
      <div className="absolute z-10 inset-0 w-full h-full bg-black opacity-70" />
      <div className="absolute inset-0 w-full h-full " style={{ backgroundImage: "url(/images/bannerImage2.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
      <div className="z-50">
        <span className="text-white text-5xl md:text-7xl font-semibold text-center">
          <span className="text-red-700 font-[Delius]">IFE</span> by Chef{" "}
          <span className="text-red-700">{"Tee's"}</span> Pot
        </span>
      </div>
      <div className="flex w-full z-50 md:mt-10 mt-4 flex-col gap-4 md:flex-row md:gap-10 ">
        <div className="flex-1 w-fit flex flex-col justify-center items-center ">
          <div className="flex relative overflow-hidden rounded-3xl shadow-md shadow-black/10 px-10 py-8 flex-col gap-4">
          <div className="bg-red-500/10 inset-0 blur-sm absolute "/>
            <h3 className="text-white relative  md:text-3xl z-50 font-medium">
              Date and Time
            </h3>
            <div className="flex z-50 items-center z-60 gap-2">
              <Calendar className="md:size-8 size-6" />
              <span className="md:text-2xl text-lg font-semibold">
                {format(date, "d, MMM yyyy")}
              </span>
            </div>
            <div className="flex z-50 items-center gap-2">
              <Clock className="md:size-8 size-6" />
              <span className="md:text-2xl text-lg font-semibold">
                {format(date, "h:mm a")}
              </span>
            </div>
          </div>
          <div className=" mt-4 rounded-3xl relative overflow-hidden shadow-md shadow-black/30 px-10 py-8 flex-col gap-4">
            <div className="bg-violet-500/10 inset-0 blur-sm absolute "/>
            <div className="flex items-center gap-2">
              <MapPin className="md:size-8 size-6" />
              <span className="md:text-2xl z-50 text-lg font-semibold">
                Gbagada, Lagos
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(/images/ife.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
          }}
          className="flex-1 md:min-h-full min-h-[400px] bg-white rounded-3xl shadow-md shadow-black/30"
        ></div>
      </div>
    </section>
  );
};

export default EventDetail;
