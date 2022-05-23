import { CharacterGoT } from './Personaje.js';

export class Luchador extends CharacterGoT {
  constructor(name, family, age, img, type = '', army = '', skill = '') {
    super(name, family, age, img);
    this.type = type;
    this.skill = skill;
    this.army = army;
    this.dialogue = 'Primero pego y luego pregunto';
  }
}
