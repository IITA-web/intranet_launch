import { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowDimensions } from "../hooks/useWindowDimension";

const LightWorks = () => {
  const { width, height } = useWindowDimensions();
  const audio = new Audio("/clap.wav");
  audio.play();
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "https://cgiar.sharepoint.com/sites/IITAInfoHub";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/iita_logo.png" alt="" className="w-64 h-32  object-contain" />

      <Confetti width={width} height={height} />
    </div>
  );
};

export default LightWorks;
