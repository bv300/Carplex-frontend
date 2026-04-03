import React, { useEffect, useRef, useState } from 'react';
import {
    
    FaAward, FaShieldAlt,
    FaBolt, FaStar, FaMapMarkerAlt, FaPhoneAlt,
    FaClock, FaEnvelope, 
} from 'react-icons/fa';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import MarqueeBar from '../../components/MarqueeBar/Marqueebar';
import './HomePage.css';


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
            { threshold: 0.06 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);
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
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) { setCount(target); clearInterval(interval); }
                        else setCount(Math.floor(current));
                    }, 1800 / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* tag field removed — badges no longer rendered */
const services = [
    { img: '/assets/android-upgrade.png',  title: 'Android Upgrade',      desc: 'Latest infotainment with GPS, Apple CarPlay, streaming & full touchscreen control.' },
    { img: '/assets/camera-360.png',       title: '360° Camera System',   desc: "Bird's-eye surround view for safe parking and effortless maneuvering."              },
    { img: '/assets/seat-covers.png',      title: 'Premium Seat Covers',  desc: 'Luxury leather & diamond-stitched custom covers that transform your cabin.'          },
    { img: '/assets/interior-design.png',  title: 'Upholstery Works',     desc: 'Professional restoration for seats, door panels and interior trim.'                  },
    { img: '/assets/car-tinting.png',      title: 'Premium Car Tinting',  desc: 'UV & heat-rejecting films for privacy, comfort and style.'                          },
    { img: '/assets/hero-banner.png',      title: 'Alloy Wheels & LEDs',  desc: 'Upgraded look with premium alloys and energy-efficient LED lighting.'                },
    { img: '/assets/sound-horns.png',      title: 'Sound Horns',          desc: 'Dual-tone & multi-tone horn systems for enhanced audibility and modern style.'        },
    { img: '/assets/car-stereo.png',       title: 'Car Stereo Upgrade',   desc: 'High-fidelity speakers, subwoofers, and amps for immersive sound.'                   },
    { img: '/assets/lock-system.png',      title: 'Smart Lock Systems',   desc: 'Keyless entry, alarm features and smart security for maximum protection.'            },
    { img: '/assets/car-batteries.png',    title: 'Car Batteries',        desc: 'Premium automotive batteries built for all-weather reliability.'                     },
];

const stats = [
    { num: 5000, suffix: '+', label: 'Cars Upgraded'    },
    { num: 50,   suffix: '+', label: 'Premium Products' },
    { num: 100,  suffix: '%', label: 'Satisfaction'     },
    { num: 15,   suffix: '+', label: 'Expert Staff'     },
];

const features = [
    { icon: <FaAward />,     label: 'Certified Professionals', sub: 'Factory-trained technicians' },
    { icon: <FaShieldAlt />, label: 'Warranty Covered',        sub: 'All work fully guaranteed'   },
    { icon: <FaBolt />,      label: 'Fast Installation',       sub: 'Same-day service available'  },
    { icon: <FaStar />,      label: 'Premium Quality',         sub: 'Top-grade materials only'    },
];

const HomePage = () => {
    const pageRef = useReveal();

    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, []);

    return (
        <div ref={pageRef} className="hp-root">

            <HeroSlider />
            <MarqueeBar />

            <section className="hp-stats">
                <div className="hp-stats-inner container">
                    {stats.map((s, i) => (
                        <div className="hp-stat reveal" key={i} style={{ '--delay': `${i * 0.1}s` }}>
                            <div className="hp-stat-num"><CountUp target={s.num} suffix={s.suffix} /></div>
                            <div className="hp-stat-bar" />
                            <div className="hp-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hp-services section" id="services">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">What We Offer</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Our <em>Services</em></h2>

                    <div className="hp-services-grid">
                        {services.map((svc, i) => (
                            <div
                                className="hp-svc-card reveal"
                                key={i}
                                style={{ '--delay': `${(i % 5) * 0.07}s` }}
                            >
                                {/* No tag badge */}
                                <div className="hp-svc-img-wrap">
                                    <img src={svc.img} alt={svc.title} loading="lazy" />
                                    <div className="hp-svc-overlay" />
                                </div>
                                <div className="hp-svc-body">
                                    <h3 className="hp-svc-title">{svc.title}</h3>
                                    <p className="hp-svc-desc">{svc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hp-about section" id="about">
                <div className="hp-about-slash" aria-hidden="true" />
                <div className="container hp-about-grid">
                    <div className="hp-about-visual reveal">
                        <div className="hp-about-img-frame">
                            <img src="/assets/interior-design.png" alt="Carplex workshop" />
                        </div>
                    </div>
                    <div className="hp-about-text reveal">
                        <div className="hp-section-eyebrow hp-eyebrow-left">
                            <span className="hp-eyebrow-line" />
                            <span className="hp-eyebrow-text">Why Carplex</span>
                        </div>
                        <h2 className="hp-section-heading">
                            Dubai's #1<br /><em>Car Accessories</em><br />Specialist
                        </h2>
                        <p>
                            With over a decade in the UAE automotive market, Carplex has built a
                            reputation for premium quality, expert installations, and service that
                            never compromises.
                        </p>
                        <p>
                            Our technicians use only the finest materials and latest technology —
                            because your car deserves nothing less.
                        </p>
                        <div className="hp-features-grid">
                            {features.map((f, i) => (
                                <div className="hp-feature reveal" key={i} style={{ '--delay': `${i * 0.08}s` }}>
                                    <div className="hp-feature-icon">{f.icon}</div>
                                    <div>
                                        <strong>{f.label}</strong>
                                        <span>{f.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hp-contact section" id="contact">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">Get In Touch</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Visit <em>Our Showroom</em></h2>
                    <div className="hp-contact-layout">
                        <div className="hp-contact-cards reveal">
                            {[
                                {
                                    icon: <FaMapMarkerAlt />, title: 'Find Us',
                                    lines: ['Al Mansoori Building, Shop 04','Nad Al Hmmar, Dubai — UAE','Ras Al Khor, Dubai — UAE'],
                                },
                                {
                                    icon: <FaPhoneAlt />, title: 'Call Us',
                                    links: [{ href: 'tel:+0042711275', label: '+(04) 271 1275' },{ href: 'tel:+971502292861', label: '+971 50 229 2861' }],
                                },
                                {
                                    icon: <FaClock />, title: 'Open Hours',
                                    lines: ['Sat – Thu: 9:00 AM – 10:00 PM','Friday: 2:00 PM – 10:00 PM'],
                                },
                                {
                                    icon: <FaEnvelope />, title: 'Email',
                                    links: [{ href: 'mailto:info@carplexuae.com', label: 'info@carplexuae.com' }],
                                },
                            ].map((item, i) => (
                                <div className="hp-contact-card" key={i}>
                                    <div className="hp-contact-card-icon">{item.icon}</div>
                                    <div className="hp-contact-card-body">
                                        <h4>{item.title}</h4>
                                        {item.lines?.map((l, j) => <p key={j}>{l}</p>)}
                                        {item.links?.map((l, j) => <p key={j}><a href={l.href}>{l.label}</a></p>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hp-map reveal">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0!2d55.35!3d25.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzI0LjAiTiA1NcKwMjEnMDAuMCJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carplex location"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;