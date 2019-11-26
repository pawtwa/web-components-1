const createShadowDOM = (host, template) => {
    console.log('%ccreateShadowDOM', afterTimerLogStyle);
    console.timeLog(timerName);

    if (host instanceof HTMLElement) {
        console.log('`p` elements queried on Shadow DOM Host from Shadow DOM Host before its Shadow DOM root creating', host.querySelectorAll('p'));

        const root = host.attachShadow({mode: "open"});

        const fn = (source) => {
            return (event) => {
                if (!clickEventDisabled) {
                    return;
                }
                alert(`shadow root ${source}: ${event.target.tagName}${event.target.id ? `#${event.target.id}` : ''}${event.target.className ? `.${event.target.className.replace(/\s/g, '.')}` : ''}` + ' was changed')
            };
        };

        const fn2 = (source) => {
            return (event) => {
                if (clickEventDisabled) {
                    return;
                }
                alert(`shadow root ${source}: ${event.target.tagName}${event.target.id ? `#${event.target.id}` : ''}${event.target.className ? `.${event.target.className.replace(/\s/g, '.')}` : ''}` + ' was clicked')
            };
        };

        root.addEventListener('change', fn('root'));
        root.addEventListener('click', fn2('root'));

        console.log('shadowRoot mode `closed`: host.shadowRoot - ', host.shadowRoot, '; host.attachShadow return - ', root);
        console.log('`p` elements queried on Shadow DOM Host from Shadow DOM Host after Shadow DOM root creating', host.querySelectorAll('p'));
        console.log('`p` elements queried on Shadow DOM root from Shadow DOM after Shadow DOM root creating', root.querySelectorAll('p'));

        root.appendChild(document.importNode(template.content, true));

        const selectEl = root.getElementById('shadow-dom-select');
        selectEl.addEventListener('change', fn('select'));

        const btnEl = root.getElementById('shadow-dom-button');
        btnEl.addEventListener('click', fn2('button'));

        console.log('`p` elements queried on Shadow DOM root from Shadow DOM root after appending its imported template with insertions', root.querySelectorAll('p'));
        console.log('`content[select^=p]` elements queried on Shadow DOM root from Shadow DOM root after appending its imported template with insertions', root.querySelectorAll('content[select^=p]'));

        console.log(root.querySelectorAll('slot'));

        console.log('shadow root slots nodes (flatten)', Array.prototype.reduce.call(root.querySelectorAll('slot'), (prev, slot) => {
            prev.push(slot.assignedNodes({flatten: true}));
            return prev;
        }, []));

        console.log('shadow root slots elements (flatten)', Array.prototype.reduce.call(root.querySelectorAll('slot'), (prev, slot) => {
            prev.push(slot.assignedElements({flatten: true}));
            return prev;
        }, []));

        console.log(Array.prototype.reduce.call(document.querySelectorAll('*'), (prev, element) => {
            if (element.innerText === 'Attention!' || element.slot) {
                console.log(element.assignedSlot, element.getDestinationInsertionPoints());
                prev.push({[element.slot]: element});
            }
            return prev;
        }, []));

        setTimeout(() => {
            console.log('%ccreateShadowDOM -> setTimeout:3000', afterTimerLogStyle);
            console.timeLog(timerName);

            const h4 = root.querySelector('h4');
            h4.style.color = 'orange';
        }, 3000);
    }
};

module.exports = createShadowDOM;
