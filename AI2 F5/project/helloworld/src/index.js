import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Components/App';
import reportWebVitals from './reportWebVitals';

import MoviesList from './Components/Movies3'

ReactDOM.render(
  <React.StrictMode>
    <MoviesList />
  </React.StrictMode>,
  document.getElementById('raiz')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
