const createShadowDOM = require('../factories/create-shadow-dom');

setTimeout(() => {
    console.log('%cshadow-dom-host script -> setTimeout:3000', afterTimerLogStyle);
    console.timeLog(timerName);

    const shadowDOMHostEl = document.querySelector('shadow-dom-host');
    const templateEl = document.querySelector('template#shadow-dom-host-template');
    createShadowDOM(shadowDOMHostEl, templateEl);
}, 3000);
