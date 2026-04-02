import React, { useEffect, useRef, useState } from 'react';
import {
    FaMobileAlt, FaCamera, FaMagic,
    FaTint, FaGem, FaAward, FaShieldAlt,
    FaBolt, FaStar, FaMapMarkerAlt, FaPhoneAlt,
    FaClock, FaEnvelope, FaVolumeUp, FaHeadphones,
    FaLock, FaBatteryFull
} from 'react-icons/fa';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import './HomePage.css';
import { GiCarSeat } from "react-icons/gi";

const useReveal = () => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);
    return ref;
};

const useParallax = (speed = 0.5) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const scrolled = window.scrollY;
            const offset = ref.current.offsetTop;
            const visible = scrolled + window.innerHeight > offset && scrolled < offset + ref.current.offsetHeight;
            if (visible) {
                const yPos = (scrolled - offset) * speed;
                const bg = ref.current.querySelector('.parallax-bg-layer');
                if (bg) {
                    bg.style.transform = `translateY(${yPos}px)`;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);
    return ref;
};

const CountUp = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1800;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const services = [
    {
        img: '/assets/android-upgrade.png',
        icon: <FaMobileAlt />,
        title: 'Android Upgrade',
        desc: 'Upgrade to the latest Android infotainment system with GPS navigation, Apple CarPlay, music streaming, and full touchscreen control.',
    },
    {
        img: '/assets/camera-360.png',
        icon: <FaCamera />,
        title: '360° Camera Installation',
        desc: "Get a bird's-eye view of your surroundings with our premium 360° surround camera systems for safe parking and maneuvering.",
    },
    {
        img: '/assets/seat-covers.png',
        icon: <GiCarSeat />,
        title: 'Premium Seat Covers',
        desc: 'Luxury leather and custom-designed seat covers with diamond stitching, perfect fit, and premium materials that transform your cabin.',
    },
    {
        img: '/assets/interior-design.png',
        icon: <FaMagic />,
        title: 'Upholstery Works',
        desc: 'Professional upholstery restoration and custom upholstery work for seats, door panels, and interior trim with premium fabrics.',
    },
    {
        img: '/assets/car-tinting.png',
        icon: <FaTint />,
        title: 'Premium Car Tinting',
        desc: 'High-quality window tinting with UV protection, heat rejection, and privacy — using top-grade films from leading brands.',
    },
    {
        img: '/assets/hero-banner.png',
        icon: <FaGem />,
        title: 'Alloy Wheels & LED Lights',
        desc: 'Upgrade your look with premium alloy wheels and energy-efficient LED lights for enhanced style and visibility on the road.',
    },
    {
        img: '/assets/sound-horns.png',
        icon: <FaVolumeUp />,
        title: 'Sound Horns',
        desc: 'Premium dual-tone and multi-tone horn systems with powerful sound output and modern styling for enhanced audibility and style.',
    },
    {
        img: '/assets/car-stereo.png',
        icon: <FaHeadphones />,
        title: 'Car Stereo Upgrade',
        desc: 'High-quality audio systems with advanced speakers, subwoofers, and amplifiers for crystal-clear sound and immersive listening.',
    },
    {
        img: '/assets/lock-system.png',
        icon: <FaLock />,
        title: 'Remote & General Lock System',
        desc: 'Advanced remote locking systems with keyless entry, alarm features, and smart security for maximum protection and convenience.',
    },
    {
        img: '/assets/car-batteries.png',
        icon: <FaBatteryFull />,
        title: 'Car Batteries',
        desc: 'Premium automotive batteries with enhanced performance, durability, and reliability for all weather conditions and demanding use.',
    },
];

const stats = [
    { num: 10, suffix: '+', label: 'Years of Experience' },
    { num: 5000, suffix: '+', label: 'Cars Upgraded' },
    { num: 50, suffix: '+', label: 'Premium Products' },
    { num: 100, suffix: '%', label: 'Customer Satisfaction' },
];

