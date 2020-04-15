import React from 'react';
import { Menu, Typography, Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import logo from './pokemon.png';
import history from '../../services/history';

export default function Sidebar() {
  const location = useLocation();
  const { Sider } = Layout;
  return (
    <Sider>
      <Menu
        style={{ height: '100vh', background: '#141414' }}
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
      >
        <div
          className="logo"
          style={{
            marginTop: '10px',
            paddingLeft: '15px',
            marginBottom: '24px',
          }}
        >
          <img
            src={logo}
            alt="pokeball icon"
            style={{
              width: '40px',
            }}
          />
          <Typography.Text
            style={{
              padding: '10px',
              verticalAlign: 'middle',
              fontSize: '24px',
              color: '#FFF',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}
          >
            Pokedex
          </Typography.Text>
        </div>
        <Menu.Item
          key="/"
          onClick={() => history.push('/')}
          style={{ padding: '5px' }}
        >
          <span>Pokémons</span>
        </Menu.Item>
        <Menu.Item
          key="/evolution"
          onClick={() => history.push('/evolution')}
          style={{ padding: '5px' }}
        >
          <span>Evoluções</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
