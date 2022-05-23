import { CharacterGoT } from './Personaje.js';

export class Adviser extends CharacterGoT {
  constructor(name, family, age, type = '', adviserOf) {
    super(name, family, age);
    this.type = type;
    this.dialogue = 'No sé por qué, pero creo que voy a morir pronto';
    this.adviserOf = adviserOf;
  }
}
