import * as React from "react";
import { useState } from "react";

export default function Partners() {
  const [gigaActive, setGigaActive] = useState(false);

  const handleGigaTrue = () => {
    setGigaActive(true);
  };

  const handleGigaFalse = () => {
    setGigaActive(false);
  };

  const [folioActive, setFolioActive] = useState(false);

  const handleFolioTrue = () => {
    setFolioActive(true);
  };

  const handleFolioFalse = () => {
    setFolioActive(false);
  };

  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl font-medium pt-20 pb-20 grid lg:grid-cols-2 gap-20 px-12"
    >
      <div
        className="text-purple-950 font-semibold text-lg grid content-center bg-white hover:bg-purple-950 hover:text-white cursor-pointer justify-items-center bg-white min-h-52"
        onMouseOver={handleGigaTrue}
        onMouseOut={handleGigaFalse}
      >
        {gigaActive ? (
          <div className="font-normal text-base p-4 md:p-14">
            Navigating the complex digital landscape can be daunting. That's
            where GigaDesk comes in. We're your trusted partner, guiding you
            through every step of your digital journey. From robust platforms
            and ironclad security to insightful data analytics and impactful
            SEO, we've got you covered. Our team of experts is committed to
            simplifying complexity. Whether you need to outsource tasks or
            harness the power of the cloud, we're here to provide tailored
            solutions that drive your business forward. With GigaDesk, you're
            not just a client; you're a partner. Let's build a brighter digital
            future together.<a className="underline" href="https://gigadesk.org/"> Visit us at gigadesk.org. </a>
          </div>
        ) : (
          "GigaDesk"
        )}
      </div>
      <div
        className="text-blue-700 font-semibold text-lg grid content-center bg-white hover:bg-blue-700 hover:text-white cursor-pointer justify-items-center bg-white min-h-52"
        onMouseOver={handleFolioTrue}
        onMouseOut={handleFolioFalse}
      >
        {folioActive ? (
          <div className="font-normal text-base p-4 md:p-14">
            Navigating the complex financial landscape can be overwhelming. From intricate tax
            strategies to robust auditing practices and insightful management
            consulting, we're here to simplify complexity and empower your
            business. Our team of seasoned experts will guide you through every
            step of your financial journey, ensuring compliance, optimizing
            operations, and driving growth. By leveraging our deep understanding
            of tax laws and regulations, we'll help you minimize tax
            liabilities, avoid costly penalties, and maximize your financial
            returns. With Folio, you can rest assured that your financial future
            is secure. <a className="underline" href="https://www.folioac.com/">Visit us at folioac.com. </a>
          </div>
        ) : (
          "Folio"
        )}
      </div>
    </div>
  );
}
