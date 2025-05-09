import { useEffect } from 'react';

const useGoogleAnalytics = () => {
  useEffect(() => {
    // Load the gtag.js script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NPPDDSTXD4';
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag once the script is loaded
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-NPPDDSTXD4');
    };
  }, []);
};

export default useGoogleAnalytics;