const HomePage = () => {
    const pageRef = useReveal();
    const statsRef = useParallax(0.15);
    const aboutRef = useParallax(0.2);

    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, []);

    return (
        <div ref={pageRef}>
            {/* ========== HERO ========== */}
            <HeroSlider />

            {/* ========== STATS ========== */}
            <section className="section stats-section" ref={statsRef}>
                <div className="parallax-bg-layer" style={{ backgroundImage: 'url(/assets/hero-banner.png)', opacity: 0.05 }}></div>
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, i) => (
                            <div className="stat-item reveal" key={i}>
                                <h3>
                                    <CountUp target={stat.num} suffix={stat.suffix} />
                                </h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== SERVICES ========== */}
            <section className="section" id="services">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-tag">What We Offer</div>
                        <h2 className="section-title">Our Premium <span>Services</span></h2>
                        <p className="section-desc">
                            We offer a comprehensive range of premium car accessories and installation services to elevate your driving experience.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((svc, i) => (
                            <div className="service-card reveal" key={i}>
                                <div className="service-card-img">
                                    <img src={svc.img} alt={svc.title} />
                                </div>
                                <div className="service-card-body">
                                    <div className="service-icon">{svc.icon}</div>
                                    <h3>{svc.title}</h3>
                                    <p>{svc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== ABOUT ========== */}
            <section className="section about-section" id="about" ref={aboutRef}>
                <div className="parallax-bg-layer" style={{ backgroundImage: 'url(/assets/interior-design.png)', opacity: 0.03 }}></div>
                <div className="container">
                    <div className="about-content">
                        <div className="about-image reveal">
                            <img src="/assets/interior-design.png" alt="Carplex workshop interior" />
                        </div>
                        <div className="about-text reveal">
                            <h2>Why Choose <span>Carplex?</span></h2>
                            <p>
                                With over a decade of experience in the UAE automotive accessories market, Carplex has earned a reputation for premium quality, expert installations, and unmatched customer service.
                            </p>
                            <p>
                                Our skilled technicians use only the finest materials and latest technology to ensure every upgrade meets the highest standards.
                            </p>
                            <div className="about-features">
                                {[
                                    { icon: <FaAward />, label: 'Certified Professionals' },
                                    { icon: <FaShieldAlt />, label: 'Warranty Covered' },
                                    { icon: <FaBolt />, label: 'Fast Installation' },
                                    { icon: <FaStar />, label: 'Premium Quality' },
                                ].map((feat, i) => (
                                    <div className="about-feature" key={i}>
                                        <div className="about-feature-icon">{feat.icon}</div>
                                        <span>{feat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CONTACT ========== */}
            <section className="section" id="contact">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-tag">Get In Touch</div>
                        <h2 className="section-title">Contact <span>Us</span></h2>
                        <p className="section-desc">
                            Visit our showroom or call us directly for a free consultation and quote on your car upgrades.
                        </p>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info reveal">
                            <div className="contact-item">
                                <div className="contact-icon"><FaMapMarkerAlt /></div>
                                <div>
                                    <h4>Our Showroom</h4>
                                    <p>Al Mansoori Building, Shop 04<br />Nad Al Hmmar, Dubai — UAE</p>
                                    <p style={{ marginTop: '4px' }}>Ras Al Khor, Dubai — UAE</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><FaPhoneAlt /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+(04)271 1275">+(04)271 1275</a></p>
                                    <p><a href="tel:+971502292861">+971 50 229 2861</a></p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><FaClock /></div>
                                <div>
                                    <h4>Working Hours</h4>
                                    <p>Saturday – Thursday: 9:00 AM – 10:00 PM</p>
                                    <p>Friday: 2:00 PM – 10:00 PM</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><FaEnvelope /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:info@carplexuae.com">info@carplexuae.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-map reveal">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0!2d55.35!3d25.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzI0LjAiTiA1NcKwMjEnMDAuMCJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carplex location on Google Maps"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;