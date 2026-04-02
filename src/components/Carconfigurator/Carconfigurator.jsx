import React, { useState } from 'react';
import { FaMobileAlt, FaCamera, FaTint, FaMagic, FaGem } from 'react-icons/fa';
import { GiCarSeat } from 'react-icons/gi';
import './Carconfigurator.css';

const MODS = [
    {
        id: 'android', label: 'Android Upgrade', shortDesc: 'GPS · CarPlay · Auto',
        icon: FaMobileAlt, color: '#00d4ff', tag: 'TECH',
        detail: 'Upgrade to a full touchscreen infotainment system with HD navigation, Apple CarPlay, Android Auto & wireless connectivity.',
    },
    {
        id: 'camera', label: '360° Cameras', shortDesc: 'Surround-View Safety',
        icon: FaCamera, color: '#22dd88', tag: 'SAFETY',
        detail: "Four-camera surround system gives a real-time bird's-eye view — total blind-spot elimination & stress-free parking.",
    },
    {
        id: 'seats', label: 'Premium Seats', shortDesc: 'Custom Leather Covers',
        icon: GiCarSeat, color: '#c8a96e', tag: 'COMFORT',
        detail: 'Precision-fit leather seat covers with diamond stitching, custom colour options, and factory-quality finish.',
    },
    {
        id: 'tint', label: 'Window Tinting', shortDesc: 'Ceramic UV Film',
        icon: FaTint, color: '#7799ff', tag: 'PRIVACY',
        detail: 'Premium ceramic films block 99% UV rays, cut cabin heat by up to 60%, and add privacy without compromising clarity.',
    },
    {
        id: 'interior', label: 'Interior Design', shortDesc: 'Ambient · Trim · Lighting',
        icon: FaMagic, color: '#ff66aa', tag: 'LUXURY',
        detail: 'Transform your cabin with multi-zone ambient lighting, custom steering wheels, and premium trim panel upgrades.',
    },
    {
        id: 'alloy', label: 'Alloy & LED', shortDesc: 'Wheels & LED Lighting',
        icon: FaGem, color: '#e63946', tag: 'STYLE',
        detail: 'Premium alloy wheels paired with LED DRL strips, accent lighting, and bold taillight upgrades for maximum presence.',
    },
];

