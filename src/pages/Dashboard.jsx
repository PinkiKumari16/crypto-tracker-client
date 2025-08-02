import React, { useEffect, useState } from "react";
import { CoinCard } from "../components/CoinCard";
import axios from "axios";
import { Loader } from "../components/Loader";

export const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const getLiveData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/coins");
      // console.log(res.data);
      setCoins(res.data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.log(error);
    }
  };

  const addHistory = async () => {
    // console.log("api hitting");
    try {
      const res = await axios.post("http://localhost:5000/api/history");
      // console.log(res.data);
      alert(res.data.message);
    } catch (err) {
      console.error("Cron error:", err.message);
    }
  };

  // // Fetch data on load and every 30 minutes
  useEffect(() => {
    getLiveData();
    const interval = setInterval(() => {
      console.log('fetch after 30 mintus ........')
      getLiveData();
    }, 30 * 60 * 1000); // Every 30 minutes
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins
    .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.price - b.price
        : b.price - a.price
    );

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-4 px-2">
      {/* <Loader /> */}
      {/* Header */}
      <div className="bg-blue-950 text-white py-6 px-4 sm:py-8 rounded-2xl shadow-md mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-center mb-8">
          🪙 Top 10 Cryptocurrencies
        </h1>

        {/* Info Row */}
        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-4">
          {/* Last Updated */}
          {lastUpdated && (
            <p className="text-gray-300 text-sm md:text-base text-left w-full md:w-auto">
              Last updated at:{" "}
              <span className="font-medium">{lastUpdated}</span>
            </p>
          )}
          
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search coin..."
            className="w-full sm:w-[500px] pl-4 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Sort + Add Button */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            {/* Sort */}
            <select
              className="w-full sm:w-[220px] px-1 py-2 border border-gray-300 rounded-lg text-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">🔽 Price: High → Low</option>
              <option value="asc">🔼 Price: Low → High</option>
            </select>

            {/* Add History Button */}
            <button
              onClick={addHistory}
              className="sm:w-auto bg-white text-blue-900 px-4 py-1 rounded-md shadow hover:bg-gray-100 transition cursor-pointer"
            >
              ➕ Add History
            </button>
          </div>
        </div>
      </div>

      {/* Coin Cards */}
      {filteredCoins.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          <Loader />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
            {filteredCoins.map((coin) => (
              <CoinCard key={coin.coinId} coin={coin} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
