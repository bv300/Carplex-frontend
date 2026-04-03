import React, { useEffect, useRef } from 'react';
import { FaBolt, FaShieldAlt, FaMagic, FaTint, FaPhoneAlt } from 'react-icons/fa';
import './ProductsPage.css';
import { GiCarSeat } from "react-icons/gi";
import { motion } from 'framer-motion';

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

const products = [
    {
        img: '/assets/android-upgrade.png',
        title: ['Android ', 'Infotainment Upgrade'],
        desc: 'Replace your outdated factory head unit with a cutting-edge Android touchscreen system. Enjoy seamless GPS navigation, Apple CarPlay, Android Auto, HD video playback, and Bluetooth connectivity — all from a sleek, modern interface.',
        icon: <FaBolt />,
        heading: 'Why It Matters',
        points: [
            'Replaces outdated factory systems with modern, app-ready interfaces',
            'Built-in GPS navigation eliminates the need for phone mounts',
            'Supports Apple CarPlay & Android Auto for seamless smartphone integration',
            'High-resolution touchscreen with faster processing than OEM units',
            'Adds reverse camera support, dash cam integration, and Bluetooth calling',
            "Increases your vehicle's resale value with a modernized cabin",
        ],
    },
    {
        img: '/assets/camera-360.png',
        title: ['360° ', 'Camera System'],
        desc: "Our surround-view camera system uses four strategically placed cameras to provide a real-time bird's-eye view of your vehicle. Perfect for tight parking spots, busy roads, and eliminating blind spots.",
        icon: <FaShieldAlt />,
        heading: 'Why It Matters',
        points: [
            'Eliminates dangerous blind spots with a complete 360° view around the vehicle',
            "Makes parallel parking and tight spaces effortless with bird's-eye guidance",
            'Significantly reduces the risk of low-speed collisions and scrapes',
            'Protects pedestrians and small obstacles from being unnoticed',
            'Essential safety upgrade for SUVs, trucks, and large vehicles with limited visibility',
            'Records footage that can serve as evidence in case of accidents',
        ],
        reverse: true,
    },
    {
        img: '/assets/seat-covers.png',
        title: ['Premium ', 'Seat Covers'],
        desc: 'Our custom-fit seat covers are crafted from top-grade leather with diamond stitching patterns, available in a range of colors and styles. Each cover is precision-cut for your exact car model, offering a factory-finish look.',
        icon: <GiCarSeat />,
        heading: 'Why It Matters',
        points: [
            'Protects original seats from wear, stains, UV fading, and daily damage',
            'Premium leather adds luxury feel to any vehicle class — even economy cars',
            'Custom-fit design ensures a tight, wrinkle-free finish that looks factory-made',
            'Easy to clean and maintain, extending your vehicle interior\'s life',
            'Preserves resale value by keeping original upholstery in perfect condition',
            'Available in multiple colors, patterns, and materials to match your style',
        ],
    },
    {
        img: '/assets/interior-design.png',
        title: ['Upholstery ', 'Works'],
        desc: 'Transform your entire cabin with our bespoke interior design services. From ambient LED lighting and custom dashboard wraps to new steering wheels and premium trim panels — we create an interior that reflects your personality.',
        icon: <FaMagic />,
        heading: 'Why It Matters',
        points: [
            'Creates a personalized driving environment that matches your style and taste',
            'Ambient lighting sets the mood and enhances nighttime driving experience',
            'Dashboard upgrades and trim replacements hide wear and refresh aged interiors',
            'Custom steering wheels improve grip, comfort, and driving feel',
            'A well-designed interior dramatically increases perceived value and enjoyment',
            'Professional installation ensures every component fits perfectly without rattles',
        ],
        reverse: true,
    },
    {
        img: '/assets/car-tinting.png',
        title: ['Premium ', 'Car Tinting'],
        desc: 'We use top-grade ceramic and nano-carbon window films from leading international brands. Our expert technicians ensure bubble-free, precision application with guaranteed longevity and compliance with local UAE regulations.',
        icon: <FaTint />,
        heading: 'Why It Matters',
        points: [
            'Blocks up to 99% of harmful UV rays — protecting your skin and interior from damage',
            'Reduces interior heat by up to 60%, making your AC more efficient and your car comfortable',
            'Provides privacy and security for you and your valuables inside the vehicle',
            "Reduces glare for safer, more comfortable driving in Dubai's intense sunlight",
            'Protects dashboard, seats, and trim from UV-induced fading and cracking',
            'Enhances the exterior look of your vehicle with a sleek, uniform appearance',
        ],
    },
    {
        img: '/assets/hero-banner.png',
        title: ['Alloy Wheels ', '& LEDs'],
        desc: 'Give your car an upgraded, aggressive stance and bright clear vision with our premium alloy wheels and advanced LED lighting retrofits. Custom tailored sizes for an exact fit.',
        icon: <FaMagic />,
        heading: 'Why It Matters',
        points: [
            'Dramatically improves the exterior aesthetics and curb appeal of your vehicle',
            'Lighter alloy wheels can improve handling, acceleration, and braking performance',
            'Brighter LED lights offer much better nighttime visibility for safer driving',
            'Modern LED conversions give a premium, contemporary look to older cars',
            'Longer-lasting than traditional halogen bulbs, saving maintenance costs',
            'Endless styles and finishes to suit personal taste'
        ],
        reverse: true,
    },
    {
        img: '/assets/sound-horns.png',
        title: ['Sound ', 'Horns'],
        desc: 'Upgrade your vehicle\'s presence on the road with dual-tone and multi-tone horn systems. Engineered for high decibel output to ensure you are heard in busy traffic situations.',
        icon: <FaBolt />,
        heading: 'Why It Matters',
        points: [
            'Produces a loud, commanding tone for enhanced safety in heavy traffic',
            'Ideal for high-speed highway driving to alert distant vehicles effectively',
            'Replaces weak or damaged factory horns with durable, weather-resistant upgrades',
            'Dual-tone setup provides a classic, authoritative European car sound',
            'Easy installation seamlessly integrates with factory wiring',
            'Instantly measurable improvement over standard stock horns'
        ],
    },
    {
        img: '/assets/car-stereo.png',
        title: ['Car Stereo ', 'Upgrade'],
        desc: 'Immerse yourself in rich, high-fidelity audio with our complete car stereo upgrade packages. Featuring premium speakers, heavy-hitting subwoofers, and powerful amplifiers designed for acoustic perfection.',
        icon: <FaPhoneAlt />,
        heading: 'Why It Matters',
        points: [
            'Delivers crisp highs, detailed mid-ranges, and deep, resonant bass',
            'Transforms regular commutes into an immersive, concert-like experience',
            'Reduces distortion even at high volumes for crystal-clear playback',
            'Expert tuning tailored to the specific acoustics of your car cabin',
            'Integrates flawlessly with your existing or upgraded head unit/infotainment',
            'Uses high-quality, durable components built to handle wide temperature ranges'
        ],
        reverse: true,
    },
    {
        img: '/assets/lock-system.png',
        title: ['Smart Lock ', 'Systems'],
        desc: 'Modernize your vehicle\'s security and convenience with advanced keyless entry, alarm features, and smart lock setups. Maximum protection paired with effortless accessibility.',
        icon: <FaShieldAlt />,
        heading: 'Why It Matters',
        points: [
            'Allows keyless unlocking and locking triggered purely by proximity',
            'Advanced anti-theft immobilization prevents engine starting without the fob',
            'Integrated alarm triggers loudly during unauthorized entry attempts',
            'Push-to-start capability adds a premium modern touch to the dashboard',
            'Can feature remote engine starting to cool down your car before entry',
            'Offers peace of mind with robust, high-security digital encryption'
        ],
    },
    {
        img: '/assets/car-batteries.png',
        title: ['Car ', 'Batteries'],
        desc: 'Power your ride dependably with our selection of premium automotive batteries. Built to withstand extreme heat and demanding electrical loads from modern vehicle accessories.',
        icon: <FaBolt />,
        heading: 'Why It Matters',
        points: [
            'Ensures reliable starting power even in extreme summer heat conditions',
            'High reserve capacity supports upgraded electronics like stereos and screens',
            'Maintenance-free design means no hassle checking fluid levels',
            'Extended warranty periods provide long-term peace of mind',
            'Proper voltage output prevents damage to sensitive vehicular computers',
            'Expertly fitted and tested to ensure perfect connection and charging'
        ],
        reverse: true,
    }
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
};

