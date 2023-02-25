import React from 'react';

/**
 * Imports styles
 */
import { Icon } from './Dice.styles';

/**
 * Imports FontAwesomes icons
 */
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Imports Types
 */
import { DiceProps } from './Dice.types';

/**
 * Displays the component
 */
export const Dice: React.FC<DiceProps> = (props) => {
  const { face, rolling } = props;
  /**
   * Handles the faces of dice using icons
   */
  const getDiceIcon = () => {
    switch (face) {
      case 'two':
        return faDiceTwo;
      case 'three':
        return faDiceThree;
      case 'four':
        return faDiceFour;
      case 'five':
        return faDiceFive;
      case 'six':
        return faDiceSix;
      default:
        return faDiceOne;
    }
  };

  return (
    <div>
      <Icon
        rolling={rolling}
        className={`Die ${rolling && 'shaking'}`}
        icon={getDiceIcon()}
      />
    </div>
  );
};
