import React, { useState, useEffect } from "react";
import Hexagon from "../elements/hexagon";
import { GatsbyImage } from "gatsby-plugin-image";

const WaifuLayout = ({ waifus }) => {
  const [waifu, setWaifu] = useState({
    body: waifus[0]?.node?.body?.img,
    name: waifus[0]?.node?.name,
  });

  useEffect(() => {
    let i = 0;

    setInterval(() => {
      i++;
      setWaifu({
        body: waifus[i % waifus.length].node.body.img,
        name: waifus[i % waifus.length].node.name,
      });
    }, 4000);
  }, [waifus]);

  return (
    <div className="w-full lg:w-1/2 px-12 lg:px-0 flex flex-row justify-center">
      <div className="relative w-full md:w-3/4 lg:w-full">
        <div className="absolute top-4 lg:top-14 left-0 w-full h-full mx-auto filter drop-shadow-md">
          <Hexagon
            size="full"
            isResponsive={true}
            classNames=" bg-almostwhite bg-opacity-80"
          />
        </div>
        <div className="absolute w-full top-0 left-0 transform transition duration-200 lg:hover:scale-95">
          <GatsbyImage
            loading="eager"
            className="w-full flex flex-center items-center content-center lg:w-1/3 overflow-visible"
            imgClassName="mx-auto w-4/5 lg:w-1/3 animate-float"
            style={{
              width: "100%",
              overflow: "visible",
            }}
            alt={waifu.name}
            image={waifu.body}
          />
        </div>
      </div>
    </div>
  );
};

export default WaifuLayout;
