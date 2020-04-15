export interface TypeaheadState {
  pokemons: string[];
  search: string[];
}

export const TypeaheadTypes = {
  SEARCH_POKEMONS: '@@typeahead::SEARCH_POKEMON',
  SEARCH_POKEMONS_SUCCESS: '@@typeahead::SEARCH_POKEMON_SUCCESS',
  SEARCH_POKEMONS_ERROR: '@@typeahead::SEARCH_POKEMON_ERROR',
  FILTER_NAMES: '@@typeahead::FILTER_NAMES',
  FILTER_NAMES_SUCCESS: '@@typeahead::FILTER_NAMES_SUCCESS',
};

interface TypeaheadActions {
  type:
    | typeof TypeaheadTypes.SEARCH_POKEMONS
    | typeof TypeaheadTypes.SEARCH_POKEMONS_SUCCESS
    | typeof TypeaheadTypes.SEARCH_POKEMONS_ERROR
    | typeof TypeaheadTypes.FILTER_NAMES
    | typeof TypeaheadTypes.FILTER_NAMES_SUCCESS;
  payload: string[] | string;
}

export type TypeaheadActionTypes = TypeaheadActions;