/* ── Car SVG with modification overlays ── */
function CarSVG({ activeMod }) {
    const hasAndroid  = activeMod === 'android';
    const hasCamera   = activeMod === 'camera';
    const hasSeats    = activeMod === 'seats';
    const hasTint     = activeMod === 'tint';
    const hasInterior = activeMod === 'interior';
    const hasAlloy    = activeMod === 'alloy';

    /* 900×420 viewBox  •  wheels: front cx=215 cy=325 r=68, rear cx=700 cy=325 r=68 */
    return (
        <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" className="cc-svg">
            <defs>
                <filter id="cc-led" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <radialGradient id="cc-wg-f" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e63946" stopOpacity="0.65" />
                    <stop offset="65%" stopColor="#e63946" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="cc-wg-r" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e63946" stopOpacity="0.65" />
                    <stop offset="65%" stopColor="#e63946" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Ground shadow */}
            <ellipse cx="455" cy="402" rx="370" ry="13" fill="rgba(0,0,0,0.45)" />

            {/* Underglow – Interior & Alloy mods */}
            {hasInterior && <ellipse cx="450" cy="348" rx="275" ry="15" fill="rgba(255,102,170,0.22)" style={{ filter: 'blur(8px)' }} />}
            {hasAlloy    && <ellipse cx="450" cy="348" rx="275" ry="15" fill="rgba(230,57,70,0.22)"   style={{ filter: 'blur(8px)' }} />}

            {/* ─── WHEELS (behind body) ─── */}
            {[
                { cx: 215, gid: 'cc-wg-f' },
                { cx: 700, gid: 'cc-wg-r' },
            ].map(({ cx, gid }) => (
                <g key={cx}>
                    {hasAlloy && <circle cx={cx} cy={325} r={88} fill={`url(#${gid})`} style={{ filter: 'blur(4px)' }} />}
                    <circle cx={cx} cy={325} r={68} fill="#0e0e0e" stroke="#252525" strokeWidth="3" />
                    <circle cx={cx} cy={325} r={59} fill="#0a0a0a" />
                    {hasAlloy ? (
                        <>
                            {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
                                const rad = a * Math.PI / 180;
                                return (
                                    <line key={a}
                                        x1={cx + 22 * Math.cos(rad)} y1={325 + 22 * Math.sin(rad)}
                                        x2={cx + 53 * Math.cos(rad)} y2={325 + 53 * Math.sin(rad)}
                                        stroke="#e63946" strokeWidth="2.5" strokeLinecap="round" />
                                );
                            })}
                            <circle cx={cx} cy={325} r={55} fill="none" stroke="#cc2233" strokeWidth="1" strokeOpacity="0.45" />
                            <circle cx={cx} cy={325} r={22} fill="#141414" stroke="#e63946" strokeWidth="2" />
                            <circle cx={cx} cy={325} r={9}  fill="#e63946" />
                        </>
                    ) : (
                        <>
                            {[0, 72, 144, 216, 288].map(a => {
                                const rad = a * Math.PI / 180;
                                return (
                                    <line key={a}
                                        x1={cx + 16 * Math.cos(rad)} y1={325 + 16 * Math.sin(rad)}
                                        x2={cx + 50 * Math.cos(rad)} y2={325 + 50 * Math.sin(rad)}
                                        stroke="#282828" strokeWidth="3.5" strokeLinecap="round" />
                                );
                            })}
                            <circle cx={cx} cy={325} r={16} fill="#141414" stroke="#2a2a2a" strokeWidth="2" />
                            <circle cx={cx} cy={325} r={7}  fill="#1e1e1e" />
                        </>
                    )}
                </g>
            ))}

            {/* ─── MAIN BODY SILHOUETTE ─── */}
            {/* Front arch: x= 147→283 (215±68)  |  Rear arch: x= 632→768 (700±68) */}
            <path
                d="
                  M 95,322
                  Q 80,322 76,308
                  Q 72,293 80,278
                  L 112,258 L 148,243 L 190,233 L 220,228 L 255,226
                  L 265,215 L 278,192 L 288,162 L 298,137
                  Q 308,123 322,120
                  L 592,120
                  Q 608,120 622,130
                  L 636,152 L 650,182 L 660,210 L 700,228 L 755,242 L 795,260 L 820,278
                  Q 828,292 827,308
                  Q 825,322 812,325
                  L 768,325
                  A 68,68 0 0 0 632,325
                  L 283,325
                  A 68,68 0 0 0 147,325
                  L 95,322 Z
                "
                fill="#1a1a1a"
                stroke="#2d2d2d"
                strokeWidth="1.5"
            />

            {/* Arch lip trim */}
            <path d="M 147,325 A 68,68 0 0 1 283,325" fill="none" stroke="#333" strokeWidth="2" />
            <path d="M 632,325 A 68,68 0 0 1 768,325" fill="none" stroke="#333" strokeWidth="2" />

            {/* Body character line */}
            <path d="M 148,248 Q 300,237 460,236 Q 568,235 660,243 L 758,252" fill="none" stroke="#232323" strokeWidth="1.5" />

            {/* LED accent line – Alloy mod */}
            {hasAlloy && (
                <g>
                    <path d="M 148,248 Q 300,237 460,236 Q 568,235 660,243 L 758,252" fill="none" stroke="#e63946" strokeWidth="2" opacity="0.75" filter="url(#cc-led)" />
                    <path d="M 148,248 Q 300,237 460,236 Q 568,235 660,243 L 758,252" fill="none" stroke="#ff4444" strokeWidth="9" opacity="0.1" />
                </g>
            )}

            {/* Door line vertical */}
            <line x1="490" y1="228" x2="490" y2="320" stroke="#1e1e1e" strokeWidth="1.5" />

            {/* Rocker sill highlight */}
            <path d="M 282,317 L 630,317 L 630,322 L 282,322 Z" fill="#1e1e1e" />

            {/* ─── WINDOWS ─── */}
            {/* Windshield */}
            <path d="M 278,192 L 295,148 L 308,128 L 322,122 L 368,120 L 372,228 L 286,213 Z"
                fill={hasTint ? 'rgba(16,24,78,0.93)' : 'rgba(18,40,65,0.78)'}
                stroke="#333" strokeWidth="1" />

            {/* Front side window */}
            <path d="M 372,228 L 368,120 L 488,118 L 488,232 Z"
                fill={hasTint ? 'rgba(12,22,74,0.95)' : 'rgba(16,38,62,0.82)'}
                stroke="#333" strokeWidth="1" />

            {/* Rear side window */}
            <path d="M 488,232 L 488,118 L 590,120 L 594,228 Z"
                fill={hasTint ? 'rgba(10,20,70,0.95)' : 'rgba(14,36,60,0.82)'}
                stroke="#333" strokeWidth="1" />

            {/* Rear windshield */}
            <path d="M 594,228 L 590,120 L 612,122 L 628,133 L 642,156 L 652,192 Z"
                fill={hasTint ? 'rgba(8,18,68,0.95)' : 'rgba(12,34,58,0.82)'}
                stroke="#333" strokeWidth="1" />

            {/* B-pillar */}
            <rect x="484" y="118" width="8" height="116" fill="#181818" rx="1" />

            {/* Glass reflections (hidden when tinted) */}
            {!hasTint && (
                <g opacity="0.11" fill="#ffffff">
                    <path d="M 295,148 L 312,130 L 345,121 L 343,135 Z" />
                    <path d="M 378,121 L 428,119 L 426,130 L 376,132 Z" />
                </g>
            )}

            {/* Tint colour overlay + UV text */}
            {hasTint && (
                <g>
                    {[
                        "M 278,192 L 295,148 L 308,128 L 322,122 L 368,120 L 372,228 L 286,213 Z",
                        "M 372,228 L 368,120 L 488,118 L 488,232 Z",
                        "M 488,232 L 488,118 L 590,120 L 594,228 Z",
                        "M 594,228 L 590,120 L 612,122 L 628,133 L 642,156 L 652,192 Z",
                    ].map((d, i) => <path key={i} d={d} fill="rgba(30,55,140,0.28)" />)}
                    <text x="450" y="185" textAnchor="middle" fontSize="10" fill="rgba(119,153,255,0.7)" fontFamily="monospace" letterSpacing="2">UV BLOCK 99%</text>
                </g>
            )}

            {/* ─── HEADLIGHTS ─── */}
            <path d="M 148,244 L 168,237 L 178,252 L 158,259 Z" fill={hasAlloy ? '#e8e8e8' : '#999'} opacity={hasAlloy ? 1 : 0.7} />
            <path d="M 114,263 L 148,252 L 151,258 L 117,269 Z" fill={hasAlloy ? '#00bbff' : '#666'} opacity={hasAlloy ? 1 : 0.5} />
            {hasAlloy && (
                <>
                    <path d="M 148,244 L 168,237 L 178,252 L 158,259 Z" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 9px #ffffff)' }} />
                    <path d="M 114,263 L 148,252 L 151,258 L 117,269 Z" fill="#00bbff" style={{ filter: 'drop-shadow(0 0 7px #00aaff)' }} />
                </>
            )}

            {/* ─── TAILLIGHTS ─── */}
            <path d="M 756,243 L 772,248 L 769,264 L 753,259 Z" fill={hasAlloy ? '#ff1111' : '#881111'} opacity={hasAlloy ? 1 : 0.7} />
            <path d="M 774,262 L 800,270 L 798,276 L 772,268 Z" fill={hasAlloy ? '#ff3333' : '#661111'} opacity={hasAlloy ? 1 : 0.5} />
            {hasAlloy && (
                <>
                    <path d="M 756,243 L 772,248 L 769,264 L 753,259 Z" fill="#ff2222" style={{ filter: 'drop-shadow(0 0 11px #ff2222)' }} />
                    <path d="M 774,262 L 800,270 L 798,276 L 772,268 Z" fill="#ff4444" style={{ filter: 'drop-shadow(0 0 7px #ff3333)' }} />
                </>
            )}

            {/* ─── STATIC DETAILS ─── */}
            {/* Side mirror */}
            <rect x="230" y="228" width="26" height="13" rx="4" fill="#131313" stroke="#222" strokeWidth="1" />

            {/* Camera dot in mirror – 360° mod */}
            {hasCamera && <circle cx="243" cy="234" r="3.5" fill="#22dd88" style={{ filter: 'drop-shadow(0 0 4px #22dd88)' }} />}

            {/* Door handles */}
            <rect x="390" y="267" width="32" height="7" rx="3" fill="#222" />
            <rect x="548" y="267" width="32" height="7" rx="3" fill="#222" />

            {/* Grille slats */}
            <path d="M 82,290 L 113,273 L 116,280 L 85,296 Z" fill="#141414" stroke="#282828" strokeWidth="1" />
            {[277, 282, 287].map(y => (
                <line key={y} x1="83" y1={y} x2="114" y2={y - 13} stroke="#1e1e1e" strokeWidth="0.8" />
            ))}

            {/* Fuel cap */}
            <circle cx="668" cy="225" r="8" fill="#141414" stroke="#2b2b2b" strokeWidth="1.5" />
            <circle cx="668" cy="225" r="4" fill="#181818" />

            {/* ─── ANDROID: Dashboard screen glow ─── */}
            {hasAndroid && (
                <g>
                    <rect x="300" y="184" width="62" height="40" rx="5" fill="rgba(0,18,38,0.8)" />
                    <rect x="303" y="187" width="56" height="34" rx="3" fill="#00101e" opacity="0.95" />
                    {/* Map lines */}
                    <line x1="308" y1="196" x2="354" y2="196" stroke="#00d4ff" strokeWidth="0.9" opacity="0.5" />
                    <line x1="308" y1="203" x2="354" y2="203" stroke="#00d4ff" strokeWidth="0.9" opacity="0.35" />
                    <line x1="308" y1="210" x2="354" y2="210" stroke="#00d4ff" strokeWidth="0.9" opacity="0.25" />
                    {/* Route */}
                    <path d="M 315,213 L 322,207 L 330,209 L 340,205 L 350,208" fill="none" stroke="#00d4ff" strokeWidth="1.2" opacity="0.6" />
                    <circle cx="322" cy="207" r="2.5" fill="#00d4ff" opacity="0.85" />
                    {/* Screen glow outline */}
                    <rect x="296" y="181" width="70" height="47" rx="7" fill="none" stroke="#00d4ff" strokeWidth="1.2" opacity="0.4" style={{ filter: 'blur(1.5px)' }} />
                    <rect x="296" y="181" width="70" height="47" rx="7" fill="rgba(0,212,255,0.05)" />
                    {/* GPS pin */}
                    <circle cx="360" cy="172" r="5" fill="#00d4ff" style={{ filter: 'drop-shadow(0 0 6px #00d4ff)' }} />
                    <text x="366" y="169" fontSize="8" fill="#00d4ff" opacity="0.8" fontFamily="monospace">GPS</text>
                    <text x="450" y="362" textAnchor="middle" fontSize="10" fill="rgba(0,212,255,0.65)" fontFamily="monospace" letterSpacing="2">ANDROID ACTIVE</text>
                </g>
            )}

            {/* ─── 360° CAMERAS: Dot indicators ─── */}
            {hasCamera && (
                <g>
                    {/* Front cam */}
                    <circle cx="86" cy="292" r="8" fill="#22dd88" style={{ filter: 'drop-shadow(0 0 9px #22dd88)' }} />
                    <circle cx="86" cy="292" r="3.5" fill="#fff" />
                    <circle cx="86" cy="292" r="1.5" fill="#22dd88" />
                    {/* Rear cam */}
                    <circle cx="828" cy="295" r="8" fill="#22dd88" style={{ filter: 'drop-shadow(0 0 9px #22dd88)' }} />
                    <circle cx="828" cy="295" r="3.5" fill="#fff" />
                    <circle cx="828" cy="295" r="1.5" fill="#22dd88" />
                    {/* Roof cams (front + rear) */}
                    <circle cx="248" cy="232" r="5.5" fill="#22dd88" style={{ filter: 'drop-shadow(0 0 5px #22dd88)' }} />
                    <circle cx="248" cy="232" r="2" fill="#fff" />
                    <circle cx="730" cy="238" r="5.5" fill="#22dd88" style={{ filter: 'drop-shadow(0 0 5px #22dd88)' }} />
                    <circle cx="730" cy="238" r="2" fill="#fff" />
                    {/* FOV dashes */}
                    <path d="M 86,292 L 106,306 M 86,292 L 106,278" stroke="#22dd88" strokeWidth="1" strokeDasharray="4,3" opacity="0.35" />
                    <path d="M 828,295 L 808,309 M 828,295 L 808,281" stroke="#22dd88" strokeWidth="1" strokeDasharray="4,3" opacity="0.35" />
                    <text x="450" y="362" textAnchor="middle" fontSize="10" fill="rgba(34,221,136,0.7)" fontFamily="monospace" letterSpacing="2">4-CAM ACTIVE</text>
                </g>
            )}

            {/* ─── SEATS: Leather overlay ─── */}
            {hasSeats && (
                <g>
                    {/* Driver seat */}
                    <path d="M 428,152 L 448,148 L 454,175 L 450,188 L 432,185 L 426,172 Z"
                        fill="rgba(200,169,110,0.84)"
                        style={{ filter: 'drop-shadow(0 0 6px rgba(200,169,110,0.45))' }} />
                    {/* Diamond stitch */}
                    {[[430, 158], [440, 158], [430, 168], [440, 168], [435, 163]].map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r="1.3" fill="#8a5c20" opacity="0.5" />
                    ))}
                    <path d="M 431,158 L 439,158 L 441,164 L 435,167 L 429,164 Z" fill="none" stroke="#a07030" strokeWidth="0.8" opacity="0.5" />
                    {/* Passenger seat (softer) */}
                    <path d="M 460,155 L 480,151 L 484,172 L 480,184 L 462,182 L 458,170 Z"
                        fill="rgba(200,169,110,0.62)"
                        style={{ filter: 'drop-shadow(0 0 4px rgba(200,169,110,0.3))' }} />
                    <text x="450" y="210" textAnchor="middle" fontSize="9" fill="rgba(200,169,110,0.7)" fontFamily="monospace" letterSpacing="1">PREMIUM LEATHER</text>
                </g>
            )}

            {/* ─── INTERIOR: Ambient lighting ─── */}
            {hasInterior && (
                <g>
                    {/* Cabin wash */}
                    <path d="M 278,192 L 295,148 L 308,128 L 322,122 L 368,120 L 372,228 L 286,213 Z" fill="rgba(255,102,170,0.1)" />
                    <path d="M 372,228 L 368,120 L 488,118 L 488,232 Z" fill="rgba(255,102,170,0.08)" />
                    <path d="M 488,232 L 488,118 L 590,120 L 594,228 Z" fill="rgba(255,102,170,0.08)" />
                    {/* Window sill strip */}
                    <path d="M 334,226 L 592,224 L 592,229 L 334,231 Z" fill="#ff66aa" opacity="0.65" style={{ filter: 'drop-shadow(0 0 5px #ff66aa)' }} />
                    {/* Roof strip */}
                    <path d="M 338,121 L 586,121 L 586,124 L 338,124 Z" fill="#ff66aa" opacity="0.42" style={{ filter: 'drop-shadow(0 0 4px #ff66aa)' }} />
                    {/* Door sill strips */}
                    <path d="M 284,315 L 488,313 L 488,318 L 284,320 Z" fill="#cc4488" opacity="0.6" style={{ filter: 'drop-shadow(0 0 7px #cc4488)' }} />
                    <path d="M 488,313 L 630,315 L 630,320 L 488,318 Z" fill="#cc4488" opacity="0.5" style={{ filter: 'drop-shadow(0 0 7px #cc4488)' }} />
                    {/* Steering wheel */}
                    <circle cx="336" cy="198" r="20" fill="none" stroke="#ff66aa" strokeWidth="2.5" opacity="0.68" style={{ filter: 'drop-shadow(0 0 5px #ff66aa)' }} />
                    <line x1="336" y1="178" x2="336" y2="198" stroke="#ff66aa" strokeWidth="1.5" opacity="0.5" />
                    <line x1="316" y1="198" x2="336" y2="198" stroke="#ff66aa" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="336" cy="198" r="5" fill="#ff66aa" opacity="0.72" />
                    <text x="450" y="362" textAnchor="middle" fontSize="10" fill="rgba(255,102,170,0.7)" fontFamily="monospace" letterSpacing="2">AMBIENT ON</text>
                </g>
            )}

        </svg>
    );
}

