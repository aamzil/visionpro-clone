import React, { useEffect, useState } from "react";
import Heropage from "../components/Heropage";
import Features from "../components/Features";
import vision from "../assets/large.mp4";
import vision2 from "../assets/large3.mp4";
import vision3 from "../assets/large2.mp4";
import FeauturesDetails from "../components/FeauturesDetails";
import Design from "../components/Design";
import Navbar from "../components/Navbar";

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update the mouse position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <div
        className="overflow-x-hidden z-50 pointer-events-none absolute w-64 h-64 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 transition-all ease-in-out duration-100"
        style={{
          transform: `translate(${position.x - 96}px, ${position.y - 96}px)`,
        }}
      ></div>
      <Navbar />
      <Heropage />
      <Features
        title="Entertainment"
        subtitle="The ultimate theater. Wherever you are."
        video={vision}
      />
      <FeauturesDetails
        title="A new dimension for entertainment."
        desc="Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are — on a long flight or the couch at home."
      />

      <Features
        title="Productivity"
        subtitle="A workspace with infinite space."
        video={vision2}
      />
      <FeauturesDetails
        title="Discover new ways to work."
        desc="Apple Vision Pro gives you limitless space to get things done. Organize everything you need anywhere around you, in any way you like. Seamlessly bring in your Mac workflows using Mac Virtual Display. Connect a Magic Keyboard, a Magic Trackpad, and other Bluetooth accessories to expand how you navigate. And with SharePlay in FaceTime, you can collaborate with colleagues using apps together in real time."
      />

      <Features
        title="Photos and Videos"
        subtitle="Be in the moment. All over again."
        video={vision3}
      />
      <FeauturesDetails
        title="Your memories come alive."
        desc="Apple Vision Pro is Apple’s first 3D camera. You can capture magical spatial photos and spatial videos in 3D, then relive those cherished moments like never before with immersive Spatial Audio. Your existing library of photos and videos looks incredible at remarkable scale — and now you can transform your 2D photos into spatial photos with just a tap. Even panoramas wrap around you — making you feel like you’re standing right where you took them. You can also take spatial videos with iPhone 16 Pro, iPhone 16, or iPhone 15 Pro, as well as spatial photos with iPhone 16 Pro or iPhone 16, then view them on Apple Vision Pro."
      />

      <Design />
    </div>
  );
}

export default Home;
