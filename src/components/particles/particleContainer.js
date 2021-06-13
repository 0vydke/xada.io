import React from 'react';
import Particles from "react-tsparticles";

export default class ParticleContainer extends React.Component {
    constructor(props) {
        super(props);

        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container) {
        console.log(container);
    }

    render() {
        return ( <
            Particles id = "tsparticles"
            init = { this.particlesInit }
            loaded = { this.particlesLoaded }
            options = {
                {
                    background: {
                        color: {
                            value: "#1f3c56",
                        },
                        opacity: 0
                    },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: "#3a4d87",
                        },
                        links: {
                            color: "#3a4d87",
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 0,
                        },
                    },
                    detectRetina: true,
                }
            }
            />
        );
    }
}