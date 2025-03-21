import React from "react";
import { useNavigate } from "react-router-dom";
import CurrencyCard from "@/components/CurrencyCard";
import { usePagesHomeContext } from "@/contexts/pages/Home";

const HomeComponent: React.FC = () => {
  const navigate = useNavigate();
  const { prices, symbols } = usePagesHomeContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Crypto Market</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {symbols.map((symbol: string) => {
          const price = prices[symbol];
          return (
            <CurrencyCard
              key={symbol}
              symbol={symbol}
              price={price?.price || "0.00"}
              priceChange={price?.priceChange || 0}
              onClick={() => navigate(`/detail/${symbol}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeComponent;
