import './config/ReactotronConfig';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Layout } from 'antd';
import { Helmet } from 'react-helmet';
import Routes from './routes';
import history from './services/history';
import store from './store';

import Sidebar from './components/Sidebar';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { Content } = Layout;

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Online pokedex" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pokedex.dev" />
        {/* <meta property="og:image" content="https://i.imgur.com/TaTyAuY.png" /> */}
        <meta property="og:image" content="https://i.imgur.com/md0T87F.png" />
        {/* <meta property="twitter:image" content="https://i.imgur.com/TaTyAuY.png" /> */}
        <meta
          property="twitter:image"
          content="https://i.imgur.com/md0T87F.png"
        />
        <meta
          property="og:description"
          content="Pokedex app build with React and Antd"
        />
      </Helmet>
      <Provider store={store}>
        <Router history={history}>
          <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
              <Content
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  margin: '24px 16px',
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Routes />
              </Content>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px',
                  flexDirection: 'column',
                }}
              >
                <span>Vitor Delfino © 2020</span>
                <a href="https://www.vitordelfino.dev">vitordelfino.dev</a>
              </div>
            </Layout>
          </Layout>
          <ToastContainer autoClose={3000} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
