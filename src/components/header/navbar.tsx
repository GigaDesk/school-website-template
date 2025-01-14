import * as React from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Navbar(props) {


  return (
    <div
      className=" h-20 absolute bottom-0 w-full grid grid-cols-[1fr_20px] lg:grid-cols-[1fr_600px] px-12 border"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="font-medium text-xxxl text-green-950 content-center">
        Name & Badge
      </div>
      <div className="grid grid-cols-3 max-lg:hidden">
        <Link
          activeClass="before:w-[25%] after:w-[25%]"
          to="industries"
          offset={-100}
          spy={true}
          smooth={true}
          className="grid justify-items-center content-center px-3 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-950 before:origin-center before:h-[3px] before:w-0 hover:before:w-[25%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-950 after:origin-center after:h-[3px] after:w-0 hover:after:w-[25%] after:bottom-4 after:right-[50%]"
        >
          Who we are
        </Link>
        <Link
          activeClass="before:w-[30%] after:w-[28%]"
          to="capabilities"
          spy={true}
          offset={-100}
          smooth={true}
          className="grid justify-items-center content-center px-3 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-950 before:origin-center before:h-[3px] before:w-0 hover:before:w-[30%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-950 after:origin-center after:h-[3px] after:w-0 hover:after:w-[28%] after:bottom-4 after:right-[50%]"
        >
          What we offer
        </Link>
        <Link
          activeClass="before:w-[31%] after:w-[31%]"
          to="our insights"
          spy={true}
          offset={-100}
          smooth={true}
          className="grid justify-items-center content-center px-3 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-950 before:origin-center before:h-[3px] before:w-0 hover:before:w-[31%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-950 after:origin-center after:h-[3px] after:w-0 hover:after:w-[31%] after:bottom-4 after:right-[50%]"
        >
          Our Insights
        </Link>
      </div>
      <div className="grid grid-cols-6 lg:hidden relative">
      {props.open ? (
          <button onClick={props.handleOpen}>
            <KeyboardArrowUpIcon sx={{ width: "30px", height: "30px" }} />
          </button>
        ) : (
          <button onClick={props.handleOpen}>
          <svg
            className="w-4 h-4 ms-1 absolute bottom-1/3 right-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="m1 1 4 4 4-4"
            />
          </svg>
          </button>
        )}
      </div>
    </div>
  );
}
