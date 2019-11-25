const ShadowDOMHost = require('../resources/scripts/shadow-dom-host');
const createShadowDOM = require('../factories/create-shadow-dom');

setTimeout(() => {
    const shadowDOMHostEl = document.querySelector('shadow-dom-host');
    const templateEl = document.querySelector('template');
    createShadowDOM(shadowDOMHostEl, templateEl);
}, 3000);
