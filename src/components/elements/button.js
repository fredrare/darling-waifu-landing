import React from "react";

const Button = ({ link, children }) => {
  // TODO: play sounds
  const playPressSound = () => {};
  const playReleaseSound = () => {};
  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : ''}
      rel="noreferrer"
      className={`h-12 px-6 py-3 text-center bg-gradient-to-b from-primaryskyblue to-primarypeach
        rounded-full border border-bordergray shadow-button transition duration-100 transform hover:scale-105 active:scale-95
        active:shadow-buttonpressed
        font-bold`}
      onClick={playPressSound}
      onMouseUp={playReleaseSound}
    >
      <div className="w-full h-full filter drop-shadow-brighttext">
        {children}
      </div>
    </a>
  );
};

export default Button;
