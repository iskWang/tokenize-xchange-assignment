# Crypto Exchange App

This is a cryptocurrency exchange web application built with **React, TypeScript, TailwindCSS, and Lightweight Charts**. Users can view real-time cryptocurrency prices and detailed K-line charts.

## 📦 Features

- **Real-time Price Updates**: View live cryptocurrency prices from Binance API
- **Interactive Charts**: View K-line charts with multiple time intervals
- **Responsive Design**: Fully responsive UI that works on all devices
- **Type Safety**: Built with TypeScript for better code quality

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Language**: TypeScript
- **UI Library**: TailwindCSS
- **Charts**: Lightweight Charts
- **Package Manager**: pnpm

## Demo site

[https://me.josh.com.tw/tokenize-xchange-assignment](https://me.josh.com.tw/tokenize-xchange-assignment)

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/iskWang/tokenize-xchange-assignment.git
cd tokenize-xchange-assignment
```

### 2️⃣ Install Dependencies

```sh
pnpm install
```

### 3️⃣ Start Development Server

```sh
pnpm dev
```

### 4️⃣ Build for Production

```sh
pnpm build
```

### 5️⃣ Start Production Server

```sh
pnpm preview
```

## 📂 Project Structure

```
📦 src/
 ┣ 📂 components/      # UI Components
 ┃ ┣ 📂 pages/         # Page Components
 ┃ ┃ ┣ 📜 Home.tsx     # Home Page Component
 ┃ ┃ ┗ 📜 Detail.tsx   # Detail Page Component
 ┃ ┣ 📜 Chart.tsx      # Chart Component
 ┃ ┗ 📜 CurrencyCard.tsx# Currency Card Component
 ┣ 📂 containers/      # Container Components
 ┃ ┣ 📂 pages/         # Page Containers
 ┃ ┃ ┣ 📜 Home.tsx     # Home Page Container
 ┃ ┃ ┗ 📜 Detail.tsx   # Detail Page Container
 ┃ ┗ 📜 App.tsx        # App Container
 ┣ 📂 contexts/        # React Contexts
 ┃ ┗ 📂 pages/         # Page-specific Contexts
 ┃   ┣ 📜 Home.tsx     # Home Page Context
 ┃   ┗ 📜 Detail.tsx   # Detail Page Context
 ┣ 📂 scenes/          # Scene Components
 ┃ ┣ 📜 Home.tsx       # Home Scene
 ┃ ┗ 📜 Detail.tsx     # Detail Scene
 ┣ 📂 types/           # TypeScript Types
 ┃ ┗ 📜 kline.ts       # K-line Types
 ┣ 📜 App.tsx          # Main Application Component
 ┣ 📜 index.css        # TailwindCSS Styles
 ┣ 📜 main.tsx         # React App Entry Point
 ┗ 📜 vite.config.ts   # Vite Configuration
```

## 🏗 Architecture

The application follows a clear separation of concerns with the following structure:

- **Scenes**: Top-level route components
- **Components**: Presentational components
- **Containers**: Components with business logic
- **Contexts**: State management using React Context

## 📝 Notes

- Uses **Lightweight Charts** for professional-grade financial charts
- Implements real-time data fetching from Binance API
- Follows TypeScript best practices for type safety

## 📜 License

MIT License
