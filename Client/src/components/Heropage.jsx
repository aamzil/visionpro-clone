import React from "react";
import glasses from "../assets/hero-glasses.png";

function Heropage() {
  // const styles = {
  //   backgroundImage: `url("https://cdn4.beautinow.com/wp-content/uploads/2023/08/How_to_Wear_Perfume_11a8bd52a3cf45b084fb4030c456894e.jpgv=1691390641")`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "80vh",
  // };
  return (
    <div className="grid place-content-center text-center h-[100vh] bg-[#030306]">
      <img src={glasses} alt="" srcset="" />
      <h1 className="text-neutral-50 text-5xl ">Apple Vision Pro</h1>
      <p className="text-neutral-50 mt-2 text-[15px]">
        From $3499 or $291.58/mo.per month for 12 mo.*
      </p>

      {/* <div className="max-w-md text-center grid justify-center ml-auto mr-auto">
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          nisi quibusdam, vero dolores accusantium consectetur eligendi
          molestias sapiente delectus consequuntur!
        </p>
      </div> */}

      <div className="absolute bottom-2 flex justify-center w-[100%] text-neutral-50 text-center animate-bounce ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <title>down_line</title>
          <g id="down_line" fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
            <path
              fill="#F5F5F5"
              d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414l-5.657 5.657Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Heropage;
