import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import AddGamePage from "./pages/AddGamePage";
import Navbar from "./components/Navbar";
import CommunityPage from "./pages/CommunityPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/game/:id" element={<GameDetailPage />} />
          <Route path="/add-game" element={<AddGamePage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
