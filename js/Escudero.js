import { CharacterGoT } from './Personaje.js';
export class Shieldman extends CharacterGoT {
  constructor(name, family, age, type = '', makeTheBall = 0) {
    super(name, family, age);
    this.type = type;
    this.makeTheBall = 8;
    this.dialogue = 'Soy un loser';
    this.servedTo = 'Tyrion Lannister';
  }
}
