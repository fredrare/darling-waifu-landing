import React from "react";

const Hexagon = ({ children, size, style, classNames, link, isResponsive }) => {
  return (
    <div className={`relative w-${size} pb-${size}`}>
      <a
        href={link || '#'}
        rel="noreferrer"
        target={link ? '_blank' : ''}
        className={`absolute top-0 left-0 hexagon overflow-hidden w-full h-full flex flex-center content-center ${classNames}`}
        style={style}
      >
        <div className="m-auto">{children}</div>
      </a>
    </div>
  );
};

export default Hexagon;
