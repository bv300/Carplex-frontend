import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageLoader.css';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Consistent delay for all page changes (including anchors)

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  if (!loading) return null;

  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-circle"></div>
        <div className="loader-logo-container">
          <img src="/assets/carples logo.png" alt="Carplex" className="loader-logo" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
