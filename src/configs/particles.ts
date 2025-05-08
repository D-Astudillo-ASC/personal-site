import { ISourceOptions } from "@tsparticles/engine"

const params: ISourceOptions  = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      options: {
        circle: {
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        polygon: {
          sides: 5,
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
      },
    },
    opacity: {
      value: 1,
      animation: { enable: false, speed: 1, sync: false },
    },
    size: {
      value: 3,
      animation: { enable: false, speed: 40, sync: false, mode: "random" },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "out" },
      attract: { enable: false, rotate: {x: 600, y: 1200 }},
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: { enable: true },
    },
    modes: {
      grab: {
        distance: 250,
        links: { opacity: 1 },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { quantity: 4 },
      remove: { quantity: 2 },
    },
  },
  detectRetina: true,
};

export default params;