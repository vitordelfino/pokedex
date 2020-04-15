export interface EvolutionState {
  evolutions: {
    id: number;
    name: string;
    image: string;
  }[];
  isLoading: boolean;
}

export const EvolutionTypes = {
  SEARCH_EVOLUTION_CHAIN: '@@evolution::SEARCH_EVOLUTION_CHAIN',
  SEARCH_EVOLUTION_CHAIN_ERROR: '@@evolution::SEARCH_EVOLUTION_CHAIN_ERROR',
  SEARCH_EVOLUTION_CHAIN_SUCCESS:
    '@@evolution::SEARCH_EVOLUTION_CHARIN_SUCCESS',
};

interface EvolutionActions {
  type:
    | typeof EvolutionTypes.SEARCH_EVOLUTION_CHAIN
    | typeof EvolutionTypes.SEARCH_EVOLUTION_CHAIN_SUCCESS
    | typeof EvolutionTypes.SEARCH_EVOLUTION_CHAIN_ERROR;
  payload: string[] | string;
}

export type EvolutionActionTypes = EvolutionActions;
