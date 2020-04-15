import { EvolutionActionTypes, EvolutionTypes } from './types';

export function searchEvolutionChain(payload: string): EvolutionActionTypes {
  return {
    type: EvolutionTypes.SEARCH_EVOLUTION_CHAIN,
    payload,
  };
}

export function searchEvolutionChainSuccess(
  payload: string[]
): EvolutionActionTypes {
  return {
    type: EvolutionTypes.SEARCH_EVOLUTION_CHAIN_SUCCESS,
    payload,
  };
}

export function searchEvolutionChainError(): EvolutionActionTypes {
  return {
    type: EvolutionTypes.SEARCH_EVOLUTION_CHAIN_ERROR,
    payload: 'erro',
  };
}
