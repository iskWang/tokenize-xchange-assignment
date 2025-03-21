import React, { createContext, useContext } from 'react';
import { KLineInterval } from '@/types/kline';

interface PagesDetailContextType {
  interval: KLineInterval;
  setInterval: (interval: KLineInterval) => void;
  chartData: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
  setChartData: React.Dispatch<React.SetStateAction<{
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  }[]>>;
}

export const PagesDetailContext = createContext<PagesDetailContextType | undefined>(undefined);

export const usePagesDetailContext = () => {
  const context = useContext(PagesDetailContext);
  if (!context) {
    throw new Error('usePagesDetailContext must be used within a PagesDetailContainer');
  }
  return context;
};
