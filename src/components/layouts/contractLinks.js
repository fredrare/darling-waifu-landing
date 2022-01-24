import React from "react";

const ContractLinks = () => {
  return (
    <div className="absolute -left-28 md:-left-32 top-56 md:top-72 flex flex-row divide-x-2 divide-bordergray space-x-8 transform -rotate-90 h-6 md:h-8 z-50">
      <div className="text-md md:text-lg font-bold text-center">
        <a href="https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_DARLING%20WAIFU.pdf" rel="noreferrer" target="_blank">
          Contract audit
        </a>
      </div>
      <div className="text-md md:text-lg font-bold text-center pl-8">
        Contract address
      </div>
    </div>
  );
};

export default ContractLinks;
