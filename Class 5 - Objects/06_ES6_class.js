class Person {
 
    constructor (name = "", job = "") {
      this.name = name;
      this.job = job;
    }
   
    getName () {
      return this.name;
    }
   
    getJob () {
      return this.job;
    }
  }

  class SuperHero extends Person {
      constructor(name, heroName, superPower="nothing") {
          super(name);
            this.heroName = heroName;
            this.superPower = superPower;
      }
      secretIdentity() {
            return `${this.heroName}`;
      }
  }

  let batman = new SuperHero('Bruce', 'Batman');
  console.log(batman.secretIdentity());