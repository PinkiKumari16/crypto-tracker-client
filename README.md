# 💹 Crypto Tracker

A responsive client-side dashboard that displays real-time cryptocurrency data for the top 10 coins, allows search/sort functionality, and shows historical price trends with clean chart visualizations. Built using **React** and styled with **Tailwind CSS**.

---

## 🔧 Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS** for modern styling
- **Axios** for API calls
- **Recharts** for chart rendering
- **Vite** for faster dev build

### Backend (Connected to)
- [Node.js + Express.js API](https://github.com/PinkiKumari16/server-crypto-tracker)
- CoinGecko API for live market data
- MongoDB for history snapshots

### Deployment
- **Frontend**: [Vercel](https://vercel.com/)
- **Backend**: [Render](https://render.com/)

---

## 🚀 Live Demo
- **GitHub**: [Client Code](https://github.com/PinkiKumari16/crypto-tracker-client)
- **Frontend**: [Live URL](https://crypto-tracker-client-delta.vercel.app/)
- **Backend**: [API URL](https://crypto-tracker-server-qjd0.onrender.com/)

---

## 🔑 Features

### 📈 Live Market Data
- Top 10 cryptocurrencies by market cap
- Search coins by name
- Sort coins by price (high → low or low → high)
- View last updated timestamp

### 📊 Historical Chart
- View historical price data (daily snapshots)
- Clean line chart using Recharts

### ➕ Snapshot Feature
- Add snapshot manually to database with one click
- Trigger backend `/api/history` POST

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash[
https://github.com/PinkiKumari16/crypto-tracker-client.git
cd client-crypto-tracker
```

### 2. Setup Frontend
```
npm install
```

#### 2. Run the Frontend App

```
npm run dev
```
Frontend will be available at: http://localhost:5173

## ✅ Additional Features
- Loader while fetching data
- Error handling for API limits
- Responsive grid layout

## 📧 Contact
**Pinki Kumari**
- pinkikmr2672002@gmail.com
- [Linkedin](https://www.linkedin.com/in/pinki-kumari-42b409257/)

## License
This project was created for evaluation as part of an interview assignment.
