import React, { useState, useEffect } from "react";

const ContractLinks = () => {
  // TODO: put the links
  const coming = "Coming soon!";
  const strings = {
    audit: ["Contract audit", coming],
    address: ["Contract address", coming],
  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(1 - index);
    }, 3000);
  }, [index]);

  return (
    <div className="absolute -left-32 md:-left-32 top-56 flex flex-row divide-x-2 divide-bordergray space-x-8 transform -rotate-90 h-6 md:h-8">
      <div className="text-md md:text-lg font-bold text-center">
        {strings.audit[index]}
      </div>
      <div className="text-md md:text-lg font-bold text-center pl-8">
        {strings.audit[index]}
      </div>
    </div>
  );
};

export default ContractLinks;
