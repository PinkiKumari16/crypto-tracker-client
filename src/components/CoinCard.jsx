import React from "react";
import { Link } from "react-router-dom";

export const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.coinId}`}>
      <div className="bg-white rounded-2xl shadow-md p-5 w-full sm:w-[300px] hover:shadow-lg transition duration-200 ease-in-out">
        {/* Header: Coin Name & Symbol */}
        <div className="flex items-center gap-3 mb-4">
          <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-lg font-bold text-gray-800">{coin.name}</h2>
            <p className="text-xs uppercase text-gray-500">{coin.symbol}</p>
          </div>
        </div>

        {/* Price, Market Cap, Change */}
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium text-gray-600">Current Price:</span>{" "}
            <span className="text-blue-700 font-semibold">
              ${coin.price.toLocaleString()}
            </span>
          </p>

          <p>
            <span className="font-medium text-gray-600">Market Cap:</span>{" "}
            ${coin.marketCap.toLocaleString()}
          </p>

          <p
            className={`font-medium ${
              coin.change24h >= 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            24h Change: {coin.change24h?.toFixed(2)}%
          </p>
        </div>

        {/* Footer: Last Updated */}
        <div className="text-xs text-gray-400 mt-4 border-t pt-2">
          Last updated: {new Date(coin.lastUpdated).toLocaleString()}
        </div>
      </div>
    </Link>
  );
};
