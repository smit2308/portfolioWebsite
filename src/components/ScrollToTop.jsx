import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();


  useEffect(() => {
    // Manually set scroll position to the top on route change
    window.scrollTo(0, 0);

    // If you want to disable automatic scroll restoration, you can use history.replaceState
    // Uncomment the following line to disable scroll restoration
    // history.replaceState(null, null, location.pathname);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
