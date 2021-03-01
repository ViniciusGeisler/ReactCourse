import React from 'react';

import First from './components/basic/First';
import Second from './components/basic/WithParams';
import Fragment from './components/basic/Fragment';
import RandomNumber from './components/basic/Random'

function App() {
  return (
    <div id="app">
      <h1>React fundamentals</h1>
      <RandomNumber
        min={1}
        max={60}
      />
      <Fragment />
      <Second
        title="Student Situation"
        student="Vinicius"
        nota={9.3}
      />
      <First />
    </div>
  )
}

export default App
