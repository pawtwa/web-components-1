const SlickTabsExtension = (function() {
    /**
     * SlickTabsExtension - custom element extension!
     */

    let slickTabsExtensionCounter = 0;

    const SlickTabsExtensionProto = Object.create(HTMLParagraphElement.prototype);
    SlickTabsExtensionProto.createdCallback = function() {
        slickTabsExtensionCounter++;
        console.log(`SlickTabsExtended: ${slickTabsExtensionCounter}`, this);
        this.innerText = `My ${slickTabsExtensionCounter} SlickTabsExtension custom element!`;
        this.style.fontSize = `${(slickTabsExtensionCounter + 3) * (slickTabsExtensionCounter + 3)}px`;
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
        this.style.fontWeight = 'bold';
        this.style.display = 'inline-block';
        this.style.padding = '5px';
        this.style.paddingLeft = '12px';
        this.style.margin = '5px';
        this.style.border = '2px white solid';
        this.style.outline = '2px red dashed';
    };

    return document.registerElement('slick-tabs-extension', {
        prototype: SlickTabsExtensionProto,
        extends: 'p'
    });
})();

module.exports = SlickTabsExtension;

