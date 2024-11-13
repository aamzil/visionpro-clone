import React, { useState } from "react";
import vision from "../assets/vision.mp4";
import ShopNavbar from "../components/ShopNavbar";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);

function Shop() {
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [isAppleCareSelected, setIsAppleCareSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const storageOptions = [
    {
      id: 1,
      size: "256GB",
      description: "From $3499 or $291.58/mo. for 12 mo.",
      price: 349900,
    },
    {
      id: 2,
      size: "512GB",
      description: "From $3699 or $308.25/mo. for 12 mo.",
      price: 369900,
    },
    {
      id: 3,
      size: "1TB",
      description: "From $3899 or $324.91/mo. for 12 mo.",
      price: 389900,
    },
  ];

  const basePrice = 349900;
  const appleCarePrice = 49900;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const totalPrice =
    (selectedStorage
      ? storageOptions.find((option) => option.id === selectedStorage).price
      : basePrice) + (isAppleCareSelected ? appleCarePrice : 0);

  const handleProceedToPayment = async () => {
    console.log("first", backendUrl);
    // if (selectedStorage === null) {
    //   setMessage("Please select a storage option.");
    // } else {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch(`${backendUrl}/create-payment`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ amount: totalPrice }),
    //     });

    //     if (!response.ok) {
    //       throw new Error("Failed to create payment intent");
    //     }

    //     const data = await response.json();
    //     window.location.href = data.url;
    //   } catch (error) {
    //     console.error("Error creating payment intent:", error);
    //     alert("An error occurred. Please try again later.");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // }
  };

  return (
    <div>
      <ShopNavbar />
      <div className="h-screen lg:flex grid w-full bg-white text-black">
        <div className="lg:w-3/5 w-full h-[100%] lg:h-screen grid place-content-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="lg:w-[90%] w-full rounded-xl ml-auto mr-auto lg:mt-20"
          >
            <source src={vision} />
          </video>
        </div>

        <div className="lg:w-2/5 w-full lg:h-screen h-full lg:overflow-hidden lg:overflow-y-scroll lg:pb-10">
          <div className="mx-8 lg:mt-40 mt-10">
            <div className="lg:mt-20 lg:mb-10">
              <h2 className="text-xl lg:text-3xl text-neutral-400">
                <span className="font-bold text-black">Storage. </span>
                Choose how much space you’ll need.
              </h2>

              {storageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedStorage(option.id)}
                  className={`duration-200 w-full flex justify-between items-center border-[1px] rounded-xl p-5 mt-4 ${
                    selectedStorage === option.id
                      ? "bg-black text-white text-xl"
                      : "text-neutral-400 border-neutral-400"
                  }`}
                >
                  <h3 className="font-bold">{option.size}</h3>
                  <p className="max-w-[150px] text-sm text-right">
                    {option.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-20 mb-10">
              <h2 className="text-xl lg:text-3xl text-neutral-400">
                <span className="font-bold text-black">
                  AppleCare+ coverage.{" "}
                </span>
                Protect your new Apple Vision Pro
              </h2>

              <button
                onClick={() => setIsAppleCareSelected(true)}
                className={`duration-200 w-full grid border-[1px] rounded-xl p-5 mt-4 ${
                  isAppleCareSelected
                    ? "bg-black text-white"
                    : "text-neutral-400 border-neutral-400"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">Add AppleCare+</h3>
                  <p className="max-w-[150px] text-sm text-right">
                    $499.00 or $24.99/mo
                  </p>
                </div>

                <hr className="border-1 border-neutral-300 mt-5" />
                <div className="grid text-left mt-5">
                  <li>Unlimited repairs for accidental damage protection</li>
                  <li>Apple-certified service and support</li>
                  <li>Express Replacement Service</li>
                  <li>24/7 priority access to Apple experts</li>
                </div>
              </button>

              <button
                onClick={() => setIsAppleCareSelected(false)}
                className={`w-full flex justify-between items-center border-[1px]  ${
                  !isAppleCareSelected
                    ? "bg-black text-white"
                    : "text-neutral-400 border-neutral-400"
                } rounded-xl p-5 mt-4`}
              >
                <h3 className="font-bold">No AppleCare+</h3>
              </button>
            </div>

            <div className="mt-20 mb-10">
              <h2 className="text-xl lg:text-3xl text-black font-bold">
                From $3499 or <br /> $291.58/mo. for 12 mo.*
              </h2>
            </div>

            <hr className="border-1 border-neutral-300 mt-5" />

            <p className={`mt-5 ease-in-out duration-300`}>{message}</p>
            <button
              onClick={handleProceedToPayment}
              disabled={isLoading}
              className={`w-full ${
                isLoading ? "bg-gray-500" : "bg-blue-600"
              } text-neutral-100 rounded-xl p-3 mt-5 mb-10 hover:bg-blue-500 duration-200`}
            >
              {isLoading ? "Processing..." : "Proceed to payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
