import produce from 'immer';
import { TypeaheadState, TypeaheadActionTypes, TypeaheadTypes } from './types';

const initialState: TypeaheadState = {
  pokemons: [],
  search: [],
};

export default function typeaheadReducer(
  state = initialState,
  action: TypeaheadActionTypes
): TypeaheadState {
  switch (action.type) {
    case TypeaheadTypes.SEARCH_POKEMONS_SUCCESS:
      return produce(state, draft => {
        const { payload } = action;
        draft.pokemons = payload as string[];
      });
    case TypeaheadTypes.FILTER_NAMES_SUCCESS:
      return produce(state, draft => {
        const { payload } = action;
        draft.search = payload as string[];
      });
    default:
      return state;
  }
}
