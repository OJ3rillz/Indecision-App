class Person {
   constructor(name = 'Anonymous', age = 0) {
       this.name = name;
       this.age = age;
   }
   
   getGreating() {
      //using template strings is easier i.e
      return `Hi. I am ${this.name}!`
      //instead of
      // return 'Hi.I am '+ this.name + '!' 
   }
   getDescription() {
         return `${this.name} is ${this.age} year(s) old.`
   }
}

class Student extends Person {
     constructor(name, age, major) {
      super(name, age);
      this.major = major;
     }
     hasMajor() {
      return !!this.major;
     } 
     getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
         description += ` Their major is ${this.major}.`;
        }

        return description;
     }
}
class Traveler extends Person {
     constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
     }
     getGreating () {
        let greating = super.getGreating();

        if(this.homeLocation) {
           greating += `I'm visiting from ${this.location}`
        }
        return greating;
     }
}

const me = new Traveler('Akinleye Oluwatimilehin', 24, 'Agric Engineering');
console.log(me.getGreating());

const others = new Traveler()
console.log(others.getGreating());
