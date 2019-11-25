const SlickTabs = (function() {
    /**
     * SlickTabs - custom element!
     */

    let slickTabsCounter = 0;

    const SlickTabsProto = Object.create(HTMLElement.prototype);
    SlickTabsProto.createdCallback = function() {
        slickTabsCounter++;
        console.log(`SlickTabs: ${slickTabsCounter}`, this);
        this.innerText = `My ${slickTabsCounter} SlickTabs custom element!`;
        this.style.fontSize = '15px';
        this.style.display = 'block';
        this.style.padding = '10px';
        this.style.paddingLeft = '25px';
        this.style.border = '2px black solid';
        this.style.outline = '2px red dashed';
        this.style.margin = '10px';
    };
    return document.registerElement('slick-tabs', {
        prototype: SlickTabsProto
    });
})();

module.exports = SlickTabs;

