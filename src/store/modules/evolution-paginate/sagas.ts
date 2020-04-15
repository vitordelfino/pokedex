import { put, all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { EvolutionPaginate } from './EvolutionPaginate';
import { EvolutionPaginateActionTypes, EvolutionPaginateTypes } from './types';
import * as evoltuionPaginateAction from './actions';
import * as evolutionActions from '../evolution/actions';

import api from '../../../services/api';

function* paginateEvolution(action: EvolutionPaginateActionTypes) {
  try {
    const query = action.payload;
    const pagination: AxiosResponse<EvolutionPaginate> = yield call(
      api.get,
      `/evolution-chain?${query}`
    );
    yield all([
      put(evoltuionPaginateAction.paginateActionSuccess(pagination.data)),
      put(
        evolutionActions.searchEvolutionChain(pagination.data.results[0].url)
      ),
    ]);
  } catch (e) {
    console.tron.error('Erro ao tentar paginar');
    yield put(evoltuionPaginateAction.paginateActionError());
    toast.error('Erro ao tentar paginar');
  }
}

export default all([
  takeLatest(EvolutionPaginateTypes.PAGINATE_EVOLUTIONS, paginateEvolution),
]);
