const SlickTabsExtension = require('../resources/scripts/initial/slick-tabs-extension');

let customElementsExtensionEl = document.getElementById('custom-elements-extension');

// instantiation 1
/**
 * Use <p is="slick-tabs-extended" /> in a HTML file
 * example: see index.html: <p is="slick-tabs-extended"></p>
 */

// instantiation 2
const element = new SlickTabsExtension();
customElementsExtensionEl.appendChild(element);

// instantiation 3
const element2 = document.createElement('p', 'slick-tabs-extension');
customElementsExtensionEl.appendChild(element2);

// instantiation 4
element2.innerHTML = `${element2.innerText} <p is="slick-tabs-extension"></p>`;
