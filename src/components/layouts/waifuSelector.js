import React from "react";
import WaifuButton from "../elements/waifuButton";

const WaifuSelector = ({ callback, waifus, active }) => {
  // This is the cleanest possible way I could figure out hahahaha
  return (
    <div className="relative w-full pb-full hidden lg:block">
      <div className="absolute top-hexya left-hexxc contrast-50 z-50">
        <WaifuButton
          callback={callback}
          active={active === 0}
          waifu={waifus[0]}
          position={0}
        />
      </div>
      <div className="absolute top-hexyb left-hexxb z-50">
        <WaifuButton
          callback={callback}
          active={active === 1}
          waifu={waifus[1]}
          position={1}
        />
      </div>
      <div className="absolute top-hexyc left-hexxa z-50">
        <WaifuButton
          callback={callback}
          active={active === 2}
          waifu={waifus[2]}
          position={2}
        />
      </div>
      <div className="absolute top-hexyd left-0 z-50">
        <WaifuButton
          callback={callback}
          active={active === 3}
          waifu={waifus[3]}
          position={3}
        />
      </div>
      <div className="absolute top-hexye left-hexxa z-50">
        <WaifuButton
          callback={callback}
          active={active === 4}
          waifu={waifus[4]}
          position={4}
        />
      </div>
      <div className="absolute top-hexyf left-hexxb z-50">
        <WaifuButton
          callback={callback}
          active={active === 5}
          waifu={waifus[5]}
          position={5}
        />
      </div>
      <div className="absolute top-hexyg left-hexxc z-50">
        <WaifuButton
          callback={callback}
          active={active === 6}
          waifu={waifus[6]}
          position={6}
        />
      </div>
    </div>
  );
};

export default WaifuSelector;
