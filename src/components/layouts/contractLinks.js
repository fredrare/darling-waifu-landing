import React from "react";

const ContractLinks = () => {
  return (
    <div className="absolute -left-28 md:-left-32 top-72 flex flex-row divide-x-2 divide-bordergray space-x-8 transform -rotate-90 h-6 md:h-8 z-50">
      <div className="text-md md:text-lg font-bold text-center">
        Contract audit
      </div>
      <div className="text-md md:text-lg font-bold text-center pl-8">
        Contract address
      </div>
    </div>
  );
};

export default ContractLinks;
