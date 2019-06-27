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

const me = new Person('Akinleye Oluwatimilehin', 24);
console.log(me.getDescription());

const others = new Person()
console.log(others.getDescription());
