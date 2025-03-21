import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PagesDetailContext } from "@/contexts/pages/Detail";
import { KLineInterval } from "@/types/kline";

interface PageDetailContainerProps {
  children: React.ReactNode;
}

const PageDetailContainer: React.FC<PageDetailContainerProps> = ({
  children,
}) => {
  const { symbol } = useParams<{ symbol: string }>();
  const [interval, setInterval] = useState<KLineInterval>(
    KLineInterval.OneHour
  );
  const [chartData, setChartData] = useState<
    {
      time: number;
      open: number;
      high: number;
      low: number;
      close: number;
    }[]
  >([]);

  const fetchKlineData = async () => {
    try {
      const response = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=100`
      );
      const data = await response.json();

      const formattedData = data.map((item: any[]) => ({
        time: item[0] / 1000,
        open: parseFloat(item[1]),
        high: parseFloat(item[2]),
        low: parseFloat(item[3]),
        close: parseFloat(item[4]),
      }));

      setChartData(formattedData);
    } catch (error) {
      console.error("Error fetching kline data:", error);
    }
  };

  useEffect(() => {
    if (symbol) {
      fetchKlineData();
    }
  }, [symbol, interval]);

  return (
    <PagesDetailContext.Provider
      value={{ interval, setInterval, chartData, setChartData }}
    >
      {children}
    </PagesDetailContext.Provider>
  );
};

export default PageDetailContainer;
