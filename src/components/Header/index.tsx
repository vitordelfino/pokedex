import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import Lottie from 'react-lottie';
import animationData from './pokemon.json';

import './header.css';

export default function Header(): JSX.Element {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Layout>
      <Layout.Header
        style={{
          padding: 0,
        }}
      >
        <Row>
          <Col span={1}>
            <Lottie
              options={defaultOptions}
              width={50}
              height={50}
              isClickToPauseDisabled
            />
          </Col>
          <Col>
            <Typography.Title
              style={{
                color: '#FFF',
              }}
            >
              Pokedex
            </Typography.Title>
          </Col>
        </Row>
      </Layout.Header>
    </Layout>
  );
}
