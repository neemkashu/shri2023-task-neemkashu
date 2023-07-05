import React from 'react'
import ReactDOM from 'react-dom/client';
import './reset.css'
import './styles.css'
import { Main, Header } from './App.jsx'

  const root = ReactDOM.createRoot(document.getElementById('app'));
  if (root) {
    console.log('root render');
    root.render(
        <>
            <Header />
            <Main />
        </>
    );

  }
