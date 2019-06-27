'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
   function Person() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';

      _classCallCheck(this, Person);

      this.name = name;
   }

   _createClass(Person, [{
      key: 'getGreating',
      value: function getGreating() {
         //using template strings is easier i.e
         return 'Hi. I am ' + this.name + '!';
         //instead of
         // return 'Hi.I am '+ this.name + '!' 
      }
   }]);

   return Person;
}();

var me = new Person('Akinleye Oluwatimilehin');
console.log(me.getGreating());

var others = new Person();
console.log(others.getGreating());
