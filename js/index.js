import { Adviser } from './Asesor.js';
import { Shieldman } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { King } from './Rey.js';
import { arrayCharacters } from './personajes.js';

function createCharacterTemplate(item) {
  let state = '';
  let info = '';
  let emoji = '';
  if (item.live === 'vivo') {
    state = `<i class="fas fa-thumbs-up"></i>`;
  } else {
    state = `<i class="fas fa-thumbs-down"></i>`;
  }
  if (item instanceof King) {
    emoji = '👑';
    info = `<li>Años de reinado: ${item.yearsOfKingdom}</li>`;
  } else if (item instanceof Luchador) {
    emoji = '🔪';
    info = `<li>Arma: ${item.army}</li>
                <li>Destreza: ${item.skill}</li>`;
  } else if (item instanceof Adviser) {
    emoji = '🎓';
    info = `<li>Asesora a: ${item.adviserOf}</li>`;
  } else if (item instanceof Shieldman) {
    emoji = '🛡';
    info = `<li>Peloteo: ${item.makeTheBall}</li>
                <li>Sirve a: ${item.servedTo}</li>`;
  }
  return `
    <li class="character col">
          <div class="card character__card">
            <img
              src=${item.img}
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
                <h2 class="character__name card-title h4">${item.name} y ${item.family}</h2>
                <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${item.age} años</li>
                  <li>
                    Estado: ${state}
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  ${info}
                </ul>
                <div class="character__actions">
                    <button class="character__action btn">habla</button>
                    <button class="character__action btn">muere</button>
                </div>
                </div>
            </div>
            <i class="emoji">${emoji}</i>
          </div>
        </li>
`;
}

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let cards = '';
    arrayCharacters.forEach((item) => {
      cards += createCharacterTemplate(item);
    });
    document.querySelector('.characters-list').innerHTML = cards;
  });
})();
