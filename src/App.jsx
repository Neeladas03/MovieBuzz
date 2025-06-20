import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.title === movie.title)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home onFavorite={handleAddToFavorites} />} />
          <Route path='/favorites' element={<Favorites favorites={favorites} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
















