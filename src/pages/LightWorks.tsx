import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LightWorks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/intranet");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/iita_logo.png" alt="" className="w-64 h-32  object-contain" />
      <img
        src="/fireworks.gif"
        alt="Confetti 🎉"
        className="w-[100vw] h-[100vh]"
      />
    </div>
  );
};

export default LightWorks;
