import React from "react";

function Features({ title, subtitle, video }) {
  return (
    <div className="grid place-content-center  h-[100vh] ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[100%] h-[100vh] z-0 absolute  object-cover"
      >
        <source src={video} />
      </video>

      <div className="z-30 text-center max-w-[530px] px-16 lg:px-0 ">
        <h1 className=" text-2xl lg:text-3xl">{title}</h1>
        <p className="text-4xl lg:text-6xl font-bold">{subtitle}</p>
      </div>
    </div>
  );
}

export default Features;
