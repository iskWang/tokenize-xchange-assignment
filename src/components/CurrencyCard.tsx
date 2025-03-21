import React from 'react';

interface CurrencyCardProps {
  symbol: string;
  price: string;
  priceChange: number;
  onClick: () => void;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ symbol, price, priceChange, onClick }) => {
  const isPriceUp = priceChange >= 0;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-bold mb-2">{symbol}</h3>
      <div className={`text-lg ${isPriceUp ? 'text-green-500' : 'text-red-500'}`}>
        ${price}
      </div>
      <div className={`text-sm ${isPriceUp ? 'text-green-500' : 'text-red-500'}`}>
        {priceChange.toFixed(2)}%
      </div>
    </div>
  );
};

export default CurrencyCard;
