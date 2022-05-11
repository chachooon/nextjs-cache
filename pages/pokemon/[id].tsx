import React from 'react';
import axios from 'axios';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { useQuery, QueryClient, dehydrate } from 'react-query';
import { useRouter } from 'next/router';


interface PokemonCardProps {
  name: string;
  image: string;
  weight: number;
  xp: number;
  abilities: string[];
}

const PokemonCard = ({ name, image, weight, abilities, xp }: PokemonCardProps) => (
  <div className="pokemon-card-large">
    <h2>{name}</h2>
    <img src={image} alt={name} width="100px" />
    <div className="card-section">
      <p className="card-section-title">XP</p>
      <div className="card-section-content">{xp}</div>
    </div>
    <div className="card-section">
      <p className="card-section-title">Weight</p>
      <div className="card-section-content">{weight / 10} kg</div>
    </div>
    <div className="card-section">
      <p className="card-section-title">Abilities</p>
      <ul>
        {abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
    </div>
  </div>
);

const fetchPokemon = (id: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({ data }) => data);

export default function Pokemon() {
  const router = useRouter();
  const pokemonID = typeof router.query?.id === 'string' ? router.query.id : '';

  const { status, data: pokemon } = useQuery(['getPokemon', pokemonID], () => fetchPokemon(pokemonID), {
    enabled: true,
    staleTime: Infinity
  });

  return (

      <div >
        <div className="search-message">{status} </div>
        <br />
        {pokemon && (
          <PokemonCard
            name={pokemon.name}
            image={pokemon.sprites?.other?.['official-artwork']?.front_default}
            weight={pokemon.weight}
            xp={pokemon.base_experience}
            abilities={pokemon.abilities?.map((item: any) => item.ability.name)}
          />
        )}
      </div>
 
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getPokemon', id], () => fetchPokemon(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});
