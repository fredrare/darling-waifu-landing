import React, { useState, useEffect } from "react";
import Button from "../elements/button";
import lock from "../../assets/vector/lock.svg";
import paper from "../../assets/vector/paper.svg";
import isologo from "../../assets/vector/isologo.svg";

const CTA = () => {
  // TODO: Add links
  const coming = "Soon!";
  const strings = {
    paper: ["Private sale", coming],
    sale: ["Litepaper", coming],
  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(1 - index);
    }, 2000);
  }, [index]);

  return (
    <div className="absolute lg:relative top-0 left-0 w-full lg:w-1/2 flex flex-col items-center mx-auto my-auto h-full pt-36 md:pt-32 lg:pt-32 md:px-8 lg:px-6">
      <div className="w-full md:w-3/4 px-20 md:px-0 lg:w-full flex flex-center content-center">
        <img
          className="lg:transform lg:scale-110"
          alt="Darling Waifu NFT Game"
          src={isologo}
        />
      </div>
      <div className="w-full mt-third lg:mt-6 mb-8 text-center font-bold text-xl bright-text">
        Play to business NFT
      </div>
      <div className="w-full -px-4 flex flex-row space-x-4 content-center items-center justify-center">
        <Button>
          <div className="flex flex-row">
            <img src={paper} alt="Litepaper" className="mr-4" />
            <div>{strings.paper[index]}</div>
          </div>
        </Button>
        <Button>
          <div className="flex flex-row">
            <img src={lock} alt="Private sale" className="mr-4" />
            <div>{strings.sale[index]}</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CTA;
