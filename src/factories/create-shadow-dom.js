const createShadowDOM = (host, template) => {
    console.log('%ccreateShadowDOM', afterTimerLogStyle);
    console.timeLog(timerName);

    if (host instanceof HTMLElement) {
        console.log('`p` elements queried on Shadow DOM Host from Shadow DOM Host before its Shadow DOM root creating', host.querySelectorAll('p'));
        const root = host.attachShadow({mode: "closed"});
        console.log('shadowRoot mode `closed`: host.shadowRoot - ', host.shadowRoot, '; host.attachShadow return - ', root);
        console.log('`p` elements queried on Shadow DOM Host from Shadow DOM Host after Shadow DOM root creating', host.querySelectorAll('p'));
        console.log('`p` elements queried on Shadow DOM root from Shadow DOM after Shadow DOM root creating', root.querySelectorAll('p'));
        root.appendChild(document.importNode(template.content, true));
        console.log('`p` elements queried on Shadow DOM root from Shadow DOM root after appending its imported template with insertions', root.querySelectorAll('p'));
        console.log('`content[select^=p]` elements queried on Shadow DOM root from Shadow DOM root after appending its imported template with insertions', root.querySelectorAll('content[select^=p]'));
        setTimeout(() => {
            console.log('%ccreateShadowDOM -> setTimeout:3000', afterTimerLogStyle);
            console.timeLog(timerName);

            const h4 = root.querySelector('h4');
            h4.style.color = 'orange';
        }, 3000);
    }
};

module.exports = createShadowDOM;
