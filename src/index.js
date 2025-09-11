import './styles.css';

import { greeting } from './greeting.js';


let msg = document.createElement('p')
msg.textContent = greeting

let htmlContent = document.querySelector('#content')
htmlContent.appendChild(msg)

console.log(greeting)