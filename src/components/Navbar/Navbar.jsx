import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const navbarVariants = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
};

const navLinkVariants = {
    hidden: {
        opacity: 0,
        y: -12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const handleCall = (e) => {
        e.preventDefault();
        window.location.href = `tel:+971502292861`;
        setTimeout(() => setMenuOpen(false), 150);
    };

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            id="navbar"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="navbar-container">
                <motion.div variants={navLinkVariants}>
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img src="/assets/carples logo.png" alt="Carplex" className="logo-img" />
                    </Link>
                </motion.div>

                <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <motion.li variants={navLinkVariants}><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></motion.li>
                    <motion.li variants={navLinkVariants}><a href="/#about" onClick={closeMenu}>About</a></motion.li>
                    <motion.li variants={navLinkVariants}><a href="/#services" onClick={closeMenu}>Services</a></motion.li>
                    <motion.li variants={navLinkVariants}><Link to="/products" className={isActive('/products')} onClick={closeMenu}>Products</Link></motion.li>
                    <motion.li variants={navLinkVariants}><a href="/#contact" onClick={closeMenu}>Contact</a></motion.li>
                    <motion.li variants={navLinkVariants}><a href="tel:+971502292861" className="nav-cta" onClick={handleCall}><FaPhoneAlt size={14} /> Call Now</a></motion.li>
                </ul>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