/* ── Main Component ── */
export default function CarConfigurator() {
    const [activeMod, setActiveMod] = useState(null);
    const mod = MODS.find(m => m.id === activeMod);

    const toggle = (id) => setActiveMod(prev => (prev === id ? null : id));

    return (
        <section className="cc-section section" id="configurator">
            <div className="container">

                {/* Section Header */}
                <div className="section-header reveal">
                    <div className="section-tag">Interactive 360° Showcase</div>
                    <h2 className="section-title">Build Your <span>Dream Ride</span></h2>
                    <p className="section-desc">
                        Select any modification below to preview how it transforms your vehicle — live on the car.
                    </p>
                </div>

                {/* Configurator */}
                <div className="cc-layout reveal">

                    {/* ── Car Stage ── */}
                    <div className="cc-stage">
                        <div className="cc-platform">
                            {/* Spinning ring decoration */}
                            <div className="cc-ring cc-ring--outer" />
                            <div className="cc-ring cc-ring--inner" />

                            {/* Dynamic glow puddle */}
                            <div className="cc-glow-puddle"
                                style={mod
                                    ? { background: `radial-gradient(ellipse at center, ${mod.color}22 0%, transparent 70%)`, opacity: 1 }
                                    : { opacity: 0 }
                                }
                            />

                            {/* Car */}
                            <div className="cc-car-wrap">
                                <CarSVG activeMod={activeMod} />
                            </div>

                            {/* Platform base */}
                            <div className="cc-platform-disc"
                                style={mod ? { boxShadow: `0 0 40px 12px ${mod.color}18` } : {}}
                            />
                        </div>

                        {/* Detail strip */}
                        <div className={`cc-detail-bar ${activeMod ? 'is-visible' : ''}`}
                            style={mod
                                ? { borderColor: mod.color + '40', background: `linear-gradient(135deg, ${mod.color}0a, transparent)` }
                                : {}
                            }
                        >
                            {mod ? (
                                <>
                                    <span className="cc-detail-tag" style={{ color: mod.color, borderColor: mod.color + '55' }}>{mod.tag}</span>
                                    <p className="cc-detail-text">{mod.detail}</p>
                                </>
                            ) : (
                                <p className="cc-detail-text cc-detail-hint">← Select a modification above to preview it live on the car</p>
                            )}
                        </div>
                    </div>

                    {/* ── Mod Selector ── */}
                    <div className="cc-mods">
                        {MODS.map(m => {
                            const Icon = m.icon;
                            const isActive = activeMod === m.id;
                            return (
                                <button
                                    key={m.id}
                                    className={`cc-mod-btn ${isActive ? 'is-active' : ''}`}
                                    onClick={() => toggle(m.id)}
                                    style={isActive ? {
                                        borderColor: m.color,
                                        boxShadow: `0 0 22px ${m.color}2a, inset 0 0 18px ${m.color}08`,
                                        background: `linear-gradient(135deg, ${m.color}12, transparent)`,
                                    } : {}}
                                >
                                    <div className="cc-mod-icon"
                                        style={isActive
                                            ? { background: m.color + '20', color: m.color, boxShadow: `0 0 12px ${m.color}30` }
                                            : {}
                                        }
                                    >
                                        <Icon />
                                    </div>
                                    <div className="cc-mod-info">
                                        <span className="cc-mod-label">{m.label}</span>
                                        <span className="cc-mod-sub">{m.shortDesc}</span>
                                    </div>
                                    <div className={`cc-mod-check ${isActive ? 'is-visible' : ''}`}
                                        style={{ background: m.color }}
                                    >✓</div>
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}