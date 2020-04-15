import produce from 'immer';
import { EvolutionPaginate } from './EvolutionPaginate';
import {
  EvolutionPaginateState,
  EvolutionPaginateTypes,
  EvolutionPaginateActionTypes,
} from './types';

const initialState: EvolutionPaginateState = {
  evolutionPaginate: undefined,
  isLoading: false,
};

export default function evolutionPaginateReducer(
  state = initialState,
  action: EvolutionPaginateActionTypes
): EvolutionPaginateState {
  switch (action.type) {
    case EvolutionPaginateTypes.PAGINATE_EVOLUTIONS:
      return produce(state, draft => {
        draft.isLoading = true;
      });
    case EvolutionPaginateTypes.PAGINATE_EVOLUTIONS_SUCCESS:
      return produce(state, draft => {
        const { payload } = action;
        draft.isLoading = false;
        draft.evolutionPaginate = payload as EvolutionPaginate;
      });
    case EvolutionPaginateTypes.PAGINATE_EVOLUTIONS_ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
