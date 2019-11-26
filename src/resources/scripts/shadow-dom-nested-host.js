const createShadowDOM = require('./../../factories/create-shadow-dom');

const ShadowDOMNestedHost = (function() {
    /**
     * ShadowDOMNestedHost custom element for hosting Shadow DOM!
     */

    let shadowDOMNestedHostCounter = 0;

    const ShadowDOMNestedHostProto = Object.create(HTMLElement.prototype);
    ShadowDOMNestedHostProto.createdCallback = function() {
        console.log('%cShadowDOMNestedHost::createdCallback', afterTimerLogStyle);
        console.timeLog(timerName);

        shadowDOMNestedHostCounter++;
        console.log(`ShadowDOMNestedHost: ${shadowDOMNestedHostCounter}`, this);
        this.style.display = 'inline-block';
        this.counter = shadowDOMNestedHostCounter;

        console.log('%cShadowDOMNestedHost::createdCallback - calling createShadowDOM', afterTimerLogStyle);
        console.timeLog(timerName);
        const templateEl = document.querySelector('template#shadow-dom-nested-host-template');
        createShadowDOM(this, templateEl);
    };
    ShadowDOMNestedHostProto.attachedCallback = function() {
        console.log('%cShadowDOMNestedHost::attachedCallback', afterTimerLogStyle);
        console.timeLog(timerName);

        console.log(`ShadowDOMNestedHost #${this.counter} is now attached!`, this);
    };
    ShadowDOMNestedHostProto.detachedCallback = function() {
        console.log('%cShadowDOMNestedHost::detachedCallback', afterTimerLogStyle);
        console.timeLog(timerName);

        console.log(`ShadowDOMNestedHost #${this.counter} is now detached!`, this);
    };
    ShadowDOMNestedHostProto.attributeChangedCallback = function(name, oldValue, value) {
        console.log('%cShadowDOMNestedHost::attributeChangedCallback', afterTimerLogStyle);
        console.timeLog(timerName);

        console.log(`ShadowDOMNestedHost #${this.counter}: its attribute "${name}" is now changed from (${name}="${oldValue}") to (${name}="${value}")!`, this);
    };

    return document.registerElement('shadow-dom-nested-host', {
        prototype: ShadowDOMNestedHostProto
    });
})();

module.exports = ShadowDOMNestedHost;
