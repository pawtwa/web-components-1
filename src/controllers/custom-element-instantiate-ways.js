const SlickTabs = require('./../resources/scripts/initial/slick-tabs');

let customElementsEl = document.getElementById('custom-elements');

// instantiation 1
/**
 * Use <slick-tabs /> in a HTML file
 * example: see index.html: <slick-tabs id="by-markup"></slick-tabs>
 */

// instantiation 2
const element = new SlickTabs();
customElementsEl.appendChild(element);

// instantiation 3
const element2 = document.createElement('slick-tabs');
customElementsEl.appendChild(element2);

// instantiation 4
element2.innerHTML = `${element2.innerText}<slick-tabs></slick-tabs>`;

