import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";

export default function AboutUs() {
  return (
    <div>
      <div
        style={{ fontFamily: "Graphik" }}
        className="text-xl md:text-xxxl font-medium px-12"
      >
        About Us
        <p className="text-lg pt-4 font-normal">
          Throw in facts such as: When was the school founded?, Which type of
          school is it? Under what program was the school founded?, Why was the
          school founded?, Which is the founding entity?, Which is the funding
          entity?, What is the KNEC School centre code?, Where is the school located?.
        </p>
        <Service1
          name="Motto"
          description="Explain the school motto"
          image="https://images.ctfassets.net/vjt7hlwnzx7i/3AtRMkrCAErmKcNSp4iX92/3b52ee9617d3f825ac8d9421fc4015d1/pexels-pixabay-264636.jpg"
        />
        <Service2
          name="Mission"
          description="Explain the school mission"
          image="https://images.ctfassets.net/vjt7hlwnzx7i/4E0jbI9BJhpSNPx7iK9XfD/9f7692ce67c5b9e8ee5df8edff131f2e/pexels-katerina-holmes-5905918.jpg"
        />
        <Service1
          name="Vision"
          description="Explain the school vision"
          image="https://images.ctfassets.net/vjt7hlwnzx7i/4eoXXwzjfXATKK5FxdBFVy/778bb3664cbf209748d085cda0a697d7/pexels-elevate-1267361.jpg"
        />
      </div>
    </div>
  );
}
