export class CharacterGoT {
  name;
  live;
  family;
  age;

  constructor(name = '', family = '', age = 0) {
    this.name = name;
    this.live = true;
    this.family = family;
    this.age = age;
  }
}
