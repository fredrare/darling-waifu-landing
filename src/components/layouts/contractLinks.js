import React from "react";

const ContractLinks = () => {
  // TODO: put the links
  const coming = "Coming soon!";
  const strings = {
    audit: ["Contract audit", coming],
    address: ["Contract address", coming],
  };

  return (
    <div className="absolute -left-28 md:-left-32 top-56 flex flex-row divide-x-2 divide-bordergray space-x-8 transform -rotate-90 h-6 md:h-8">
      <div className="text-md md:text-lg font-bold text-center">
        {strings.audit[0]}
      </div>
      <div className="text-md md:text-lg font-bold text-center pl-8">
        {strings.address[0]}
      </div>
    </div>
  );
};

export default ContractLinks;
