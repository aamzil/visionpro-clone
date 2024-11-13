import React from "react";
import design from "../assets/design.png";
function Design() {
  return (
    <div className="py-20">
      <div className="grid justify-center text-center">
        <h3 className="text-2xl mb-3">Design</h3>
        <h1 className="text-4xl lg:text-5xl  font-bold">Designed by Apple</h1>
        <p className="max-w-[700px] text-base lg:text-xl mt-10 text-neutral-300 px-5">
          Apple Vision Pro is the result of decades of experience designing
          high‑performance, mobile, and wearable devices — culminating in the
          most ambitious product Apple has ever created. Apple Vision Pro
          integrates incredibly advanced technology into an elegant, compact
          form, resulting in an amazing experience every time you put it on.
        </p>
      </div>

      <img
        className="ml-auto mr-auto mt-20 w-[80%] lg:w-auto"
        src={design}
        alt=""
        srcset=""
      />
    </div>
  );
}

export default Design;
