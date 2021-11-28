import React from "react";
import Button from "../elements/button";
import lock from "../../assets/vector/lock.svg";
import paper from "../../assets/vector/paper.svg";
import isologo from "../../assets/vector/isologo.svg";
import paperdoc from "../../assets/docs/darling-waifu-paper.pdf";

const CTA = () => {
  return (
    <div className="absolute lg:relative top-0 left-0 w-full lg:w-1/2 flex flex-col items-center mx-auto my-auto h-full pt-third md:pt-32 lg:pt-32 md:px-8 lg:px-6">
      <div className="w-full md:w-3/4 px-20 md:px-0 lg:w-full flex flex-center content-center">
        <img
          className="lg:transform lg:scale-110"
          alt="Darling Waifu NFT Game"
          src={isologo}
        />
      </div>
      <div className="w-full mt-action lg:mt-6 mb-8 text-center font-bold text-xl bright-text">
        Play to Business NFT
      </div>
      <div className="w-full -px-4 flex flex-row space-x-4 content-center items-center justify-center">
        <Button link={paperdoc} title="Read our litepaper">
          <div className="flex flex-row">
            <img src={paper} alt="Litepaper" className="mr-4" />
            <div>Litepaper</div>
          </div>
        </Button>
        <Button link="https://docs.google.com/forms/d/e/1FAIpQLSflzR0MfmpqUBO7ti2mgIvyY0iigDsojs4dM60X1E33RzkVjQ/viewform" title="Join our private sale">
          <div className="flex flex-row">
            <img src={lock} alt="Private sale" className="mr-4" />
            <div>Private sale</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CTA;
