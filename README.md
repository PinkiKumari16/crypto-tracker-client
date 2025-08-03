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
- **GitHub**: [Client Code](https://github.com/PinkiKumari16/client-crypto-tracker)
- **Frontend**: [Live URL](https://client-crypto-tracker.vercel.app/)
- **Backend**: [API URL](https://server-crypto-tracker.onrender.com/)

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

```bash
git clone https://github.com/PinkiKumari16/client-crypto-tracker.git
cd client-crypto-tracker ```

### 2. Install Dependencies
bash
Copy
Edit
npm install
3. 🔐 Environment Variables
Create a .env file in the root directory:

ini
Copy
Edit
VITE_BACKEND_URL=http://localhost:5000
Use your deployed backend URL if not running locally.

4. ▶️ Start Development Server
bash
Copy
Edit
npm run dev
Frontend will run at: http://localhost:5173

✅ Additional Features
Loader while fetching data

Error handling for API limits

Responsive grid layout

📧 Contact
Pinki Kumari
📩 pinkikmr2672002@gmail.com
🔗 LinkedIn

📄 License
This project was created for evaluation and learning purposes.
