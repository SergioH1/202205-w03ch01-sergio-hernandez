import { King } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Adviser } from './Asesor.js';
import { Shieldman } from './Escudero.js';

let jofrey = new King(
  'Jofrey Baratheon',
  'Baratheon',
  14,
  './img/joffrey.jpg',
  'King Westeros',
  2
);
let jaime = new Luchador(
  'Jaime Lannister',
  'Lannister',
  34,
  './img/jaime.jpg',
  'Figther',
  'sword',
  '9'
);
let daenerys = new Luchador(
  'Daenerys Targaryen',
  'Targaryen',
  17,
  './img/daenerys.jpg',
  'Quens of Dragon',
  'Dragons',
  '3'
);
let tyrion = new Adviser(
  'Tyrion Lannister',
  'Lannister',
  28,
  './img/tyrion.jpg',
  'Adviser',
  'Daenerys'
);
let bron = new Shieldman(
  'Brom',
  'Blackwater',
  38,
  './img/bronn.jpg',
  'Shieldman',
  3
);

export let arrayCharacters = [jofrey, jaime, daenerys, tyrion, bron];