const ProductsPage = () => {
    const pageRef = useReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div ref={pageRef}>
            {/* ========== PAGE HERO ========== */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.2 }} 
                        variants={textVariants}
                    >
                        Our <span>Products</span> &amp; Services
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Discover why each upgrade matters — and how Carplex delivers the premium quality your vehicle deserves.
                    </motion.p>
                </div>
            </section>

            {/* ========== PRODUCT SECTIONS ========== */}
            {products.map((product, i) => (
                <section
                    className="product-section"
                    key={i}
                    style={product.reverse ? { background: 'var(--bg-secondary)' } : {}}
                >
                    <div className="container">
                        <div className={`product-layout ${product.reverse ? 'reverse' : ''}`}>
                            <motion.div 
                                className="product-image"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >
                                <img src={product.img} alt={product.title.join('')} />
                            </motion.div>
                            <div className="product-content">
                                <motion.h2 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={textVariants}
                                >
                                    {product.title[0]}<span>{product.title[1]}</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 30 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {product.desc}
                                </motion.p>
                                <motion.div 
                                    className="importance-box"
                                    initial={{ opacity: 0, y: 30 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <h4>{product.icon} {product.heading}</h4>
                                    <ul>
                                        {product.points.map((point, j) => (
                                            <motion.li 
                                                key={j}
                                                initial={{ opacity: 0, x: -10 }} 
                                                whileInView={{ opacity: 1, x: 0 }} 
                                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 + (j * 0.1) }}
                                                viewport={{ once: true, amount: 0.2 }}
                                            >
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ========== CTA BANNER ========== */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="cta-banner"
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2>Ready to Upgrade Your Ride?</h2>
                        <p>Visit our showroom or call us today for a free consultation and expert advice on your car accessories.</p>
                        <a href="tel:+971502292861" className="btn-white"><FaPhoneAlt /> Call +971 50 229 2861</a>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
