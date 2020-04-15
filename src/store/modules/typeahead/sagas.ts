import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { AppState } from '../rootReducer';
import { PokemonActionTypes } from '../pokemon/types';
import { TypeaheadTypes } from './types';
import api from '../../../services/api';
import * as typeaheadActions from './actions';

function* searchPokemons() {
  try {
    const result: AxiosResponse<any> = yield call(
      api.get,
      '/pokemon?offset=0&limit=964'
    );

    yield put(
      typeaheadActions.searchActionSuccess(
        result.data.results.map((x: any) => x.name)
      )
    );
  } catch (e) {
    yield put(typeaheadActions.searchActionError());
    toast.error('Erro ao buscar lista de pokemons');
  }
}

function* filterPokemon(action: PokemonActionTypes) {
  const text = action.payload as string;
  if (text === '')
    return yield put(typeaheadActions.filterNamesActionSuccess([]));
  const { pokemons } = yield select((state: AppState) => state.typeahead);
  const filter = pokemons.filter((p: string) => p.includes(text));
  yield put(typeaheadActions.filterNamesActionSuccess(filter));
}

export default all([
  takeLatest(TypeaheadTypes.SEARCH_POKEMONS, searchPokemons),
  takeLatest(TypeaheadTypes.FILTER_NAMES, filterPokemon),
]);
