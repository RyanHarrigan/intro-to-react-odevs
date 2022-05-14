import React, { useCallback, useEffect, useState } from 'react';

export type LogoContextType = {
  isLogoAnimating?: boolean;
  animateLogoCallback?: () => void;
}

export const LogoContext = React.createContext<LogoContextType>({});

export const LogoAnimationProvider: React.FC = ({children}) => {
  const [isLogoAnimating, setLogoAnimating] = useState(false);

  const animateLogoCallback = useCallback(() => {
    if (!isLogoAnimating) {
      setLogoAnimating(true);
    }
  }, [isLogoAnimating, setLogoAnimating]);

  useEffect(() => {
    if (isLogoAnimating) {
      setTimeout(() => setLogoAnimating(false),1000);
    }
  }, [isLogoAnimating, setLogoAnimating]);

  return <LogoContext.Provider value={{
    isLogoAnimating,
    animateLogoCallback,
  }}>
    {children}
  </LogoContext.Provider>
}