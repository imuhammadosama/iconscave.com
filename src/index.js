import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import './index.css';
import Anron from './pages/Anron';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Anron />
  </React.StrictMode>,
  document.getElementById('root')
);
