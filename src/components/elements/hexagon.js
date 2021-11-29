import React, { useState } from "react";
import useSound from "use-sound";
import hoverSound from "../../assets/music/hexover.mp3";

const Hexagon = ({
  children,
  size,
  style,
  className,
  link,
  callback,
  hasSound,
  title,
}) => {
  const [canPlay, setCanPlay] = useState(false);
  const [play, { stop }] = useSound(hoverSound, {
    volume: 1,
    duration: 200,
    autoUnlock: false,
    onunlock: () => setCanPlay(true),
  });

  const soundActions = {
    play: () => (hasSound && canPlay ? play() : {}),
    stop: () => (hasSound && canPlay ? stop() : {}),
  };

  return (
    <div className={`relative w-${size} pb-${size}`}>
      {link ? (
        <a
          href={link || "#"}
          rel="noreferrer"
          target={link ? "_blank" : ""}
          title={title}
          onMouseEnter={soundActions.play}
          onMouseLeave={soundActions.stop}
          className={`absolute top-0 left-0 hexagon overflow-hidden w-full h-full flex flex-center content-center ${className}`}
          style={style}
        >
          <div className="m-auto">{children}</div>
        </a>
      ) : (
        <div
          className={`absolute top-0 left-0 hexagon overflow-hidden w-full h-full flex flex-center content-center ${className}`}
          style={style}
          onClick={callback}
          onMouseEnter={soundActions.play}
          onMouseLeave={soundActions.stop}
        >
          <div className="m-auto">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Hexagon;
