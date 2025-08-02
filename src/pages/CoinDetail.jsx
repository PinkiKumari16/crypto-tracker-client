import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { Loader } from "../components/Loader";

export const CoinDetail = () => {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/history/${coinId}`);
        const formatted = res.data.map((item) => ({
          ...item,
          date: new Date(item.timestamp).toLocaleDateString(),
        }));
        setHistory(formatted);
        if (formatted.length > 0) {
          setLatest(formatted[formatted.length - 1]);
        }
      } catch (err) {
        console.error("Failed to load history:", err.message);
      }
    };

    fetchData();
  }, [coinId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-6 px-3 sm:px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-blue-900 bg-white border border-blue-900 px-2 py-1 rounded-md shadow hover:bg-blue-100 transition"
      >
        ← Back
      </button>

      {/* Coin Info Header */}
      <div className="bg-blue-950 text-white py-6 px-4 rounded-2xl shadow-md mb-8">
        {latest ? (
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
            {/* Left Side - Coin Info */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold">
                🪙 {latest.name} ({latest.symbol})
              </h1>
              <p className="text-sm mt-2 sm:mt-1">
                Last updated: {new Date(latest.timestamp).toLocaleString()}
              </p>
            </div>

            {/* Right Side - Price Info */}
            <div className="text-center sm:text-right">
              <p className="text-lg font-semibold text-blue-300">
                Current Price:{" "}
                <span className="text-white">
                  ${latest.price.toLocaleString()}
                </span>
              </p>
              <p className="text-sm">
                Market Cap: ${latest.marketCap.toLocaleString()}
              </p>
              <p
                className={`text-sm font-semibold ${
                  latest.change24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                24h Change: {latest.change24h?.toFixed(2)}%
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center"><Loader /></p>
        )}
      </div>

      {/* Chart Section */}
      {history.length === 0 ? (
        <p className="text-center text-gray-500">Loading chart data...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl font-bold text-center text-blue-800 mb-4">
            Price Trend (Daily)
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={history}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} />
              <YAxis dataKey="price" domain={["auto", "auto"]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#007BFF"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
