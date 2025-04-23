import React, { useState, useEffect } from "react";
import "../styles/pokemon.css";

interface Pokemon {
  name: string;
  species: any;
  sprites: any;
  moves: Array<{
    move: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  weight: number;
  abilities: {
    name: string;
  };
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <h3>{pokemon.name.toUpperCase()}</h3>
      </div>
      <div className="pokemon-card-image">
        <img
          alt={pokemon.name}
          src={
            pokemon.name !== "nidoran-m"
              ? `http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`
              : `http://play.pokemonshowdown.com/sprites/xyani/nidoranm.gif`
          }
        />
      </div>
      <div className="pokemon-card-content">
        <p className="pokemon-type">
          {`Type: ${pokemon.types[0].type.name} ${
            pokemon.types[1] !== undefined ? pokemon.types[1].type.name : ""
          }`.toUpperCase()}
        </p>

        <div className="pokemon-detail">
          <h4>ABILITY:</h4>
          <p>{pokemon.abilities.name.toUpperCase()}</p>
        </div>

        <div className="pokemon-detail">
          <h4>MOVES:</h4>
          <p>{pokemon.moves[0]?.move.name.toUpperCase() || "N/A"}</p>
        </div>

        <div className="pokemon-detail">
          <h4>MOVES:</h4>
          <p>
            {pokemon.moves[1]
              ? pokemon.moves[1].move.name.toUpperCase()
              : "N/A"}
          </p>
        </div>

        <div className="pokemon-detail">
          <h4>WEIGHT:</h4>
          <p>{pokemon.weight}lbs</p>
        </div>
      </div>
    </div>
  );
};

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo;
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pagination-button ${
            currentPage === number ? "active" : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &raquo;
      </button>
    </div>
  );
};

const PokemonGo: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(17); // 806/50 rounded up

  useEffect(() => {
    fetchPokemonData(page);
  }, [page]);

  const fetchPokemonData = async (pageNum: number) => {
    setIsLoading(true);

    try {
      const offset = (pageNum - 1) * 50;
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=50`;
      const response = await fetch(url);
      const data = await response.json();

      const pokemonDetails: Pokemon[] = [];

      // Use Promise.all to parallelize requests
      await Promise.all(
        data.results.map(async (pokemon: { name: string }) => {
          const detailUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
          try {
            const detailResponse = await fetch(detailUrl);
            const pokeData = await detailResponse.json();

            pokemonDetails.push({
              species: pokeData.species,
              sprites: pokeData.sprites,
              moves: pokeData.moves,
              types: pokeData.types,
              weight: pokeData.weight,
              name: pokemon.name,
              abilities: pokeData.abilities[0].ability,
            });
          } catch (error) {
            console.error(`Error fetching details for ${pokemon.name}:`, error);
          }
        })
      );

      setPokemonList(pokemonDetails);
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return <div className="loading-container">Loading Pokemon data...</div>;
  }

  return (
    <div className="pokemon-container">
      <h2 className="pokemon-title">Pokemon Database</h2>

      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PokemonGo;
