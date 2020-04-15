import './config/ReactotronConfig';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Layout } from 'antd';
import Routes from './routes';
import history from './services/history';
import store from './store';

import Sidebar from './components/Sidebar';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { Content } = Layout;

  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Sidebar />
          <Layout className="site-layout">
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Routes />
            </Content>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '15px',
              }}
            >
              <ul
                style={{
                  listStyle: 'none',
                }}
              >
                <li>
                  <span>Vitor Delfino © 2020</span>
                </li>
                <li>
                  <span>
                    <a href="https://www.vitordelfino.dev">vitordelfino.dev</a>
                  </span>
                </li>
              </ul>
            </div>
          </Layout>
        </Layout>
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
