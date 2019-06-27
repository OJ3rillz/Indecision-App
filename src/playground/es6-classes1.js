class Person {
   constructor(name = 'Anonymous') {
       this.name = name;
   }
   getGreating() {
      //using template strings is easier i.e
      return `Hi. I am ${this.name}!`
      //instead of
      // return 'Hi.I am '+ this.name + '!' 
   }
}

const me = new Person('Akinleye Oluwatimilehin');
console.log(me.getGreating());

const others = new Person()
console.log(others.getGreating());