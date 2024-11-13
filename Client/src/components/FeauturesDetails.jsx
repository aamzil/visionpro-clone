import React from "react";

function FeauturesDetails({ title, desc }) {
  return (
    <div className="lg:flex grid gap-y-10 justify-between p-10 pb-24 bg-neutral-50 text-black ">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="max-w-[600px] text-lg lg:text-xl">{desc}</p>
    </div>
  );
}

export default FeauturesDetails;
