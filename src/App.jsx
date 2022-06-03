import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Pokemons } from "./pages/pokemons";

import {PokemonDetails} from "./components/PokemonDetails";
import { Contact } from "./pages/Contact";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/:pokemonId" element={<PokemonDetails />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
