import * as React from "react";
import { Link } from "react-scroll";

export default function BottomDrawer() {
  return (
    <div
      className="grid grid-rows-3 px-12 bg-white text-lg border-b border-neutral-700 pt-20"
      style={{ fontFamily: "Graphik" }}
    >
      <Link
        activeClass="bg-green-950 text-white"
        to="industries"
        spy={true}
        offset={-100}
        smooth={true}
        className="py-2"
      >
        Who we are
      </Link>
      <Link
        activeClass="bg-green-950 text-white"
        to="capabilities"
        spy={true}
        offset={-100}
        smooth={true}
        className="py-2"
      >
        What we offer
      </Link>
      <Link
        activeClass="bg-green-950 text-white"
        to="our insights"
        spy={true}
        offset={-100}
        smooth={true}
        className="py-2"
      >
        Our Insights
      </Link>
    </div>
  );
}
