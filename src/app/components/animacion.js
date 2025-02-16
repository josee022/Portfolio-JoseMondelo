import { Player } from "@lottiefiles/react-lottie-player";

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
