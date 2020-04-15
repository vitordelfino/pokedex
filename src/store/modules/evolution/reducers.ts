import produce from 'immer';
import { EvolutionState, EvolutionActionTypes, EvolutionTypes } from './types';

const initialState: EvolutionState = {
  evolutions: [],
  isLoading: false,
};

export default function evolutionReducer(
  state = initialState,
  action: EvolutionActionTypes
): EvolutionState {
  switch (action.type) {
    case EvolutionTypes.SEARCH_EVOLUTION_CHAIN:
      return produce(state, draft => {
        draft.isLoading = true;
      });
    case EvolutionTypes.SEARCH_EVOLUTION_CHAIN_SUCCESS:
      return produce(state, draft => {
        const { payload } = action;
        draft.isLoading = false;
        draft.evolutions = payload as any[];
      });
    case EvolutionTypes.SEARCH_EVOLUTION_CHAIN_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
        draft.evolutions = [];
      });
    default:
      return state;
  }
}
