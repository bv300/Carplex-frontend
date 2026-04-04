import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [servicesExpanded, setServicesExpanded] = useState(false);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/assets/carples logo.png" alt="Carplex" className="footer-logo-img" />
                        </Link>
                        <p>Dubai's trusted premium car accessories provider. Transforming rides since 2014 with quality installations and premium products.</p>
                    </div>

                    <div className="footer-top-grid">
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><a href="/#services">Services</a></li>
                                <li><a href="/#about">About Us</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/products">Android Upgrade</Link></li>
                                <li><Link to="/products">360° Camera System</Link></li>
                                <li><Link to="/products">Premium Seat Covers</Link></li>
                                <li><Link to="/products">Premium Car Tinting</Link></li>
                                <li><Link to="/products">Upholstery Works</Link></li>
                            </ul>

                            {/* Collapsible extra services */}
                            <div className={`services-extra ${servicesExpanded ? 'services-extra--open' : ''}`}>
                                <ul>
                                    <li><Link to="/products">Car Stereo Upgrade</Link></li>
                                    <li><Link to="/products">Sound Horns</Link></li>
                                    <li><Link to="/products">Smart Lock Systems</Link></li>
                                    <li><Link to="/products">Car Batteries</Link></li>
                                    <li><Link to="/products">Alloy Wheels &amp; LEDs</Link></li>
                                </ul>
                            </div>

                            <button
                                className="services-toggle"
                                onClick={() => setServicesExpanded(prev => !prev)}
                                aria-label={servicesExpanded ? 'Show fewer services' : 'Show more services'}
                            >
                                {servicesExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                            </button>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="tel:+(04)271 1275"><FaPhoneAlt size={11} /> +(04)271 1275</a></li>
                                <li><a href="tel:+971502292861"><FaPhoneAlt size={14} /> +971 50 229 2861</a></li>
                                <li><a href="mailto:carplexdxb@gmail.com"><FaEnvelope size={14} /> carplexdxb@gmail.com</a></li>
                                <li><span><FaMapMarkerAlt size={14} /> Ras Al Khor, Dubai</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Carplex Car Accessories LLC. All rights reserved.</p>
                        <p className="developer-credit">
                            Developed by <a href="https://suhadigitech.com" target="_blank" rel="noopener noreferrer">Suha Digitech</a>
                        </p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/carplex_accessories?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#!" className="social-link" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://wa.me/971502292861" className="social-link" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;