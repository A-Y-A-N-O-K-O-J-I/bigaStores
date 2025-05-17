import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import TechTips from "./pages/Tips";
import SwapForm from "./pages/swap";
import BuyForm from "./pages/buy";
import SellForm from "./pages/sell";
import ArticlePage from "./pages/Articles";
import NotFoundPage from "./pages/NotFound"; // Add a NotFound page for undefined routes

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/techtips" element={<TechTips />} />
        <Route path="/swap" element={<SwapForm />} />
        <Route path="/buy" element={<BuyForm />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        
        {/* Wildcard route for any undefined path */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
