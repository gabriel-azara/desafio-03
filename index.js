class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  showType() {
    if (this.type === 'mago') {
      console.log(`O ${this.type} atacou usando magia`);
    } else if (this.type === 'guerreiro') {
      console.log(`O ${this.type} atacou usando espada`);
    } else if (this.type === 'monge') {
      console.log(`O ${this.type} atacou usando artes marciais`);
    } else {
      console.log(`O ninja atacou usando shuriken`);
    }
  }
}

const heroes = [
  new Hero('Gabriel', 26, 'guerreiro'),
  new Hero('Felipe', 30, 'monge'),
  new Hero('José', 25, 'mago'),
  new Hero('João', 28, 'ninja')
];

for (let i = 0; i < heroes.length; i++) {
  console.log(`${heroes[i].name}`);
  heroes[i].showType();
  console.log('');
}
