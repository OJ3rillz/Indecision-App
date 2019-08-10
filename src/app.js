// // import './utils.js'

// // import subtract, { square, add } from './utils.js';

// // console.log("app.js is running");
// // console.log(square(4));
// // console.log(add(100, 23)); 
// // console.log(subtract(100, 20));

// import './person.js'
// import isSenior, { isAdult, canDrink} from './person.js'
// console.log (isAdult(20));
// console.log (canDrink(30));
// console.log (isSenior(64));

import React from 'react';
import ReactDom from 'react-dom';

const template = <p>This is jsx from webpack</p>
ReactDom.render(template, document.getElementById('app'));





// import  validator from 'validator';

// console.log(validator.isEmail('test'));