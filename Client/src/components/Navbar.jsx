import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [Nav, HandleNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY <= 100) {
      HandleNav(true);
    } else {
      HandleNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={`  absolute transition-all ease-in duration-200  w-[100%] z-50 flex items-center justify-between p-5  ${
        Nav && "fixed"
      }`}
    >
      {/* Nav Links */}
      <div className="flex items-center gap-5 text-slate-50 font-extralight  ">
        <Link href="" className="font-bold flex gap-1 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>apple_fill</title>
            <g id="apple_fill" fill="none">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
              <path
                fill="#FFF"
                d="m13.064 6.685.745-.306c.605-.24 1.387-.485 2.31-.33 1.891.318 3.195 1.339 3.972 2.693.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263-.442 1.342-1.078 2.581-1.831 3.581-.744.988-1.652 1.808-2.663 2.209-.66.26-1.368.163-2.045-.005l-.402-.107-.597-.173c-.271-.079-.55-.147-.824-.147-.275 0-.553.068-.824.147l-.597.173-.402.107c-.677.168-1.386.266-2.045.005-1.273-.504-2.396-1.68-3.245-3.067a13.453 13.453 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775.74-1.521 2.096-2.705 4.163-3.053.84-.141 1.562.048 2.14.265l.331.13.584.241c.4.157.715.249 1.064.249.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707.354.353.27 1.852-.707 2.828-.976.976-2.475 1.06-2.828.707-.354-.353-.27-1.852.707-2.828"
              />
            </g>
          </svg>
          Apple Store
        </Link>
        <div className="hidden lg:flex lg:items-center lg:gap-5">
          <Link href="">Overview</Link>
          <Link href="">Tech Specs</Link>
          <Link href="">Book a demo</Link>
        </div>
      </div>

      <Link
        to="/shop"
        className="px-5 py-2 text-sm rounded-full bg-blue-500 text-white"
      >
        Buy now
      </Link>
    </div>
  );
}

export default Navbar;
