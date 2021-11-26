import React, { useState, useEffect } from "react";
import Hexagon from "../elements/hexagon";
import opensea from "../../assets/vector/opensea.svg";
import facebook from "../../assets/vector/facebook.svg";
import telegram from "../../assets/vector/telegram.svg";
import twitter from "../../assets/vector/twitter.svg";
import BigOpenSea from "../elements/bigOpenSea";

const Social = () => {
  const socials = [
    {
      classNames:
        "visible md:invisible filter drop-shadow-md hover:drop-shadow-lg",
      name: "opensea",
      link: "https://opensea.io/DarlingWaifu",
      element: <img alt="OpenSea" src={opensea} />,
    },
    {
      classNames: "filter drop-shadow-md hover:drop-shadow-lg",
      name: "telegram",
      link: "https://t.me/+LGSx_9Db3uI1ZTIx",
      element: <img alt="Telegram" src={telegram} />,
    },
    {
      classNames: "filter drop-shadow-md hover:drop-shadow-lg",
      name: "discord",
      link: "https://discord.gg/DyKCX3wkKM",
      element: (
        <svg
          className="homeIcon-AaowEC"
          aria-hidden="false"
          width="35"
          height="35"
          viewBox="0 0 28 20"
        >
          <path
            fill="#494B5A"
            d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
          ></path>
        </svg>
      ),
    },
    {
      classNames: "filter drop-shadow-md hover:drop-shadow-lg",
      name: "twitter",
      link: "https://twitter.com/DarlingWaifuNFT",
      element: <img alt="Twitter" src={twitter} />,
    },
    {
      classNames: "filter drop-shadow-md hover:drop-shadow-lg",
      name: "instagram",
      link: "https://www.instagram.com/darlingwaifunft/",
      element: (
        <svg
          viewBox="0 0 80 81"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
          fill="url(#jsc_c_7)"
          height="35"
          width="35"
        >
          <defs>
            <linearGradient
              x1="69.27%"
              x2="128.20%"
              y1="129.46%"
              y2="29.46%"
              id="jsc_c_7"
            >
              <stop offset="0" stopColor="#494B5A"></stop>
              <stop offset="25%" stopColor="#494B5A"></stop>
              <stop offset="50%" stopColor="#494B5A"></stop>
              <stop offset="75%" stopColor="#494B5A"></stop>
              <stop offset="100%" stopColor="#494B5A"></stop>
            </linearGradient>
          </defs>
          <path d="m43.655 0 5.21.025 3.4.055 2.74.095L56.49.24c4.26.195 7.165.87 9.71 1.86 2.63 1.025 4.86 2.39 7.085 4.615 2.225 2.225 3.595 4.46 4.615 7.09.88 2.26 1.51 4.81 1.775 8.34l.19 3.775.09 3.59.045 6.855-.03 12.835-.075 4.015-.135 3.3c-.195 4.26-.87 7.17-1.86 9.715-1.02 2.63-2.39 4.865-4.615 7.09-2.225 2.225-4.455 3.59-7.085 4.615-2.26.88-4.81 1.51-8.335 1.775l-4.3.205-3.78.085-6.13.035-12.835-.03-4.01-.075-3.3-.135c-4.26-.195-7.165-.87-9.71-1.86-2.63-1.025-4.865-2.39-7.085-4.615C4.49 71.095 3.12 68.86 2.1 66.23 1.22 63.97.59 61.42.325 57.89l-.15-2.86-.095-2.745-.055-3.395L0 42.545l.025-11.4.055-3.395.095-2.745.065-1.485c.195-4.26.87-7.17 1.86-9.715 1.02-2.63 2.39-4.865 4.615-7.09C8.935 4.49 11.17 3.125 13.8 2.1c2.26-.88 4.81-1.51 8.34-1.775l2.855-.15 2.74-.095 3.4-.055L36.345 0h7.31zm5.09 7.235h-17.49l-3.03.045-4.39.165a32.326 32.326 0 0 0-3.294.307l-.599.097a20.85 20.85 0 0 0-1.316.273l-.46.117c-.148.04-.29.08-.426.121l-.93.31-.4.15c-1.87.73-3.2 1.595-4.6 2.995-1.4 1.4-2.265 2.735-2.99 4.6l-.31.845-.136.432c-.362 1.201-.705 2.817-.874 5.133l-.09 1.7-.13 3.57-.065 6.18.015 14.255.08 4.41.13 3.25a31.47 31.47 0 0 0 .344 3.534l.098.57c.017.092.034.182.052.27l.108.511.113.474c.019.076.038.151.058.224l.117.424.12.393.06.185.31.845c.725 1.865 1.59 3.2 2.99 4.6 1.4 1.4 2.73 2.27 4.6 2.995l.845.305.378.121.2.06.423.118c.073.02.148.04.224.058l.473.113.51.108.55.102c1.044.18 2.296.32 3.822.39l4.875.175 6.515.055 14.115-.025 3.58-.07 3.245-.135c1.526-.07 2.778-.21 3.822-.39l.55-.102.51-.108.473-.113.224-.058.423-.118.393-.12.185-.061.845-.305c1.87-.725 3.2-1.595 4.6-2.995 1.4-1.4 2.265-2.735 2.995-4.6l.305-.845c.41-1.24.82-2.96 1.01-5.565l.19-4.245.08-4.285.02-6.18-.02-11.145-.08-4.285-.13-3.225a33.046 33.046 0 0 0-.262-2.977l-.093-.622c-.049-.3-.1-.582-.155-.85l-.112-.516a18.598 18.598 0 0 0-.116-.479l-.12-.442-.062-.209-.38-1.135-.075-.2c-.73-1.865-1.595-3.2-2.995-4.6-1.4-1.4-2.73-2.265-4.6-2.995l-.4-.15-.93-.31-.229-.066-.488-.13c-1.102-.279-2.505-.525-4.358-.659L54.21 7.36l-2.435-.08-3.03-.045z"></path>
          <path d="M40 19.47c11.345 0 20.54 9.2 20.54 20.545 0 11.35-9.195 20.55-20.54 20.55-11.345 0-20.54-9.2-20.54-20.55C19.46 28.67 28.655 19.47 40 19.47zm0 7.21c-7.365 0-13.335 5.97-13.335 13.335 0 7.37 5.97 13.34 13.335 13.34 7.365 0 13.335-5.97 13.335-13.34 0-7.365-5.97-13.335-13.335-13.335zM66.15 18.65a4.801 4.801 0 1 1-9.598-.002 4.801 4.801 0 0 1 9.598.002z"></path>
        </svg>
      ),
    },
    {
      classNames: "filter drop-shadow-md hover:drop-shadow-lg",
      name: "facebook",
      link: "https://www.facebook.com/Darling-Waifu-110711884773793",
      element: <img alt="Facebook" src={facebook} />,
    },
  ];

  const [isClient, SetIsClient] = useState(false);

  useEffect(() => SetIsClient(true), []);

  // TODO: Add links
  return (
    <div className="fixed right-2 md:right-6 top-8 md:top-10 flex-row space-y-1 transform scale-90 md:scale-100">
      {/* OpenSea */}
      {isClient && <BigOpenSea />}
      {/* Other Social Media */}
      {isClient &&
        socials.map((social) => (
          <div
            className={social.classNames}
            key={social.name + (isClient ? "-client" : "-server")}
          >
            <Hexagon
              size="16"
              classNames="bg-almostwhite hover:bg-white"
              link={social.link}
              hasSound={true}
            >
              {social.element}
            </Hexagon>
          </div>
        ))}
    </div>
  );
};

export default Social;
