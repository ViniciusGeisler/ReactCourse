import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'

import First from './components/basic/First'
import Second from './components/basic/WithParams'

ReactDOM.render(
  <div id="app">
    <First />
    <Second
      title="Student Situation"
      student="Vinicius"
      nota={9.3}
    />
  </div>,
  document.getElementById('root')
)
