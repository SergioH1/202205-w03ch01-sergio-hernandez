import { King } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Adviser } from './Asesor.js';
import { Shieldman } from './Escudero.js';

let jofrey = new King('Jofrey Baratheon', 'Baratheon', 14, 'King Westeros', 2);
let jaime = new Luchador('Jaime Lannister', 'Lannister', 34, 9, 'sword');
let daenerys = new Luchador(
  'Daenerys Targaryen',
  'Targaryen',
  17,
  3,
  'Dragons'
);
let tyrion = new Adviser(
  'Tyrion Lannister',
  'Lannister',
  28,
  'Adviser',
  daenerys
);
let bron = new Shieldman('Brom', 'Blackwater', 38, 'Shieldman', 3);

let arrayCharacters = [jofrey, jaime, daenerys, tyrion, bron];
console.log(arrayCharacters);
