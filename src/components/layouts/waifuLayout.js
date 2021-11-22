import React, { useState, useEffect } from "react";
import fedoraBody from "../../assets/img/waifus/fedora.png";
import anjaBody from "../../assets/img/waifus/anja.png";
import aryaBody from "../../assets/img/waifus/arya.png";
import kaguyaBody from "../../assets/img/waifus/kaguya.png";
import mashaBody from "../../assets/img/waifus/masha.png";
import nikitaBody from "../../assets/img/waifus/nikita.png";
import trishnaBody from "../../assets/img/waifus/trishna.png";
import umekoBody from "../../assets/img/waifus/umeko.png";
import fedoraHead from "../../assets/img/waifus/fedora.png";
import anjaHead from "../../assets/img/waifus/anja.png";
import aryaHead from "../../assets/img/waifus/arya.png";
import kaguyaHead from "../../assets/img/waifus/kaguya.png";
import mashaHead from "../../assets/img/waifus/masha.png";
import nikitaHead from "../../assets/img/waifus/nikita.png";
import trishnaHead from "../../assets/img/waifus/trishna.png";
import umekoHead from "../../assets/img/waifus/umeko.png";
import Hexagon from "../elements/hexagon";

const WaifuLayout = () => {
  const [waifu, setWaifu] = useState({
    body: fedoraBody,
    face: fedoraHead,
    name: "fedora",
  });

  useEffect(() => {
    const waifus = {
      fedora: {
        body: fedoraBody,
        face: fedoraHead,
        name: "fedora",
      },
      anja: {
        body: anjaBody,
        face: anjaHead,
        name: "anja",
      },
      arya: {
        body: aryaBody,
        face: aryaHead,
        name: "arya",
      },
      kaguya: {
        body: kaguyaBody,
        face: kaguyaHead,
        name: "kaguya",
      },
      masha: {
        body: mashaBody,
        face: mashaHead,
        name: "masha",
      },
      nikita: {
        body: nikitaBody,
        face: nikitaHead,
        name: "nikita",
      },
      trishna: {
        body: trishnaBody,
        face: trishnaHead,
        name: "trishna",
      },
      umeko: {
        body: umekoBody,
        face: umekoHead,
        name: "umeko",
      },
    };
    const keyWaifus = Object.keys(waifus);
    let i = 1;

    setInterval(() => {
      setWaifu(waifus[keyWaifus[i++ % keyWaifus.length]]);
    }, 2000);
  }, []);

  return (
    <div className="w-full lg:w-1/2 px-12 lg:px-0 flex flex-row justify-center">
      <div className="relative w-full md:w-3/4 lg:w-full">
        <div className="absolute top-0 left-0 w-full h-full mx-auto">
          <Hexagon
            size="full"
            isResponsive={true}
            classNames=" bg-almostwhite bg-opacity-80"
          />
        </div>
        <div className="absolute w-full top-0 left-0">
          <div className="flex flex-center items-center">
            <img
              className="mx-auto w-full lg:w-4/5 animate-float"
              src={waifu.body}
              alt={waifu.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaifuLayout;
