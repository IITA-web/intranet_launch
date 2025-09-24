import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleBuzzerClick = () => {
    const audio = new Audio("/click.wav");

    // Ensure metadata is loaded before accessing duration
    audio.addEventListener("loadedmetadata", () => {
      const duration = audio.duration * 1000; // convert seconds → ms

      audio.play();

      // Navigate after the sound finishes
      setTimeout(() => {
        navigate("/countdown", { state: { startCountdown: true } });
      }, duration);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/iita_logo.png" alt="" className="w-64 h-32 object-contain" />
      <button
        onClick={handleBuzzerClick}
        className="lg:w-[500px] h-[150px] mt-10 bg-red-500 border-[20px] border-red-600 rounded-full px-10 py-4 hover:bg-red-800 hover:border-red-700 transition-all duration-1000"
      >
        <p className="text-white text-5xl font-bold text-center">
          Intranet Launch
        </p>
      </button>
    </div>
  );
};

export default Start;
