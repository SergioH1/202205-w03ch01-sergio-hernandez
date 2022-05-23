import { CharacterGoT } from './Personaje.js';
export class Shieldman extends CharacterGoT {
  constructor(name, family, age, img, type = '', makeTheBall = 0) {
    super(name, family, age, img);
    this.type = type;
    this.makeTheBall = makeTheBall;
    this.dialogue = 'Soy un loser';
    this.servedTo = 'Tyrion Lannister';
  }
}
