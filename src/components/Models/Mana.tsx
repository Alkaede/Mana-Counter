export enum ManaColor {
  WHITE = 'white',
  BLUE = 'blue',
  BLACK = 'black',
  RED = 'red',
  GREEN = 'green'
}

export interface ManaObject {
  color: ManaColor,
  image: string,
  colorCode: string,
  count: number,
}
