class Person {
   constructor(name = 'Anonymous') {
       this.name = name;
   }
   getGreating() {

      return ``
   }
}

const me = new Person('Akinleye Oluwatimilehin');
console.log(me.getGreating());

const others = new Person()
console.log(others.getGreating());