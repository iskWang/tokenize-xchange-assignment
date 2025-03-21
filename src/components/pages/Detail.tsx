import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Chart from "../Chart";
import DetailContainer from "../../containers/pages/Detail";
import { usePagesDetailContext } from "@/contexts/pages/Detail";
import { KLineIntervalArray } from "@/types/kline";

const DetailContent: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const navigate = useNavigate();
  const { interval, setInterval, chartData } = usePagesDetailContext();
  const intervals = KLineIntervalArray;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate("/")}
          className="mr-4 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold">{symbol}</h1>
      </div>

      <div
        className="bg-white rounded-lg shadow-lg p-4 mb-4 w-full"
        style={{ minHeight: "460px" }}
      >
        <Chart data={chartData} />
      </div>

      <div className="flex gap-2">
        {intervals.map((int) => (
          <button
            key={int}
            onClick={() => setInterval(int)}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              interval === int
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {int}
          </button>
        ))}
      </div>
    </div>
  );
};

const Detail: React.FC = () => {
  return (
    <DetailContainer>
      <DetailContent />
    </DetailContainer>
  );
};

export default Detail;
