import React, { useState } from 'react';

/**
 * Imports components
 */
import { Dice } from '../Dice';

/**
 * Imports styles
 */

import { DiceContainer, Container, ThrowDiceButton } from './RollDice.styles';

/**
 * Imports Types
 */
import { DiceFace } from '../Dice/Dice.types';

/**
 * Defines the sides of dice
 */
const sides: DiceFace[] = ['one', 'two', 'three', 'four', 'five', 'six'];

/**
 * Displays the component
 */
export const RollDice: React.FC = () => {
  /**
   * Initializes the first dice
   */
  const [die1, setDie1] = useState<DiceFace>('one');

  /**
   * Initializes the second dice
   */
  const [die2, setDie2] = useState<DiceFace>('one');

  /**
   * Initializes the rolling
   */
  const [rolling, setRolling] = useState(false);

  /**
   * Handle display the dice
   */
  const roll = () => {
    /**
     * pick 2 new rolls
     */
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];

    /**
     * set the new state with new rolls
     */
    setDie1(newDie1);
    setDie2(newDie2);
    setRolling(true);

    /**
     * wait one second, then set rolling to false
     */
    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <Container className="RollDice">
      <DiceContainer className="RollDice-container">
        <Dice face={die1} rolling={rolling} />
        <Dice face={die2} rolling={rolling} />
      </DiceContainer>

      <ThrowDiceButton className="Button" onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice!'}
      </ThrowDiceButton>
    </Container>
  );
};
