import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Particles from "react-tsparticles";
import heart1 from "../../assets/img/heart1.webp";
import heart2 from "../../assets/img/heart2.webp";
import heart3 from "../../assets/img/heart3.webp";
import heart4 from "../../assets/img/heart4.webp";
import heart5 from "../../assets/img/heart5.webp";

const Background = ({ background }) => {
  const backStyle = {
    zIndex: -2,
  };
  return (
    <div className="fixed top-0 left-0 w-full h-0" style={backStyle}>
      <GatsbyImage
        image={background}
        imgClassName="w-full h-screen fixed object-cover overflow-hidden"
        className="w-full h-screen fixed top-0 left-0 right-0 bottom-0"
        style={{
          zIndex: -1
        }}
        alt="fondo"
      />
      <Particles
        className="w-full h-screen fixed top-0 left-0 overflow-hidden filter -hue-rotate-15"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#ff0000",
              },
              polygon: {
                nb_sides: 3,
              },
              image: [
                { src: heart1 },
                { src: heart2 },
                { src: heart3 },
                { src: heart4 },
                { src: heart5 },
              ],
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.1,
                sync: true,
              },
            },
            size: {
              value: 40,
              random: true,
              anim: {
                enable: true,
                speed: 40,
                size_min: 20,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "bottom-left",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
        }}
      />
    </div>
  );
};
export default Background;
