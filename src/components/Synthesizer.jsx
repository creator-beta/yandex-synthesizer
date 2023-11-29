import { useEffect } from "react";

const Synthesizer = () => {
  const playSound = (sound) => {
    const audio = new Audio(`/${sound}.mp3`);
    audio.play();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();
      if (["a", "s", "d"].includes(key)) {
        playSound(key);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="synthesizer">
      <div className="key" onClick={() => playSound("a")}>
        A
      </div>
      <div className="key" onClick={() => playSound("s")}>
        S
      </div>
      <div className="key" onClick={() => playSound("d")}>
        D
      </div>
    </div>
  );
};

export default Synthesizer;
