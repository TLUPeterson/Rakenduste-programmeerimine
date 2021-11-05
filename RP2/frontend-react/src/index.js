import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './store';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Content>
        <Store>
          <App />
        </Store>
      </Content>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();