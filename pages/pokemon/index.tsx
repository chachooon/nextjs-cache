import { useQuery } from 'react-query';
import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const PokemonsSearchResult = (pokemons: any) =>
  pokemons?.pokemons?.length > 0 ? (
    <div className="search-grid">
      {pokemons.pokemons.map((pokemon: any) => (
        <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}>
          <a>
            <div className="pokemon-card">{pokemon.name}</div>
          </a>
        </Link>
      ))}
    </div>
  ) : (
    <div className="search-message"> No pokemons found</div>
  );

const fetchPokemon = () => axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(({ data }) => data);

export default function IndexPage() {
  const { data, status } = useQuery('getPokemon', () => fetchPokemon(), {
    enabled: true,
    staleTime: Infinity
  });

  return (

      <div>
        <p style={{ color: 'yellow' }}>{status}</p>
        <br />
        {data && <PokemonsSearchResult pokemons={data.results} />}
      </div>

  );
}
