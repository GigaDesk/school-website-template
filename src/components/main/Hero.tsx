import * as React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 z-30 px-4 md:pl-16 text-white bg-opacity-50 rounded-xl"
        style={{ fontFamily: "Graphik" }}
      >
        <h2 className="font-medium text-xxl">
          School Motto
        </h2>
        <p className="font-normal mt-5 text-lg md:w-[550px]">
          A paragraph of a fun fact about the school or intriguing details about the school that make it special or just details
        </p>
        <Link to="industries" offset={-100} spy={true} smooth={true}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-950 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-16 mt-10"
          >
            LEARN MORE
          </button>
        </Link>
      </div>
      <video
        src="https://videos.ctfassets.net/vjt7hlwnzx7i/571uF5iXI1JiIcTRPfuCyk/37659f7f995bc69f26058095c7f162de/12564026_1920_1080_60fps.mp4"
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      />
    </div>
  );
}
