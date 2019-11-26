const ShadowDOMHost = require('../resources/scripts/shadow-dom-host');
const createShadowDOM = require('../factories/create-shadow-dom');

setTimeout(() => {
    console.log('%cshadow-dom-host script -> setTimeout:3000', afterTimerLogStyle);
    console.timeLog(timerName);

    const shadowDOMHostEl = document.querySelector('shadow-dom-host');
    const templateEl = document.querySelector('template#shadow-dom-host-template');
    createShadowDOM(shadowDOMHostEl, templateEl);
}, 3000);

document.addEventListener('click', (event) => {
    console.log(event.target);
    alert(`${event.target.tagName}${event.target.id ? `#${event.target.id}` : ''}${event.target.className ? `.${event.target.className.replace(/\s/g, '.')}` : ''}` + ' was clicked')
});
