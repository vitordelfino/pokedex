/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Menu, Typography, Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import logo from './pokemon.png';
import history from '../../services/history';
import Pikachu from './pikachu.svg';
import Evolutions from './evolutions.svg';
import './styles.css';

export default function Sidebar() {
  const menuItems = [
    {
      link: '/',
      icon: Pikachu,
      description: 'Pokémons',
    },
    {
      link: '/evolution',
      icon: Evolutions,
      description: 'Evoluções',
    },
  ];
  const location = useLocation();
  const { Sider } = Layout;
  return (
    <Sider
      width={250}
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      style={{ backgroundColor: '#141414' }}
    >
      <div
        className="logo"
        style={{
          padding: '10px 10px 25px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          alt="pokeball icon"
          style={{
            width: '40px',
          }}
        />
        <span
          className="title"
          style={{
            padding: '10px',
            verticalAlign: 'middle',
            fontSize: '24px',
            color: '#FFF',
            textTransform: 'uppercase',
          }}
        >
          Pokedex
        </span>
      </div>
      <Menu
        style={{ background: '#141414' }}
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
      >
        {menuItems.map(m => (
          <Menu.Item
            key={m.link}
            onClick={() => history.push(m.link)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
            icon={
              <img
                src={m.icon}
                alt={m.description}
                style={{ width: '30px', height: '30px' }}
              />
            }
          >
            <span style={{ fontSize: '19px' }}>{m.description}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
