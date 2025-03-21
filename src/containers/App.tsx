import React from "react";
import { AppContext } from "../contexts/App";

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const value = {
    // Add global app state here
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContainer;
