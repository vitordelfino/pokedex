import { TypeaheadActionTypes, TypeaheadTypes } from './types';

export function searchAction(): TypeaheadActionTypes {
  return {
    type: TypeaheadTypes.SEARCH_POKEMONS,
    payload: [],
  };
}

export function searchActionSuccess(payload: string[]): TypeaheadActionTypes {
  return {
    type: TypeaheadTypes.SEARCH_POKEMONS_SUCCESS,
    payload,
  };
}

export function searchActionError(): TypeaheadActionTypes {
  return {
    type: TypeaheadTypes.SEARCH_POKEMONS_ERROR,
    payload: 'error',
  };
}

export function filterNamesAction(payload: string): TypeaheadActionTypes {
  return {
    type: TypeaheadTypes.FILTER_NAMES,
    payload,
  };
}

export function filterNamesActionSuccess(
  payload: string[]
): TypeaheadActionTypes {
  return {
    type: TypeaheadTypes.FILTER_NAMES_SUCCESS,
    payload,
  };
}
