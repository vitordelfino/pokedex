import { put, call, all, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { EvolutionActionTypes, EvolutionTypes } from './types';
import * as evolutionAction from './actions';
import { Evolution, Chain } from './Evolution';
import { Species } from '../pokemon/Pokemon';
import rsf from '../../../services/firebase';

const extractSpecie = (obj: Chain, species: Species[]): Species[] => {
  if (obj.evolves_to.length === 0) {
    return [...species, obj.species];
  }
  return extractSpecie(obj.evolves_to[0], [...species, obj.species]);
};

function* searchEvolutionChain(action: EvolutionActionTypes) {
  try {
    const url = action.payload as string;
    const evolution: AxiosResponse<Evolution> = yield call(axios.get, url);
    const species = extractSpecie(evolution.data.chain, []);
    const images = yield all(
      species.map(s => {
        const id = s.url.split('/')[6];
        return all({
          id,
          name: s.name,
          image: call(rsf.storage.getDownloadURL, `/pokemons/${id}.svg`),
        });
      })
    );
    yield put(evolutionAction.searchEvolutionChainSuccess(images));
  } catch (e) {
    console.tron.error('Erro ao buscar Evolução');
    yield put(evolutionAction.searchEvolutionChainError());
    toast.error('Erro ao buscar Evolução');
  }
}

export default all([
  takeLatest(EvolutionTypes.SEARCH_EVOLUTION_CHAIN, searchEvolutionChain),
]);
