import '../styles/home.css'
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Home = () => {
    const navigate = useNavigate();

    const handleRouteC = () => {
        navigate("/contact")
    }

    const handleRouteW = () => {
        navigate("/work")
    }

    const gradientVariants = {
        initial: {
            background: 'linear-gradient(45deg, #F57689, #F57689, #f5cbd2, #F57689, #f28e9e, #f1a8b4,#f9657d)',
            backgroundSize: '600% 600%',
        },
        hover: {
            backgroundPosition: '100% 50%',
            transition: {
                duration: .25,
            },
            scale: 1.05,
        },
    };

    const gradientVariantsB2 = {
        initial: {
            background: 'linear-gradient(45deg, #ffff, #ffe9e9, #ffff, #ffe3e3, #ffff)',
            backgroundSize: '600% 600%',
        },
        hover: {
            backgroundPosition: '100% 50%',
            transition: {
                duration: .25,
            },
            scale: 1.05,
        },
    };

    const controls = useAnimation();

    // Iniciar la animación al montar el componente
    React.useEffect(() => {
        let isMounted = true;

        const animateLinearGradient = async () => {
            while (isMounted) {
                await controls.start({
                    background: 'linear-gradient(to right, #F57689, #FDB7C0, #FFA7AE)',
                    transition: { duration: 2, ease: 'linear' },
                });
                if (!isMounted) break;
                await controls.start({
                    background: 'linear-gradient(to right, #FFA7AE, #F57689, #FDB7C0)',
                    transition: { duration: 2, ease: 'linear' },
                });
            }
        };

        animateLinearGradient();

        return () => {
            isMounted = false;
            controls.stop(); // <-- esto resuelve/corta la animación en curso
        };
    }, []);

    return (
        <AnimatePresence>
            <motion.div className='main_page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            >
                <motion.section className="section_left">
                    <div>
                        <p className="tagline">
                            UI/UX Enthusiast & Front-End Developer
                        </p>
                        <h1 className="title_left">
                            Coding With Style
                        </h1>
                        <div className='buttons_box'>
                            <motion.button
                                className='button_contact'
                                whileHover="hover"
                                whileTap={{ scale: 0.95 }}
                                variants={gradientVariantsB2}
                                initial="initial"
                                onClick={handleRouteC}
                            >
                                Contact
                            </motion.button>
                            <motion.button
                                className='button_projects'
                                whileHover="hover"
                                whileTap={{ scale: 0.95 }}
                                variants={gradientVariants}
                                initial="initial"
                                onClick={handleRouteW}
                            >
                                View Projects
                            </motion.button>
                        </div>
                    </div>
                </motion.section>

                {/* CORRECCIÓN: Quitamos dimensiones fijas en línea y sumamos clase css */}
                <motion.section 
                    className="section_right"
                    initial={{ background: 'linear-gradient(to right, #F57689, #FDB7C0, #FFA7AE)' }}
                    animate={controls}
                >
                    <div className='text_right'>
                        <h2 className="greeting">Hi, I'm Irene Romero</h2>
                        <h1 className="title_right">Systems Engineering Student</h1>
                    </div>
                </motion.section>
            </motion.div>
        </AnimatePresence >
    )
}

export default Home;