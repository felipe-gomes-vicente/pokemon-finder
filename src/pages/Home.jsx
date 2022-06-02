import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/images/pikachu-image.png"

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <main className="home-content">
            <h1>
              Qual pokemon você <span>escolheria</span>?
            </h1>
            <p>
              Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
              habilidades.
            </p>
            <Link to="/pokemons">
              <button>Veja os pokemons</button>
            </Link>
        </main>
        <aside className="home-image">
          <img alt="Pikachu background" src={homeImage} />
        </aside>
      </div>
    </>
  );
};
