import React, { createContext, useState } from 'react';

export const TwitchContext = createContext();

export const TwitchProvider = ({ children }) => {
  const [isTwitchExpanded, setIsTwitchExpanded] = useState(false);

  const toggleTwitch = () => {
    setIsTwitchExpanded(!isTwitchExpanded);
  };

  return (
    <TwitchContext.Provider value={{ isTwitchExpanded, toggleTwitch }}>
      {children}
    </TwitchContext.Provider>
  );
};
