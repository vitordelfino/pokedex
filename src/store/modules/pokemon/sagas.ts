import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import api from '../../../services/api';
import * as pokemonActions from './actions';
import { PokemonTypes, PokemonActionTypes } from './types';
import { Pokemon } from './Pokemon';
import rsf from '../../../services/firebase';

function* searchPokemon(action: PokemonActionTypes) {
  try {
    const name = action.payload;
    const pokemon: AxiosResponse<Pokemon> = yield call(
      api.get,
      `/pokemon/${name}`
    );

    try {
      const url = yield call(
        rsf.storage.getDownloadURL,
        `/pokemons/${pokemon.data.id}.svg`
      );
      pokemon.data.image = url;
    } catch (e) {
      pokemon.data.image =
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
    }

    yield put(pokemonActions.searchActionSuccess(pokemon.data));
  } catch (e) {
    yield put(pokemonActions.searchActionError());
    toast.error('Pokemon não encontrado');
  }
}

export default all([takeLatest(PokemonTypes.SEARCH_POKEMON, searchPokemon)]);
