import "./resources/styles/main.scss";

import "./resources/scripts/shadow-dom-host";
import "./resources/scripts/shadow-dom-nested-host";

import "./controllers/shadow-dom-host";
import "./controllers/shadow-dom-nested-host";

document.addEventListener('click', (event) => {
    if (event.target.id === 'light-dom-button-disable-click') {
        clickEventDisabled = !clickEventDisabled;
        return;
    }
    if (event.target.id === 'light-dom-button-click-shadow-dom-button') {
        const host = document.getElementsByTagName('shadow-dom-host')[0];
        const btnEl = host.shadowRoot.getElementById('shadow-dom-button');
        btnEl.dispatchEvent(new Event('click'));
        // return;
    }
    if (
        clickEventDisabled
    ) {
        if (event.target.id === 'light-dom-button-change-shadow-dom-select') {
            const host = document.getElementsByTagName('shadow-dom-host')[0];
            const selectEl = host.shadowRoot.getElementById('shadow-dom-select');
            const newIndex = (selectEl.selectedIndex + 1) % selectEl.options.length;
            selectEl.value = selectEl.options[newIndex].value;
            selectEl.dispatchEvent(new Event('change'));
        }
        return;
    }
    alert(`${event.target.tagName}${event.target.id ? `#${event.target.id}` : ''}${event.target.className ? `.${event.target.className.replace(/\s/g, '.')}` : ''}` + ' was clicked')
});

document.addEventListener('change', (event) => {
    if (!clickEventDisabled) {
        return;
    }
    alert(`light dom: ${event.target.tagName}${event.target.id ? `#${event.target.id}` : ''}${event.target.className ? `.${event.target.className.replace(/\s/g, '.')}` : ''}` + ' was changed')
});
