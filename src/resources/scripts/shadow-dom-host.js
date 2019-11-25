const ShadowDOMHost = (function() {
    /**
     * ShadowDOMHost custom element for hosting Shadow DOM!
     */

    let shadowDOMHostCounter = 0;

    const ShadowDOMHostProto = Object.create(HTMLElement.prototype);
    ShadowDOMHostProto.createdCallback = function() {
        shadowDOMHostCounter++;
        console.log(`ShadowDOMHost: ${shadowDOMHostCounter}`, this);
        this.innerHTML = `<h3>My ${shadowDOMHostCounter} ShadowDOMHost custom element for hosting Shadow DOM!</h3>`;
        this.style.display = 'inline-block';
        this.style.paddingLeft = '1em';
        this.style.paddingRight = '1em';
        this.style.border = '2px black solid';
        this.style.outline = '2px red dashed';
        this.style.margin = '8px';

        this.counter = shadowDOMHostCounter;
    };
    ShadowDOMHostProto.attachedCallback = function() {
        console.log(`ShadowDOMHost #${this.counter} is now attached!`, this);
    };
    ShadowDOMHostProto.detachedCallback = function() {
        console.log(`ShadowDOMHost #${this.counter} is now detached!`, this);
    };
    ShadowDOMHostProto.attributeChangedCallback = function(name, oldValue, value) {
        console.log(`ShadowDOMHost #${this.counter}: its attribute "${name}" is now changed from (${name}="${oldValue}") to (${name}="${value}")!`, this);
    };

    return document.registerElement('shadow-dom-host', {
        prototype: ShadowDOMHostProto
    });
})();

module.exports = ShadowDOMHost;
