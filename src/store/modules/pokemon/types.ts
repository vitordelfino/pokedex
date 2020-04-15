import { Pokemon } from './Pokemon';

export interface PokemonState {
  pokemon?: Pokemon;
  isLoading: boolean;
}

export const PokemonTypes = {
  SEARCH_POKEMON: '@@pokemon::SEARCH_POKEMON',
  SEARCH_POKEMON_SUCCESS: '@@pokemon::SEARCH_POKEMON_SUCCESS',
  SEARCH_POKEMON_ERROR: '@@pokemon::SEARCH_POKEMON_ERROR',
};

interface PokemonActions {
  type:
    | typeof PokemonTypes.SEARCH_POKEMON
    | typeof PokemonTypes.SEARCH_POKEMON_SUCCESS
    | typeof PokemonTypes.SEARCH_POKEMON_ERROR;
  payload: Pokemon | string;
}

export type PokemonActionTypes = PokemonActions;
