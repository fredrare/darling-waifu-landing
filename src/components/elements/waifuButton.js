import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Hexagon from "./hexagon";

const WaifuButton = ({
  waifu: {
    head: { img },
    name,
  },
  position,
  callback,
  active,
}) => {
  return (
    <div
      className="filter drop-shadow-md hover:drop-shadow-lg cursor-pointer"
      onClick={() => callback(position)}
    >
      <Hexagon
        size="20"
        className={`${active ? "bg-white" : "bg-almostwhite"} hover:bg-white`}
        title={name}
      >
        <GatsbyImage
          loading="eager"
          imgClassName={`object-contain ${
            active ? "" : "filter -hue-rotate-30 hover:hue-rotate-0"
          }`}
          alt={name}
          image={img}
        />
      </Hexagon>
    </div>
  );
};

export default WaifuButton;
