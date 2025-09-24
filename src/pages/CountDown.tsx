import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CountDown = () => {
  const location = useLocation();
  const { startCountdown } = location.state || { startCountdown: false };

  const [countdown, setCountDown] = useState(5);
  const navigate = useNavigate();
  const audio = new Audio("/beep.wav");

  useEffect(() => {
    const interval = setInterval(() => {
      if (startCountdown) {
        audio.play();
        setCountDown((prevState) => prevState - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown <= 0) {
      navigate("/lightworks");
    }
  }, [countdown]);

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/iita_logo.png"
        alt="IITA Logo"
        className="w-64 h-32 object-contain"
      />
      <p
        key={countdown} // 👈 important: re-triggers animation each time number changes
        className="animated-count text-black font-black text-[200px]"
      >
        {countdown}
      </p>
    </div>
  );
};

export default CountDown;
