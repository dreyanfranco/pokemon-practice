import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const getPokemons = async () => {
  return axiosInstance.get('/pokemons')
};

export const getPokemonById = (pokemon_id: string) => {
  return axiosInstance.get(`/pokemons/${pokemon_id}`);
};

export const newPokemon = (pokemonData: any) => {
  return axiosInstance.post('/pokemons', pokemonData);
};

export const deletePokemonById = (pokemon_id: string) => {
  return axiosInstance.delete(`/pokemons/${pokemon_id}`)
};

export const editPokemonById = (pokemon_id: string) => {
  return axiosInstance.delete(`/pokemons/${pokemon_id}`)
};


