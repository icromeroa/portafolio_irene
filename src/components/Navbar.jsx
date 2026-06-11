import React, { useState } from 'react';
import item_1 from '../assets/icons/language-outline.svg';
import item_2 from '../assets/icons/sunny-outline.svg';
import item_3 from '../assets/icons/grid-outline.svg';
import item_4 from '../assets/icons/close-circle-outline.svg';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/navbar.css';
import Menu from './Menu';

const Navbar = () => {
    const [showItems, setShowItems] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const handleThirdItemClick = () => {
        setShowItems(false);
        setShowMenu(true);
    };

    const handleFourthItemClick = () => {
        setShowItems(true);
        setShowMenu(false);
    };

    return (
        <>
            <motion.div
                className="navbar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
            >
                <div className="prueba_nav">
                    {!showMenu && showItems && (
                        <>
                            {/* <Link>
                                <motion.img
                                    className='nav_item item_1'
                                    src={item_1}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                ></motion.img>
                            </Link> */}
                            {/* <Link>
                                <motion.img
                                    className='nav_item item_2'
                                    src={item_2}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                ></motion.img>
                            </Link> */}
                            <Link onClick={handleThirdItemClick}>
                                <motion.img
                                    className='nav_item item_3'
                                    src={item_3}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    whileHover={{ rotate: 720, scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 1 }}
                                ></motion.img>
                            </Link>
                        </>
                    )}
                    {showMenu && (
                        <Link onClick={handleFourthItemClick}>
                            <motion.img
                                className='nav_item item_4'
                                src={item_4}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            ></motion.img>
                        </Link>
                    )}
                </div>
            </motion.div>
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 2
                        }}
                    >
                        <Menu handleFourthItemClick={handleFourthItemClick} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;