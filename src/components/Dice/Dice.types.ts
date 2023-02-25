export interface DiceProps {
  face: DiceFace;
  rolling: boolean;
}

export type DiceFace = 'one' | 'two' | 'three' | 'four' | 'five' | 'six';


export interface IconProps {
  rolling: boolean
}