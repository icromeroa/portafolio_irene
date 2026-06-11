import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import "../styles/tabs.css"

const tabs = [
    {
        name: 'tab1',
        label: 'Hi!',
        render: () => {
            return (
                <div>
                    <h2>Hi, I'm Irene</h2>
                    <p >
                        I'm a Systems Engineering student from Bogotá, Colombia, passionate about web design, UI/UX, 
                        and front-end development. I enjoy transforming ideas into digital experiences that are both 
                        beautiful and functional. Every project is an opportunity to learn, create, and grow.
                    </p>
                </div>
            );
        },
    },
    {
        name: 'tab2',
        label: 'Work',
        render: () => {
            return (
                <div>
                    <h2>What I Work With</h2>
                    <p>
                        My current toolkit includes React, HTML, CSS, Java, MySQL, and Figma. I also enjoy creating 
                        animations, responsive layouts, and intuitive user interfaces that provide a smooth 
                        experience across devices.
                    </p>
                </div>
            );
        },
    },
    {
        name: 'tab3',
        label: 'Philosophy',
        render: () => {
            return (
                <div>
                    <h2>Design Philosophy</h2>
                    <p>
                        I believe great design is more than aesthetics. A successful product should be intuitive, 
                        accessible, and enjoyable to use. My goal is to create interfaces that solve problems while 
                        maintaining a clean and engaging visual style.
                    </p>
                </div>
            );
        },
    },
    {
        name: 'tab4',
        label: 'Growing',
        render: () => {
            return (
                <div>
                    <h2>Currently Growing</h2>
                    <p>
                        As a student and aspiring professional, I'm continuously improving my technical and creative 
                        skills. I'm exploring new technologies, building personal projects, and gaining experience 
                            that helps me become a better designer and developer every day.
                    </p>
                </div>
            );
        },
    },
];

const tabContentVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: .3,
        ease: "easeInOut",
      },
    },
  };

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleClick = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
    };

    const isSelected = (tab) => activeTab.name === tab.name;

    return (
        <div className="tab_wrapper">
            <div className="tab_header">
                {tabs.map((tab) => (
                    <div
                        key={tab.name}
                        className={[isSelected(tab) ? "tab_item selected" : "tab_item"].join(' ')}
                    >
                        <a href='#' onClick={(e) => handleClick(e, tab)}>
                            {tab.label}
                        </a>

                        {isSelected(tab) && (
                            <motion.div layoutId='indicator' className="indicator" />
                        )}
                    </div>
                ))}
            </div>

            <div className="tab_content">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab.name || 'empty'}
                        variants={tabContentVariants}
                        initial='initial'
                        animate='enter'
                        exit='exit'
                    >
                        {activeTab && activeTab.render()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Tabs;
