import { EvolutionPaginate } from './EvolutionPaginate';

export interface EvolutionPaginateState {
  evolutionPaginate?: EvolutionPaginate;
  isLoading: boolean;
}

export const EvolutionPaginateTypes = {
  PAGINATE_EVOLUTIONS: '@@evolution_paginate::PAGINATE_EVOLUTIONS',
  PAGINATE_EVOLUTIONS_SUCCESS:
    '@@evolution_paginate::PAGINATE_EVOLUTIONS_SUCCESS',
  PAGINATE_EVOLUTIONS_ERROR: '@@evolution_paginate::PAGINATE_EVOLUTIONS_ERROR',
};

interface EvolutionPaginateActions {
  type:
    | typeof EvolutionPaginateTypes.PAGINATE_EVOLUTIONS
    | typeof EvolutionPaginateTypes.PAGINATE_EVOLUTIONS_SUCCESS
    | typeof EvolutionPaginateTypes.PAGINATE_EVOLUTIONS_ERROR;
  payload: EvolutionPaginate | string;
}

export type EvolutionPaginateActionTypes = EvolutionPaginateActions;
