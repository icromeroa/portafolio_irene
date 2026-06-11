import { motion } from "framer-motion";
import "../styles/initialtransition.css";

const blackBox = {
    initial: {
        height: "100vh",
        top: 0,
    },
    animate: {
        height: 0,
        top: "100vh",
        transition: {
            delay: 2.5,
            duration: 2,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            delay: 2,
            duration: .20,
        },
    },
};


const InitialTransition = () => {
    return (
        <div className="container_ts">
            <motion.div
                className="bg_ts"
                initial="initial"
                animate="animate"
                variants={blackBox}
            >
                <motion.div
                    className="box_text_ts"
                    initial="initial"
                    animate="animate"
                    variants={textContainer}
                >
                    <svg width="500" height="100">
                        <defs>
                            <mask id="textMask" maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="100">
                                <rect x="0" y="0" width="500" height="100" fill="url(#gradient)" />
                            </mask>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ffff" />
                                <stop offset="50%" stopColor="#ffff" />
                                <stop offset="50.1%" stopColor="#808080" />
                                <stop offset="100%" stopColor="#808080" />
                                <animateTransform attributeName="gradientTransform" type="translate" from="0,0" to="0,1" begin="0s" dur="4s" repeatCount="1" />
                            </linearGradient>
                        </defs>
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="50" fill="#ffffff" mask="url(#textMask)">
                            Coding With Style
                        </text>
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default InitialTransition;