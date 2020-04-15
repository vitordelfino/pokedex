import React, { useEffect } from 'react';
import { Carousel, Pagination, Card, Skeleton } from 'antd';
import './evolution.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/modules/rootReducer';
import * as paginateAction from '../../store/modules/evolution-paginate/actions';
import ga from '../../services/ga';

const tracker = 'pokemon-tracker';
const Evolution = () => {
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
      <Skeleton active loading={isLoading} />
      <Skeleton active loading={isLoading} />
      <Skeleton active avatar loading={isLoading} />
      <Skeleton active loading={isLoading}>
        <Carousel
          dotPosition="top"
          speed={500}
          style={{ width: '100%' }}
          arrows
        >
          {evolutions.map((ev, index) => (
            <div>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={(
                  <div
                    style={{
                      background: `rgba(255, 50, 50, 0.5)`,
                      overflow: 'hidden',
                      height: '100%',
                      alignItems: 'center',
                      width: 'auto',
                      margin: '0 auto',
                    }}
                  >
                    <img
                      style={{
                        padding: '10px',
                        width: '100%',
                        transition: 'opacity .7s ease-in',
                        height: '500px',
                      }}
                      src={ev.image}
                      alt="pokemon"
                    />
                  </div>
                )}
              >
                <Card.Meta title={`#${ev.id} - ${ev.name}`} />
              </Card>
            </div>
          ))}
        </Carousel>
      </Skeleton>
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
