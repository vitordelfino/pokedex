import { combineReducers } from 'redux';
import { TypeaheadState } from './typeahead/types';
import { EvolutionState } from './evolution/types';
import { EvolutionPaginateState } from './evolution-paginate/types';
import pokemon from './pokemon/reducers';
import evolutionPaginate from './evolution-paginate/reducers';
import evolution from './evolution/reducers';
import typeahead from './typeahead/reducers';
import { PokemonState } from './pokemon/types';

export interface AppState {
  pokemon: PokemonState;
  evolutionPaginate: EvolutionPaginateState;
  evolution: EvolutionState;

  typeahead: TypeaheadState;
}
export default combineReducers({
  pokemon,
  evolutionPaginate,
  evolution,
  typeahead,
});
