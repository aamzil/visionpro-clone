import React from "react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-center items-center h-full">
        <div className="  w-[80%]">
          <h1 className="text-2xl font-bold text-center mb-5">Oops!</h1>
          <p className="text-xl text-center mb-5">
            It's looks like there was an error ordering the product.
          </p>
          <button className="flex justify-center ml-auto mr-auto">
            <Link
              to="/"
              className="text-lg duration-300 px-5 py-2 rounded-xl bg-white hover:bg-neutral-300 text-black"
            >
              Back to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
