import React, { useEffect, useRef } from 'react';
import { FaBolt, FaShieldAlt,  FaMagic, FaTint, FaPhoneAlt } from 'react-icons/fa';
import './ProductsPage.css';
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
        title: ['Interior ', 'Designing'],
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
];

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
                    <h1>Our <span>Products</span> &amp; Services</h1>
                    <p>Discover why each upgrade matters — and how Carplex delivers the premium quality your vehicle deserves.</p>
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
                        <div className={`product-layout ${product.reverse ? 'reverse' : ''} reveal`}>
                            <div className="product-image">
                                <img src={product.img} alt={product.title.join('')} />
                            </div>
                            <div className="product-content">
                                <h2>{product.title[0]}<span>{product.title[1]}</span></h2>
                                <p>{product.desc}</p>
                                <div className="importance-box">
                                    <h4>{product.icon} {product.heading}</h4>
                                    <ul>
                                        {product.points.map((point, j) => (
                                            <li key={j}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ========== CTA BANNER ========== */}
            <section className="section">
                <div className="container">
                    <div className="cta-banner reveal">
                        <h2>Ready to Upgrade Your Ride?</h2>
                        <p>Visit our showroom or call us today for a free consultation and expert advice on your car accessories.</p>
                        <a href="tel:+971502292861" className="btn-white"><FaPhoneAlt /> Call +971 50 229 2861</a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
