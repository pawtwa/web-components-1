const HelloWorld = require('../resources/scripts/initial/hello-world-lifecycle');

const element = document.querySelector('hello-world');
setTimeout(() => {
    element.setAttribute('style', 'color: blue;');
    setTimeout(() => {
        element.remove();
    }, 3000);
}, 3000);
