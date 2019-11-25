const createShadowDOM = (host, template) => {
    if (host instanceof HTMLElement) {
        const root = host.createShadowRoot();
        root.appendChild(document.importNode(template.content, true));
        console.log('h3 elements queried on Shadow DOM root from Shadow DOM', root.querySelectorAll('h3'));
        setTimeout(() => {
            const h4 = root.querySelector('h4');
            h4.style.color = 'orange';
        }, 3000);
    }
};

module.exports = createShadowDOM;
