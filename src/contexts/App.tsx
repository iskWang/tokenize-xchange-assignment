import { createContext, useContext } from "react";

interface AppContextType {
  // Add global app state here
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContainer");
  }
  return context;
};
