import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full flex flex-row md:px-24 pt-20 justify-center pb-fuller md:pb-mdfooter lg:pb-48">
      <div className="w-full relative flex flex-row justify-center mx-auto max-w-6xl">{children}</div>
    </div>
  );
};

export default Container;
