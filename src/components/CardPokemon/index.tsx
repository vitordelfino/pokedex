/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
  Card,
  Button,
  List,
  Row,
  Col,
  Typography,
  Divider,
  Descriptions,
  Collapse,
} from 'antd';
import { useDispatch } from 'react-redux';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Pokemon } from '../../store/modules/pokemon/Pokemon';
import * as pokemonActions from '../../store/modules/pokemon/actions';

import './styles.css';

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
      className="card-pokemon"
      hoverable
      style={{
        width: 300,
        borderRadius: '8px',
      }}
      bodyStyle={{ padding: '12px 12px' }}
      cover={
        <div
          style={{
            display: 'flex',
            background: `rgba(255, 0, 0, 0.5)`,
            overflow: 'hidden',
            height: '100%',
            justifyContent: 'center',
            padding: '15px',
          }}
        >
          <img
            style={{
              width: '200px',
              transition: 'opacity .7s ease-in',
              height: '200px',
            }}
            src={pokemon.image}
            alt="pokemon"
          />
        </div>
      }
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
    >
      <Card.Meta
        title={
          <span>
            <strong>#{pokemon.id}</strong>
            &nbsp;-&nbsp;
            {pokemon.name}
          </span>
        }
        description={
          <>
            <Divider style={{ margin: '12px 0' }} />
            <Row justify="center">
              <Col
                style={{
                  width: '100%',
                }}
              >
                <Collapse accordion bordered={false} ghost>
                  <Collapse.Panel key="1" header={<strong>Habilidades</strong>}>
                    <Descriptions>
                      {pokemon.abilities.map(a => (
                        <Descriptions.Item>{a.ability.name}</Descriptions.Item>
                      ))}
                    </Descriptions>
                  </Collapse.Panel>
                  <Collapse.Panel key="2" header={<strong>Informações</strong>}>
                    <Descriptions>
                      <Descriptions.Item label="Nome">
                        {pokemon.name}
                      </Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                      <Descriptions.Item label="Altura">
                        {pokemon.height}
                      </Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                      <Descriptions.Item label="Peso">
                        {pokemon.weight}
                      </Descriptions.Item>
                    </Descriptions>
                  </Collapse.Panel>
                </Collapse>
              </Col>
            </Row>
          </>
        }
      />
    </Card>
  );
};

export default CardPokemon;
