import React from 'react';
import ReactDOM from 'react-dom';
import AppTsx from './AppTsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/main.css';
import './Css/my-card.css';
import './Css/head.css';
import './Css/footer.css'
import './Css/navbar.css';
import './Css/pokemon.css';

ReactDOM.render(
  <React.StrictMode>
    <AppTsx />
  </React.StrictMode>,
  document.getElementById('root')
);
