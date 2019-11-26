const createShadowDOM = require('../factories/create-shadow-dom');

setTimeout(() => {
    console.log('%cshadow-dom-host script -> setTimeout:3000', afterTimerLogStyle);
    console.timeLog(timerName);

    const shadowDOMHostEl = document.querySelector('shadow-dom-host');
    const templateEl = document.querySelector('template#shadow-dom-host-template');
    createShadowDOM(shadowDOMHostEl, templateEl, function (root, options) {
        console.log(`%ccreateShadowDOM for ${shadowDOMHostEl.tagName} callback`, afterTimerLogStyle);
        console.timeLog(timerName);

        const selectEl = root.getElementById('shadow-dom-select');
        selectEl.addEventListener('change', options.fn('select'));

        const btnEl = root.getElementById('shadow-dom-button');
        btnEl.addEventListener('click', options.fn2('button'));

        setTimeout(() => {
            console.log('%ccreateShadowDOM -> setTimeout:3000', afterTimerLogStyle);
            console.timeLog(timerName);

            const h4 = root.querySelector('h4');
            h4.style.color = 'orange';
        }, 3000);
    });
}, 3500);
