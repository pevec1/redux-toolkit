import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Card from './pages/Card'
import Favorites from './pages/Favorites'

import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App
