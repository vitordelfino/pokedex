/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { Carousel, Pagination, Card, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/modules/rootReducer';
import * as paginateAction from '../../store/modules/evolution-paginate/actions';
import ga from '../../services/ga';

import './styles.css';

const Evolution = () => {
  const tracker = 'pokemon-tracker';
  const dispatch = useDispatch();
  const { evolutionPaginate, isLoading: loadingPagination } = useSelector(
    (state: AppState) => state.evolutionPaginate
  );

  const { evolutions, isLoading } = useSelector(
    (state: AppState) => state.evolution
  );

  useEffect(() => {
    async function firstPage() {
      dispatch(paginateAction.paginateAction('offset=0&limit=1'));
    }
    firstPage();
  }, [dispatch]);

  const onChangePage = (current: number) => {
    ga.event(
      {
        category: 'Search Evolution',
        action: 'search an evolution',
        value: current - 1,
      },
      [tracker]
    );
    dispatch(paginateAction.paginateAction(`offset=${current - 1}&limit=1`));
  };

  return (
    <>
      {isLoading ? (
        <Skeleton.Input active style={{ width: '100%', height: '300px' }} />
      ) : (
        <Carousel
          /* autoplay */
          dotPosition="top"
          speed={500}
          style={{ width: '400px' }}
          arrows
        >
          {evolutions.map((ev, index) => (
            <div>
              <Card
                className="carousel-card"
                hoverable
                style={{ width: '100%', height: '300px' }}
                cover={
                  <div
                    style={{
                      display: 'flex',
                      background: `rgba(255, 0, 0, 0.5)`,
                      overflow: 'hidden',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '15px',
                    }}
                  >
                    <img
                      className="carousel-image"
                      style={{
                        width: '200px',
                        transition: 'opacity .7s ease-in',
                        height: '200px',
                      }}
                      src={ev.image}
                      alt="pokemon"
                    />
                  </div>
                }
              >
                <Card.Meta title={`#${ev.id} - ${ev.name}`} />
              </Card>
            </div>
          ))}
        </Carousel>
      )}

      <Pagination
        style={{
          marginTop: '15px',
        }}
        onChange={onChangePage}
        total={evolutionPaginate ? evolutionPaginate.count : 10}
        disabled={loadingPagination}
      />
    </>
  );
};

export default Evolution;
