import React from 'react';
import { Card, Button, List, Row, Col, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Pokemon } from '../../store/modules/pokemon/Pokemon';
import * as pokemonActions from '../../store/modules/pokemon/actions';

type CardPokemonProps = {
  pokemon: Pokemon;
  ga: any;
  tracker: string;
};

const CardPokemon = ({
  pokemon,
  ga,
  tracker,
}: CardPokemonProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Card
      actions={[
        <Button
          type="link"
          style={{ width: '100%' }}
          icon={<AiOutlineArrowLeft color="#d9363e" />}
          onClick={() => {
            ga.event(
              {
                category: 'Search Pokemon',
                action: 'search previous pokemon',
                value: pokemon.id - 1,
              },
              [tracker]
            );
            dispatch(pokemonActions.searchAction(String(pokemon.id - 1)));
          }}
        />,

        <Button
          type="link"
          style={{ width: '100%' }}
          icon={<AiOutlineArrowRight color="#d9363e" />}
          onClick={() => {
            ga.event(
              {
                category: 'Search Pokemon',
                action: 'search next pokemon',
                value: pokemon.id + 1,
              },
              [tracker]
            );
            dispatch(pokemonActions.searchAction(String(pokemon.id + 1)));
          }}
        />,
      ]}
      hoverable
      style={{ width: 600 }}
      cover={(
        <div
          style={{
            // background: `rgba(255, 0, 0, 0.5)`,
            overflow: 'hidden',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              width: '100%',
              transition: 'opacity .7s ease-in',
              height: '340px',
            }}
            src={pokemon.image}
            alt="pokemon"
          />
        </div>
      )}
    >
      <Card.Meta
        title={`#${pokemon.id} - ${pokemon.name}`}
        description={(
          <Row>
            <Col span={12}>
              <List
                size="small"
                header={<div style={{ fontWeight: 'bold' }}>Habilidades</div>}
                dataSource={pokemon.abilities.map(a => a.ability.name)}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col span={12}>
              <List
                size="small"
                header={<div style={{ fontWeight: 'bold' }}>Infos</div>}
                dataSource={[
                  <>
                    <span style={{ fontWeight: 'bold' }}>#</span>
                    <Typography.Text>{pokemon.id}</Typography.Text>
                  </>,
                  <>
                    <span style={{ fontWeight: 'bold' }}>Nome</span>
                    <Typography.Text>{pokemon.name}</Typography.Text>
                  </>,
                  <>
                    <span style={{ fontWeight: 'bold' }}>Altura</span>
                    <Typography.Text>{pokemon.height}</Typography.Text>
                  </>,
                  <>
                    <span style={{ fontWeight: 'bold' }}>Peso</span>
                    <Typography.Text>{pokemon.weight}</Typography.Text>
                  </>,
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Col>
          </Row>
        )}
      />
    </Card>
  );
};

export default CardPokemon;
