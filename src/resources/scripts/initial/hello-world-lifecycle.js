const HelloWorld = (function() {
    /**
     * HelloWorld custom element using lifecycle callback methods!
     */

    let helloWorldCounter = 0;

    const HelloWorldProto = Object.create(HTMLElement.prototype);
    HelloWorldProto.createdCallback = function() {
        helloWorldCounter++;
        console.log(`HelloWorld: ${helloWorldCounter}`, this);
        this.innerHTML = `<h3>Hello World! My ${helloWorldCounter} HelloWorld custom element using lifecycle callback methods!</h3>`;
        this.style.display = 'inline-block';
        this.style.paddingLeft = '1em';
        this.style.paddingRight = '1em';
        this.style.border = '2px black solid';
        this.style.outline = '2px red dashed';
        this.style.margin = '8px';

        this.counter = helloWorldCounter;
    };
    HelloWorldProto.attachedCallback = function() {
        console.log(`HelloWorld #${this.counter} is now attached!`, this);
    };
    HelloWorldProto.detachedCallback = function() {
        console.log(`HelloWorld #${this.counter} is now detached!`, this);
    };
    HelloWorldProto.attributeChangedCallback = function(name, oldValue, value) {
        console.log(`HelloWorld #${this.counter}: its attribute "${name}" is now changed from (${name}="${oldValue}") to (${name}="${value}")!`, this);
    };

    return document.registerElement('hello-world', {
        prototype: HelloWorldProto
    });
})();

module.exports = HelloWorld;

