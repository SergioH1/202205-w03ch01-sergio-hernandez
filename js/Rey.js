import { CharacterGoT } from './Personaje.js';

export class King extends CharacterGoT {
  constructor(name, family, age, img, type = '', yearsOfKingdom = 0) {
    super(name, family, age, img);
    this.type = type;
    this.yearsOfKingdom = yearsOfKingdom;
    this.dialogue = 'Vais a morir todos';
  }
}

console.log(King.yearsOfKingdom);
