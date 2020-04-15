import React, { useState, useCallback, useEffect } from 'react';
import { Layout, Empty, AutoComplete } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ga from '../../services/ga';
import * as pokemonActions from '../../store/modules/pokemon/actions';
import * as typeaheadActions from '../../store/modules/typeahead/actions';
import Loader from '../../components/Loader';
import { AppState } from '../../store/modules/rootReducer';
import CardPokemon from '../../components/CardPokemon';

const tracker = 'pokemon-tracker';
export default function Home(): JSX.Element {
  const dispatch = useDispatch();

  const { pokemon, isLoading } = useSelector(
    (state: AppState) => state.pokemon
  );

  const { search: filtered } = useSelector(
    (state: AppState) => state.typeahead
  );

  const [search, setSearch] = useState('');

  useEffect(() => {
    async function searchPokemons() {
      dispatch(typeaheadActions.searchAction());
    }
    searchPokemons();
  }, [dispatch]);

  const handleSearch = useCallback(
    (name: string) => {
      ga.event(
        {
          category: 'Search Pokemon',
          action: 'search an pokemon',
          label: name,
        },
        [tracker]
      );
      dispatch(pokemonActions.searchAction(name));
      setSearch('');
    },
    [dispatch]
  );

  const handleSearchOnEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.keyCode === 13 && e.currentTarget.value) {
        ga.event(
          {
            category: 'Search Pokemon',
            action: 'search an pokemon on click enter',
            label: e.currentTarget.value,
          },
          [tracker]
        );
        dispatch(pokemonActions.searchAction(e.currentTarget.value));
        setSearch('');
      }
    },
    [dispatch]
  );

  return (
    <Layout
      style={{
        margin: '0 0 auto',
        alignItems: 'center',
      }}
    >
      {isLoading && <Loader />}
      <AutoComplete
        options={filtered.map(name => ({ value: name }))}
        style={{ width: '60%', marginBottom: '25px' }}
        placeholder="Digite o nome do pokemon"
        onSearch={(text: string) => {
          dispatch(typeaheadActions.filterNamesAction(text));
        }}
        onChange={(data: string) => {
          setSearch(data);
        }}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleSearchOnEnter(e)}
        onSelect={(name: string) => handleSearch(name)}
        value={search}
      />
      {pokemon && <CardPokemon pokemon={pokemon} ga={ga} tracker={tracker} />}
      {!pokemon && !isLoading && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </Layout>
  );
}
