"use client";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Player
        autoplay
        loop
        src="/animation/animacion.json"
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default LottieAnimation;
