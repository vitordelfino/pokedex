import { all } from 'redux-saga/effects';
import pokemonSaga from './pokemon/sagas';
import evoltionPaginateSaga from './evolution-paginate/sagas';
import evolutionSaga from './evolution/sagas';
import typeaheadSaga from './typeahead/sagas';

export default function* rootSaga() {
  return yield all([
    pokemonSaga,
    evoltionPaginateSaga,
    evolutionSaga,
    typeaheadSaga,
  ]);
}
