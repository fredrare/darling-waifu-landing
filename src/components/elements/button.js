import React, { useState } from "react";
import buttonSounds from "../../assets/music/button.mp3";
import useSound from "use-sound";

const Button = ({ link, children }) => {
  const [canPlay, setCanPlay] = useState(false);
  const [play, { stop }] = useSound(buttonSounds, {
    sprite: {
      press: [50, 100],
      release: [200, 300],
    },
    autoUnlock: false,
    onunlock: () => setCanPlay(true),
  });

  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : ""}
      rel="noreferrer"
      className={`h-12 px-6 py-3 text-center bg-gradient-to-b from-primaryskyblue to-primarypeach
        rounded-full border border-bordergray shadow-button transition duration-100 transform hover:scale-105 active:scale-95
        active:shadow-buttonpressed
        font-bold`}
      onMouseEnter={() => {
        if (canPlay) {
          play({ id: "press" });
          stop({ id: "release" });
        }
      }}
      onMouseLeave={() => {
        if (canPlay) {
          play({ id: "release" });
          stop({ id: "press" });
        }
      }}
      onMouseDown={() => {
        if (canPlay) play({ id: "press" });
      }}
    >
      <div className="w-full h-full filter drop-shadow-brighttext">
        {children}
      </div>
    </a>
  );
};

export default Button;
