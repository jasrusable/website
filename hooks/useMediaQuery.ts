import { useState, useEffect } from 'react';

interface MediaQueryResult {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

export const useMediaQuery = (): MediaQueryResult => {
  const [windowSize, setWindowSize] = useState<MediaQueryResult>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        width,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};