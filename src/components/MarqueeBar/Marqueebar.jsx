import { FaStar, FaDiamond } from 'react-icons/fa6';
import './Marqueebar.css';

const LOGO = '/assets/carples logo.png';

const items = [
  { icon: 'diamond', text: 'Android Upgrade' },
  { icon: 'star',    text: '360° Camera' },
  { icon: 'diamond', text: 'Seat Covers' },
  { icon: 'star',    text: 'Car Tinting' },
  { icon: 'diamond', text: 'Interior Design' },
  { icon: 'star',    text: 'Alloy Wheels & LED Lights' },
];

function MarqueeLap({ suffix = '' }) {
  return (
    <>
      <span className="marquee-logo-wrap">
        <img src={LOGO} alt="Carplex UAE" className="marquee-logo" />
      </span>

      {items.map(({ icon, text }, i) => (
        <span key={`${suffix}-${i}`} className="marquee-item">
          {icon === 'star'
            ? <FaStar className="marquee-icon" />
            : <FaDiamond className="marquee-icon" />}
          {text}
        </span>
      ))}
    </>
  );
}

function MarqueeBar() {
  return (
    <div className="marquee-bar" aria-label="Promotions ticker">
      <div className="marquee-track">
        <MarqueeLap suffix="a" />
        <MarqueeLap suffix="b" />
      </div>
    </div>
  );
}

export default MarqueeBar;