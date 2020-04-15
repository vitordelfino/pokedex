import produce from 'immer';
import { PokemonState, PokemonActionTypes, PokemonTypes } from './types';
import { Pokemon } from './Pokemon';

const initialState: PokemonState = {
  pokemon: undefined,
  isLoading: false,
};

export default function pokemonReducer(
  state = initialState,
  action: PokemonActionTypes
): PokemonState {
  switch (action.type) {
    case PokemonTypes.SEARCH_POKEMON:
      return produce(state, draft => {
        draft.isLoading = true;
        draft.pokemon = undefined;
      });
    case PokemonTypes.SEARCH_POKEMON_SUCCESS:
      return produce(state, draft => {
        const { payload } = action;
        draft.pokemon = payload as Pokemon;
        draft.isLoading = false;
      });
    case PokemonTypes.SEARCH_POKEMON_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
