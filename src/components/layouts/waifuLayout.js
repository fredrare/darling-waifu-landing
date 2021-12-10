import React, { useState, useEffect } from "react";
import Hexagon from "../elements/hexagon";
import { GatsbyImage } from "gatsby-plugin-image";
import WaifuSelector from "./waifuSelector";

const WaifuLayout = ({ waifus }) => {
  const [waifu, setWaifu] = useState({
    position: 0,
    body: waifus[0]?.node?.body?.img,
    name: waifus[0]?.node?.name,
  });
  const [hasJustChangedWaifu, setHasJustChangedWaifu] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState();

  useEffect(() => {
    if (!hasJustChangedWaifu) {
      setCurrentTimeout(
        setTimeout(() => {
          const pos = waifu.position + 1;
          setWaifu({
            position: pos % waifus.length,
            body: waifus[pos % waifus.length].node.body.img,
            name: waifus[pos % waifus.length].node.name,
          });
        }, 4000)
      );
    }
  }, [waifus, waifu.position, hasJustChangedWaifu]);

  const changeWaifu = (pos) => {
    clearTimeout(currentTimeout);
    setHasJustChangedWaifu(true);
    setWaifu({
      position: pos % waifus.length,
      body: waifus[pos % waifus.length].node.body.img,
      name: waifus[pos % waifus.length].node.name,
    });
    setCurrentTimeout(setTimeout(() => setHasJustChangedWaifu(false), 4000));
  };

  return (
    <div className="w-full lg:w-1/2 px-12 lg:px-0 flex flex-row justify-center">
      <div className="relative w-full md:w-3/4 lg:w-full">
        <div className="absolute top-4 lg:top-14 left-0 w-full h-full mx-auto filter drop-shadow-md">
          <Hexagon
            size="full"
            isResponsive={true}
            className="bg-almostwhite bg-opacity-60"
          />
        </div>
        <div className="absolute top-4 lg:top-14 left-0 w-full h-full mx-auto">
          <Hexagon
            size="full"
            isResponsive={true}
            className="bg-almostwhite bg-opacity-0 bgblur"
          />
        </div>
        <div className="absolute top-0 lg:top-6 -left-6 w-full h-full mx-auto">
          <WaifuSelector
            active={waifu.position}
            waifus={waifus.map((x) => x.node)}
            callback={changeWaifu}
          />
        </div>
        <div className="absolute w-full left-0 -top-4 transform transition duration-200 scale-90 lg:scale-75 lg:hover:scale-90">
          <GatsbyImage
            loading="eager"
            className="w-full flex flex-center items-center content-center lg:w-1/3 overflow-visible"
            imgClassName="mx-auto my-auto w-4/5 lg:w-1/3 animate-float object-contain pb-32"
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
