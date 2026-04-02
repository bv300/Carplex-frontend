import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import './Navbar.css';




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
        // Delay menu close slightly to ensure dialer protocol fires first
        setTimeout(() => setMenuOpen(false), 150);
    };


    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/assets/carplex-uae.PNG" alt="Carplex" className="logo-img" />
                </Link>

                <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
                    <li><a href="/#services" onClick={closeMenu}>Services</a></li>
                    <li><Link to="/products" className={isActive('/products')} onClick={closeMenu}>Products</Link></li>
                    <li><a href="/#about" onClick={closeMenu}>About</a></li>
                    <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
                    <li><a href="tel:+971502292861" className="nav-cta" onClick={handleCall}><FaPhoneAlt size={14} /> Call Now</a></li>


                </ul>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
