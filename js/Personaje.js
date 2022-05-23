export class CharacterGoT {
  name;
  live;
  family;
  age;
  img;

  constructor(name = '', family = '', age = 0, img) {
    this.name = name;
    this.live = true;
    this.family = family;
    this.age = age;
    this.img = img;
  }
}
