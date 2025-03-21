import React, { useEffect, useState, useCallback } from "react";
import { PagesHomeContext } from "@/contexts/pages/Home";

interface HomeContainerProps {
  children: React.ReactNode;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => {
  const [prices, setPrices] = useState<
    Record<string, { price: string; priceChange: number }>
  >({});
  const [symbols, setSymbols] = useState<string[]>([]);

  const updatePrice = useCallback(
    (symbol: string, price: string, priceChange: number) => {
      setPrices((prev) => ({
        ...prev,
        [symbol]: { price, priceChange },
      }));
    },
    []
  );

  const fetchPrices = async () => {
    try {
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/24hr"
      );
      const data = await response.json();

      // Filter and sort USDT pairs by quote volume
      const usdtPairs = data
        .filter((pair: any) => pair.symbol.endsWith("USDT"))
        .sort(
          (a: any, b: any) =>
            parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume)
        )
        .slice(0, 15);

      // Set symbols first
      const topSymbols = usdtPairs.map((pair: any) => pair.symbol);
      setSymbols(topSymbols);

      // Then update prices
      usdtPairs.forEach((pair: any) => {
        updatePrice(
          pair.symbol,
          parseFloat(pair.lastPrice).toFixed(2),
          parseFloat(pair.priceChangePercent)
        );
      });
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, [updatePrice]);

  return (
    <PagesHomeContext.Provider
      value={{
        prices,
        symbols,
        updatePrice,
        setSymbols,
      }}
    >
      {children}
    </PagesHomeContext.Provider>
  );
};

export default HomeContainer;
