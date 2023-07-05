import {createRoot} from 'react-dom/client';
import React from 'react'
import './reset.css'
import './styles.css'
import { Main, Header } from './App.jsx'
import { Footer } from './Footer.jsx';

  const root = createRoot(document.getElementById('app'));
  console.log('root render');
  root.render(
      <>
          <Header />
          <Main />
          <Footer />
      </>
  );
