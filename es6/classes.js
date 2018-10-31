class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  speak() {
    console.log(`Hi, I am ${this.name} and I am ${this.color}`);
  }
}

const lion = new Animal('Mufasa', 'Golden');
lion.speak();

class Lion extends Animal {
  constructor(name, color, role, home) {
    super(name, color);

    this.role = role;
    this.home = home;
  }
  roar() {
    console.log(`I'm the ${this.role} of ${this.home}`);
  }
}

const anotherLion = new Lion('Simba', 'Yellow', 'King', 'Pride rock');
anotherLion.speak();
anotherLion.roar();
