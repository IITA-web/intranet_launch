import { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowDimensions } from "../hooks/useWindowDimension";

const LightWorks = () => {
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "https://cgiar.sharepoint.com/sites/IITAInfoHub";
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/iita_logo.png" alt="" className="w-64 h-32  object-contain" />
      {/* <img
        src="/fireworks.gif"
        alt="Confetti 🎉"
        className="w-[100vw] h-[100vh] object-contain"
      /> */}

      <Confetti width={width} height={height} />
    </div>
  );
};

export default LightWorks;
