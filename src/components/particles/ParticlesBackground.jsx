import React, { useEffect, useState } from "react"
import { initParticlesEngine, Particles } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import params from "../../configs/particles"

const ParticlesBackground = () => {
  const [ init, setInit ] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      // await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      { init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={params}
      />
      }
    </>
  );
};

export default ParticlesBackground;