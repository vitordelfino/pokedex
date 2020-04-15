import { EvolutionPaginate } from './EvolutionPaginate';
import { EvolutionPaginateActionTypes, EvolutionPaginateTypes } from './types';

export function paginateAction(payload: string): EvolutionPaginateActionTypes {
  return {
    type: EvolutionPaginateTypes.PAGINATE_EVOLUTIONS,
    payload,
  };
}

export function paginateActionSuccess(
  payload: EvolutionPaginate
): EvolutionPaginateActionTypes {
  return {
    type: EvolutionPaginateTypes.PAGINATE_EVOLUTIONS_SUCCESS,
    payload,
  };
}

export function paginateActionError(): EvolutionPaginateActionTypes {
  return {
    type: EvolutionPaginateTypes.PAGINATE_EVOLUTIONS_ERROR,
    payload: 'error',
  };
}
