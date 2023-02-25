import React from 'react';

/**
 * Imports styles
 */
import './App.css';

/**
 * Imports components
 */
import { RollDice } from './components/RollDice';

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <div className="App">
      <RollDice />
    </div>
  );
};

export default App;
