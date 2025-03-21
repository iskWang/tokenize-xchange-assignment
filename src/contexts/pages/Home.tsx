import { createContext, useContext } from "react";

interface PagesHomeContextType {
  prices: Record<string, { price: string; priceChange: number }>;
  symbols: string[];
  updatePrice: (symbol: string, price: string, priceChange: number) => void;
  setSymbols: (symbols: string[]) => void;
}

export const PagesHomeContext = createContext<PagesHomeContextType | undefined>(
  undefined
);

export const usePagesHomeContext = () => {
  const context = useContext(PagesHomeContext);
  if (!context) {
    throw new Error(
      "usePagesHomeContext must be used within a PagesHomeContainer"
    );
  }
  return context;
};
