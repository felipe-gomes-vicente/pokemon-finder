import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Pokemons } from "./pages/pokemons";

import {PokemonDetails} from "./components/PokemonDetails";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/:pokemonId" element={<PokemonDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
