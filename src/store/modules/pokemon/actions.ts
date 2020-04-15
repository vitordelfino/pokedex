import { PokemonActionTypes, PokemonTypes } from './types';
import { Pokemon } from './Pokemon';

export function searchAction(payload: string): PokemonActionTypes {
  return {
    type: PokemonTypes.SEARCH_POKEMON,
    payload,
  };
}

export function searchActionSuccess(payload: Pokemon): PokemonActionTypes {
  return {
    type: PokemonTypes.SEARCH_POKEMON_SUCCESS,
    payload,
  };
}

export function searchActionError(): PokemonActionTypes {
  return {
    type: PokemonTypes.SEARCH_POKEMON_ERROR,
    payload: 'error',
  };
}
