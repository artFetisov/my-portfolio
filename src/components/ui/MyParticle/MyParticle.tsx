import {FC, useCallback} from "react";
import Particles from 'react-tsparticles';
import {loadFull} from "tsparticles";
import {Container, Engine} from "tsparticles-engine";
import styles from './MyParticle.module.scss';

export const MyParticle: FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container) => {
    }, []);

    return <Particles
        className={styles.particle}
        id="tsparticles"
        init={particlesInit}
        // @ts-ignore
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 0,
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 1, max: 3},
                },
            },
            detectRetina: true,
        }}
    />
}