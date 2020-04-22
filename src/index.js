import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Game from './components/Game'
import './index.css';

// ========================================

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}><Game /></Router>,
  document.getElementById('root')
);
