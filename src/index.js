import "./resources/styles/main.scss";

const htmlViewDocument = document.getElementById('first-view-html').import;
const viewNode = htmlViewDocument.body.querySelector('#template-1');
document.body.prepend(document.importNode(viewNode, true));

console.log('thisViewDocument', thisViewDocument);

const par = document.querySelector('p');
par.style.padding = '20px';
par.style.color = 'white';
