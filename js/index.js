import { Luchador } from './Luchador.js';
import { Adviser } from './Asesor-js';
import { arrayCharacters } from './personajes.js';
import { King } from './Rey.js';

function checkQharacters(item) {
  let state = '';
  if (item.live === 'alive') {
    state = `<i class="fas fa-thumbs-up"></i>;`;
  } else {
    state = `<i class="fas fa-thumbs-down"></i>`;
  }
  if (item instanceof King) {
  } else if (item instanceof Luchador) {
  } else if (item instanceof Adviser) {
  } else {
  }
  return `<ul class="characters-list row list-unstyled">
        <li class="character col">
          <div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${personaje.name} y ${personaje.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${personaje.age}</li>
                  <li>
                    Estado:${personaje.live}
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: ${personaje.yearsOfKingdom}</li>
                  <li>Arma: ${personje.army}</li>
                  <li>Destreza: ${personaje.skill}</li>
                  <li>Peloteo: ${personaje.makeTheBall}</li>
                  <li>Asesora a: ${personaje.adviserOf}</li>
                  <li>Sirve a:  ${personaje.sirvedTo}</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>
      </ul>`;
}

(() => {
  document.addEventListener('DOMContentLoaded', index);
  document.querySelector;
})();
