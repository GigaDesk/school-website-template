import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";

export default function Subjects() {
  return (
    <div>
      <div
        style={{ fontFamily: "Graphik" }}
        className="text-xl md:text-xxxl font-medium px-12"
      >
        <span className="text-green-950">What</span> we teach
        <p className="text-lg pt-4 font-normal">
          Answer questions like: What curriculum they offered?, What Grade to
          What Grade/class is available?, Which is the mode of teaching? Which
          subjects they teach?.
        </p>
        <Service1
          name="Subject 1"
          description="Explain Subject 1"
          image="https://images.ctfassets.net/vjt7hlwnzx7i/7BJCvQsRigASaD1OrAyCBS/5df6e00aad6231c8e1bbadf656c4c3c2/pexels-darlene-alderson-4389795.jpg"
        />
        <Service2
          name="Subject 2"
          description="Explain Subject 2"
          image="https://images.ctfassets.net/vjt7hlwnzx7i/1O4P5HbSkzLOU2D8ZI9Q5z/22a660ea0e0c12d43d725512a9220113/pexels-leeloothefirst-8962476.jpg"
        />
        <Service1
          name="Subject 3"
          description="Explain Subject 3"
          image="https://images.ctfassets.net/vjt7hlwnzx7i/k9ZT2CIm8I7xgReTAL0qb/5578a5e2d1e8d6ba5467f92302e254e8/pexels-kindelmedia-7688360.jpg"
        />
      </div>
    </div>
  );
}
